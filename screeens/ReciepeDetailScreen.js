import React from 'react';
import {View,Text,ScrollView,StyleSheet, Image ,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
import { useEffect,useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getReciepe } from '../graphql/queries';


const ReciepeDetailScreen = props=>{
    [mealData,setMealData]=useState([]);
    const mealId = props.navigation.getParam('mealId');
    useEffect(()=>{
        const getReciepeDetails=async()=>{
            try{
        const getMealData= await API.graphql(graphqlOperation(
            getReciepe,{
                id:mealId
            }
        ));
        setMealData(getMealData.data.getReciepe);
            

            }catch(e){
                console.log(e);
            }
        }
      getReciepeDetails();
    },[]);

    let TouchableCmp =TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback;
    }

    

    
    

   return(
       <ScrollView>  
            <Image source={{uri: mealData.reciepeImageUri}} style={styles.image}/>
            <Text style={styles.title}>Ingredients</Text>
            <View style={styles.listItem}>
            <Text>{mealData.reciepeIngredient}</Text>
            </View>
            <Text style={styles.title}>Steps</Text>
            <View style={styles.listItem}>
            <Text>{mealData.reciepeContent}</Text>
            </View>
            <Text style={styles.title}>Audio Reciepe</Text>
            <View style={styles.listItem}>   
            <Text>Click to play Audio Reciepe</Text>
            </View>
       </ScrollView>
   )

};

ReciepeDetailScreen.navigationOptions = (navigationData)=>
{ 
    const mealName = navigationData.navigation.getParam('mealName');
 return{
     headerTitle: mealName,

 };
};
const styles =StyleSheet.create({
image:{
     width:'100%',
     height:200
},
details:{
    flexDirection:'row',
    padding:15,
    justifyContent:'space-around'
},
title:{
    fontSize:22,
    textAlign:'center'

},
listItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:'#ccc',
    borderWidth:1,
    padding:10
},
header:{
    fontSize:30,
    textAlign:'center',
    backgroundColor: '#888',
}
});

export default  ReciepeDetailScreen;