import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform, FlatList,TouchableNativeFeedback } from 'react-native';
import Card from '../components/card';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from'../components/headerButtons';
import { useEffect, useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { getFamily} from './queries';



const TrackLocationScreen = (props)=>{
  
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

    return(
        <View>
       <FlatList 
       keyExtractor={(item)=>item.id}
       data={familyUsers} 
       renderItem={RenderUsers} 
       numColumns={1}
       />
       </View>
    );
}
TrackLocationScreen.navigationOptions = (navigationData)=>
{ 
 return{
  headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item title='Create' iconName='ios-settings' onPress={()=>{
    navigationData.navigation.navigate('LocationPermission');
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

});

export default TrackLocationScreen;