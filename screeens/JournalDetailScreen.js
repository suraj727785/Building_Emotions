import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import moment from 'moment';
import { useEffect,useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getDiary } from '../graphql/queries';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from'../components/headerButtons';

const JournalDetailScreen = (props) =>{
     [journalData,setJournalData]=useState([]);
    const journalId = props.navigation.getParam('journalId');
    useEffect(()=>{ 
        const getJournalDetails=async()=>{
            try{
        const getJournalData= await API.graphql(graphqlOperation(
            getDiary,{
                id:journalId
            }
        ));
       setJournalData(getJournalData.data.getDiary);
            

            }catch(e){
                console.log(e);
            }
        }
        getJournalDetails();
    },[]);
    return(
        <View>
        <View style={styles.header}>
        <Text style={styles.title}>{journalData.name}</Text>
        <View>
        <Text style={styles.date}>{moment(journalData.updatedAt).format('DD-MM-YYYY')}</Text>
        <Text style={styles.time}>{moment(journalData.updatedAt).format('HH:MM a')}</Text>
        </View>
        </View>
        <View style={styles.content}>
        <Text>{journalData.content}</Text>
        </View>
        </View>
    );

};

JournalDetailScreen.navigationOptions = (navigationData)=>
{ 
    const journalName = navigationData.navigation.getParam('journalName');

 return{
     headerTitle: journalName,
     headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
     <Item title='Create' iconName='md-trash' onPress={()=>{
         {/* navData.navigation.navigate(''); */}
      }}/>
 </HeaderButtons>

 };
};


const styles = StyleSheet.create({
title:{
    fontSize:28,
    textAlign:'center',
    marginBottom:8
},
date:{
    fontSize:18,
    marginRight:6,
    color:'grey'

},
time:{
    fontSize:18,
    alignSelf:'flex-end',
    color:'grey'

},
content:{
    fontSize:26,
},
header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:12,
    borderBottomColor:'#888',
    borderBottomWidth:2
}
})

export default JournalDetailScreen;