import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform, FlatList,TouchableNativeFeedback,Image } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from'../components/headerButtons';
import Card from '../components/card';
import { useEffect,useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { getFamily} from './queries';

const ReciepeScreen=(props)=>{

  const [reciepe,setReciepe]=useState([]);

  useEffect(()=>{

    const fetchFamilyUser = async()=>{
      try{
    const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
    const userData= await API.graphql(graphqlOperation(
      getUser,{
        id:userInfo.attributes.sub,
      }
    ));
    const familyId=userData.data.getUser.familyUser.items[0].familyID;
    const getReciepe= await API.graphql(graphqlOperation(
      getFamily,{
        id:familyId,
      }
    ));
    setReciepe(getReciepe.data.getFamily.reciepe.items);
    

    }catch(e){
      console.log(e);
    }
  }


    fetchFamilyUser();
  },[]);

    let TouchableCmp =TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback; 
    }

    const renderRecipeItem = (itemData)=>{
         return(
     <Card style={styles.product}>
        <TouchableCmp onPress={()=>{
             props.navigation.navigate('ReciepeDetail', { 
               mealId: itemData.item.id,
               mealName:itemData.item.reciepeName
             });
                }}>
      <View style={styles.touchable}>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: itemData.item.reciepeImageUri }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{itemData.item.reciepeName}</Text>
            </View>
          </View>
        
      </View>
      </TouchableCmp>
    </Card>
         );
        
     
    
    };
   return(
       <View>
       <FlatList 
       keyExtractor={(item)=>item.id}
       data={reciepe} 
       renderItem={renderRecipeItem} 
       numColumns={1}
       />
       </View>
   );
};

ReciepeScreen.navigationOptions = navData => {
    return{
      headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Create' iconName='ios-add' onPress={()=>{
              navData.navigation.navigate('AddReciepe');
           }}/>
      </HeaderButtons>
      
      };
  };

  const styles = StyleSheet.create({
    product: {
      height: 300,
      margin: 20
    },
    touchable: {
      borderRadius: 10,
      overflow: 'hidden'
    },
    imageContainer: {
      width: '100%',
      height: '82%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    details: {
      alignItems: 'center',
      height: '17%',
      padding: 10
    },
    title: {
      
      fontSize: 28,
      marginVertical: 1
    },
  });


export default ReciepeScreen;