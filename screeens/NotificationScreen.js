import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform, TouchableNativeFeedback } from 'react-native';





const NotificationScreen = ()=>{
    let TouchableCmp =TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback; 
    }



    
    const []= useState(false);

    return(
        <View>
          <View style={styles.borderTop}>
          <Text style={styles.note}>No new notification! </Text>
          </View>

       </View>
    );
}



const styles = StyleSheet.create({
  note:{
    fontSize:20,
    color:'#888',
  },
  borderTop:{
    marginBottom:5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  }

});

export default NotificationScreen;