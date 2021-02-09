import React from 'react';
import {FlatList } from 'react-native';
import HealthTrackGrid from '../components/CommunicateGrid';
import { HEALTHTRACK } from '../data/dummy-data';


const HealthTrackScreen =(props)=>{

    const renderGridItem = (itemData)=>{
        const header = itemData.item.header;  
        return <HealthTrackGrid  
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.imageUrl}
        onSelect={()=>{
            props.navigation.navigate({
             routeName:`${header}`,
           });
           }}
        />;
    
    };
   return(
       <FlatList 
       keyExtractor={(item)=>item.id}
       data={HEALTHTRACK} 
       renderItem={renderGridItem} 
       />
   );
};

export default HealthTrackScreen;