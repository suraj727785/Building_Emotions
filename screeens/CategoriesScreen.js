import React from 'react';
import {FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data.js';
import CategoryGridTitle from '../components/CategoryGridTitle';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from'../components/headerButtons';

const CategoriesScreen = props=>{
   
    const renderGridItem = (itemData)=>{
        const header = itemData.item.header; 
        return <CategoryGridTitle  
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
       data={CATEGORIES} 
       renderItem={renderGridItem}
       />
   );

};
CategoriesScreen.navigationOptions = navData => {
  return{
    headerTitle: 'Parents-Child',
    headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={()=>{
            navData.navigation.toggleDrawer();
         }}/>
    </HeaderButtons>
    
    };
};




export default CategoriesScreen;