import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Platform, TouchableNativeFeedback,Image} from 'react-native';
import Card from './card';
const CategoryGridTitle =(props)=>{
    let TouchableCmp =TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback;
    }
    return <Card style={styles.product}>
        <TouchableCmp onPress={props.onSelect}>
      <View style={styles.touchable}>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </View>
        
      </View>
      </TouchableCmp>
    </Card>
    ;


}


const styles = StyleSheet.create({
    product: {
      height: 300,
      margin: 20
    },
    touchable: {
      borderRadius: 10,
      overflow: 'hidden'
    },
    imageContainer: {
      width: '100%',
      height: '82%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    details: {
      alignItems: 'center',
      height: '17%',
      padding: 10
    },
    title: {
      
      fontSize: 28,
      marginVertical: 1
    },
  });

export default CategoryGridTitle;