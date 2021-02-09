import React from 'react';
import moment from 'moment';
import {View,Text,StyleSheet,TouchableOpacity,Platform, FlatList,TouchableNativeFeedback } from 'react-native';
import Card from '../components/card';
import { Ionicons } from '@expo/vector-icons';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { useState,useEffect } from 'react';
import sortBy from 'array-sort-by';

const JournalScreen = (props)=>{
  const[journal,setJournal]=useState([]);

  useEffect(()=>{

    const fetchJournal= async()=>{
      try{
    const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
    const userData= await API.graphql(graphqlOperation(
      getUser,{
        id:userInfo.attributes.sub,
      }
    ));
     setJournal(userData.data.getUser.diary.items);

    }catch(e){
      console.log(e);
    }
  }


  fetchJournal();
  },[])
  sortBy(journal, item => item.updatedAt);



    let TouchableCmp =TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback; 
    }

    const RenderJournals=(itemData)=>{
        return(
         <Card style={styles.product}>
          <View style={styles.touchable}>
            <TouchableCmp onPress={()=>{
             props.navigation.navigate('JournalDetail', { 
               journalId: itemData.item.id,
               journalName:itemData.item.name
               });
                }} useForeground>
              <View>
                 <View style={styles.result}>
                 <Text style={styles.title}>{itemData.item.name}</Text>
                 <Text style={styles.date}>{moment(itemData.item.updatedAt).format('DD-MM-YYYY')}</Text>
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
       data={journal} 
       renderItem={RenderJournals} 
       numColumns={1}
       />
       <View style={{alignSelf:'center'}}>
       <Ionicons name='ios-add-circle' size={72} color="grey" 
       onPress={()=>{
           props.navigation.navigate({
             routeName:'AddJournal',
           });
       }}
       />
       </View>
       </View>
    );
}

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
      color: '#888',
      paddingLeft:15,
    },
  date:{
    
    fontSize: 16,
    color: '#888',
    paddingRight:5
  },
  });

export default JournalScreen;