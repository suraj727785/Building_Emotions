import React,{useEffect}from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform, Button,FlatList,TouchableNativeFeedback,Alert } from 'react-native';
import Card from '../components/card';
import { Ionicons } from '@expo/vector-icons';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { deleteMedicine } from '../graphql/mutations';
import { useState } from 'react';


const MedicineScreen = (props)=>{
  const[medicines,setMedicines]=useState([]);

  useEffect(()=>{

    const fetchMedicines = async()=>{
      try{
    const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
    const userData= await API.graphql(graphqlOperation(
      getUser,{
        id:userInfo.attributes.sub,
      }
    ));
    setMedicines(userData.data.getUser.medicine.items);

    }catch(e){
      console.log(e);
    }
  }


    fetchMedicines();
  },[])

    const editMedicineHandler = id => {
        props.navigation.navigate('EditToDoScreen', { toDoListId: id });
      };
    
      const deleteHandler = (medicineId) => {
        Alert.alert('Are you sure?', 'You are not taking this Medicine more?', [
          { text: 'No', style: 'default' },
          {
            text: 'Yes',
            style: 'destructive',
            onPress: async() => {
              await API.graphql(graphqlOperation(
                deleteMedicine,{
                  input:{
                    id:medicineId
                  }
                }
              )) 
            }
          }
        ]);
      };

    const RenderMedicineList=(itemData)=>{
        let TouchableCmp =TouchableOpacity;
        if(Platform.OS==='android' && Platform.Version>=21){
            TouchableCmp=TouchableNativeFeedback; 
        }
            return(
            <Card style={styles.product}>
          <View style={styles.touchable}>
            <TouchableCmp onPress={props.onSelect} useForeground>
              <View style={styles.result}>
                 <Text style={styles.title}>{itemData.item.name}</Text>
                 <Text style={styles.date}>{itemData.item.time}</Text>
                 </View>
              </TouchableCmp>
          </View>
          <View style={styles.button}>
            <Button
            color='grey'
            title="Edit"       
            onPress={() => {
              editMedicineHandler(itemData.item.id);
            }}     
          />
          <Button
            color='grey'
            title="Dismiss"       
            onPress={() => {
              dismisHandler(itemData.item.id);
            }}     
          />
          <Button
            color='grey'
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
       data={medicines} 
       renderItem={RenderMedicineList} 
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

const styles = StyleSheet.create({
    product: {
      height: 80,
      margin: 5
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
        color: 'red',
        paddingLeft:15,
      },
    date:{
      
      fontSize: 22,
      color: '#888',
      paddingRight:5
    },
   button:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:8,
    color:'grey',
   }

  });

export default  MedicineScreen;