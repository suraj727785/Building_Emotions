import React from 'react';
import {Image,View,StyleSheet} from 'react-native';

const HealthReportImage = (props) =>{
    const imageUri = props.navigation.getParam('imageUri');
    return(
        <View>
        <Image style={styles.image} resizeMode='contain'  source={{uri:imageUri}} />
        </View>

    );

};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
      },
})

export default HealthReportImage;