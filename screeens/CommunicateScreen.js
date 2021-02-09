import React from 'react';
import {FlatList } from 'react-native';
import CommunicateGrid from '../components/CommunicateGrid';
import { COMMUNICATION } from '../data/dummy-data';


const CommunicateScreen =(props)=>{

    const renderGridItem = (itemData)=>{
        return <CommunicateGrid  
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.imageUrl}
        onSelect={()=>{
            props.navigation.navigate({
             routeName:'ConnectUser',
           });
           }}
        />;
    
    };
   return(
       <FlatList 
       keyExtractor={(item)=>item.id}
       data={COMMUNICATION} 
       renderItem={renderGridItem}
       />
   );
};

export default CommunicateScreen;