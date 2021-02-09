import React from 'react';
import {Image,View,StyleSheet} from 'react-native';

const ResultImageScreen = (props) =>{
    const imageUri = props.navigation.getParam('imageUri');
    return(
        <View>
        <Image style={styles.image} resizeMode='contain' source={{uri:imageUri}} />
        </View>

    );

};

ResultImageScreen.navigationOptions = (navigationData)=>
{ 
    const resultTitle= navigationData.navigation.getParam('resultTitle');

 return{
     headerTitle:  resultTitle,

 };
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
      },
})

export default ResultImageScreen;