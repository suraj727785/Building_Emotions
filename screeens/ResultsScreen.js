import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform, FlatList,TouchableNativeFeedback } from 'react-native';
import Card from '../components/card';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { getFamily} from './queries';



const ResultsScreen = (props)=>{
  const [results,setResults]=useState([]);

  useEffect(()=>{

    const fetchResults = async()=>{
      try{
    const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
    const userData= await API.graphql(graphqlOperation(
      getUser,{
        id:userInfo.attributes.sub,
      }
    ));
    const familyId=userData.data.getUser.familyUser.items[0].familyID;
    const getResults= await API.graphql(graphqlOperation(
      getFamily,{
        id:familyId,
      }
    ));
    setResults(getResults.data.getFamily.result.items);
    

    }catch(e){
      console.log(e);
    }
  }


   fetchResults();
  },[]);

    let TouchableCmp =TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback; 
    }


    const RenderResults=(itemData)=>{
        return(
         <Card style={styles.product}>
          <View style={styles.touchable}>
            <TouchableCmp onPress={()=>{
             props.navigation.navigate('ResultImage', { 
               imageUri: itemData.item.resultImageUri,
               resultTitle:itemData.item.resultName
               
             });
                }} useForeground>
              <View>
                 <View style={styles.result}>
                 <Text style={styles.title}>{itemData.item.resultName}</Text>
                 <Text style={styles.percentage}>{itemData.item.resultPercentage}%</Text>
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
       data={results} 
       renderItem={RenderResults} 
       numColumns={1}
       />
       <View style={{alignSelf:'center'}}>
       <Ionicons name='ios-add-circle' size={72} color="grey" 
       onPress={()=>{
           props.navigation.navigate({
             routeName:'Fun',
           });
       }}
       />
       </View>
       </View>
    );
}
;const styles = StyleSheet.create({
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
    color: '#888',
    paddingLeft:15,
  },
percentage:{
  
  fontSize: 28,
  color: '#888',
  paddingRight:5
},
});

export default ResultsScreen;