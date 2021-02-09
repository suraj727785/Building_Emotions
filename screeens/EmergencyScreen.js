import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform, FlatList,TouchableNativeFeedback } from 'react-native';
import Card from '../components/card';
import Colors from '../constants/color';
import HeaderButton from'../components/headerButtons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { useEffect, useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { getFamily} from './queries';





const EmergencyScreen = (props)=>{
  
  const [familyUsers,setFamilyUsers]=useState([]);

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
    const getFamilyUsers= await API.graphql(graphqlOperation(
      getFamily,{
        id:familyId,
      }
    ));
    setFamilyUsers(getFamilyUsers.data.getFamily.familyUsers.items);
    

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

    const RenderUsers=(itemData)=>{
        return(
        
        <Card style={styles.product}>
          <View style={styles.touchable}>
            <TouchableCmp onPress={props.onSelect} useForeground>
              <View>
                 <View style={styles.result}>
                 <Text style={styles.title}>{itemData.item.user.name}</Text>
                 </View>
              </View>
              </TouchableCmp>
         </View>
        </Card>
       
        );

    };

    
    const []= useState(false);

    return(
        <View>
          <View style={styles.borderTop}>
          <Text style={styles.header}>Click to view Last Contact person:</Text>
          <Text style={styles.note}>if his/her mobile will be off for more than 4 hrs than only you can see: </Text>
          </View>
       <FlatList 
       keyExtractor={(item)=>item.id}
       data={familyUsers} 
       renderItem={RenderUsers} 
       numColumns={1}
       />
       </View>
    );
}

EmergencyScreen.navigationOptions = (navigationData)=>
{ 
 return{
  headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item title='Create' iconName='ios-settings' onPress={()=>{
    navigationData.navigation.navigate('ContactShare');
   }}/>
</HeaderButtons>

 };
};


const styles = StyleSheet.create({
  product: {
    height: 50,
    margin: 3
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  result: {
    marginVertical: 2,
    marginHorizontal:2,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  title: {
    
    fontSize: 28,
    color: '#789',
    paddingLeft:15,
  },
  header:{
    
    fontSize:19,
    color:Colors.accentColor
  },
  note:{
    fontSize:13,
    color:'#888',
  },
  borderTop:{
    marginBottom:5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  }

});

export default EmergencyScreen;