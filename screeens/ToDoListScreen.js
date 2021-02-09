import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform, Button,FlatList,TouchableNativeFeedback,Alert } from 'react-native';
import Card from '../components/card';
import Colors from '../constants/color';
import { Ionicons } from '@expo/vector-icons';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { deleteTodo } from '../graphql/mutations';
import { useState,useEffect } from 'react';
import sortBy from 'array-sort-by';


const ToDoListScreen = (props)=>{
  const[toDoList,setToDoList]=useState([]);

  useEffect(()=>{

    const fetchToDoList= async()=>{
      try{
    const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
    const userData= await API.graphql(graphqlOperation(
      getUser,{
        id:userInfo.attributes.sub,
      }
    ));
    setToDoList(userData.data.getUser.todo.items);

    }catch(e){
      console.log(e);
    }
  }


  fetchToDoList();
  },[])

  sortBy(toDoList, item => item.time);

    const edittoDoListHandler = id => {
        props.navigation.navigate('EditToDoScreen', { toDoListId: id });
      };
    
      const deleteHandler = (toDoId) => {
        Alert.alert('Are you sure?', 'Did you done this work?', [
          { text: 'No', style: 'default' },
          {
            text: 'Yes',
            style: 'destructive',
            onPress: async() => {
              await API.graphql(graphqlOperation(
                deleteTodo,{
                  input:{
                    id:toDoId
                  }
                }
              )) 
            }
          }
        ]);
      };

    const RenderToDoList=(itemData)=>{
        let TouchableCmp =TouchableOpacity;
        if(Platform.OS==='android' && Platform.Version>=21){
            TouchableCmp=TouchableNativeFeedback; 
        }
            return(
            <Card style={styles.product}>
          <View style={styles.touchable}>
            <TouchableCmp onPress={props.onSelect} useForeground>
              <View>
                <View style={styles.details}>
                  <Text style={styles.title}>{itemData.item.name}</Text>
                 </View>
                 <View style={styles.result}>
                 <Text style={styles.date}>{itemData.item.date}</Text>
                 <Text style={styles.time}>{itemData.item.time}</Text>
                 </View>
              </View>
              </TouchableCmp>
          </View>
          <View style={styles.button}>
            <Button
            color={Colors.primary}
            title="Edit"       
            onPress={() => {
              edittoDoListHandler(itemData.item.id);
            }}     
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
          </View>
        </Card>
            );
    
        };

    return(
        <View>
       <FlatList 
       keyExtractor={(item)=>item.id}
       data={toDoList} 
       renderItem={RenderToDoList} 
       numColumns={1}
       />
       <View style={{alignSelf:'center'}}>
       <Ionicons name='ios-add-circle' size={72} color="grey" 
       onPress={()=>{
           props.navigation.navigate({
             routeName:'AddToDoList',
           });
       }}
       />
       </View>
       </View>
    );
}

const styles = StyleSheet.create({
    product: {
      height: 100,
      margin: 5
    },
    touchable: {
      borderRadius: 10,
      overflow: 'hidden'
    },
    details: {
      alignItems: 'center',
      height: '30%',
      padding: 10
    },
    title: {
      
      fontSize: 18,
      marginVertical: 2
    },
    price: {
      
      fontSize: 14,
      color: '#888'
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '23%',
      paddingHorizontal: 20
    },
   date:{
    
    fontSize: 18,
    justifyContent: 'space-between',
    color: '#888',
    paddingLeft:8
   },
   time:{
    
    fontSize: 18,
    marginVertical: 2,
    color: '#888',
    marginRight:10,

   },
   button:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 80
   },
   result: {
    marginVertical: 2,
    marginHorizontal:2,
    flexDirection:'row',
    justifyContent: 'space-between',
  },

  });

export default ToDoListScreen;