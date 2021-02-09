import React from 'react';
import {Text,View,StyleSheet,Dimensions ,TouchableOpacity,Platform, TouchableNativeFeedback} from 'react-native';


const HealthTrackGrid =(props)=>{
    let TouchableCmp =TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback;
    }
    return(
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{flex:1}}
        onPress={props.onSelect}
        >
          
        <View style={{...styles.container,...{backgroundColor:props.color}}}>
            <Text style={styles.title } numberOfLines={2}>{props.title}</Text>
        </View>
        </TouchableCmp>
        </View>
    );
}
const heightOfSection = Dimensions.get('window').height/2.1;


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center' 
    },
    gridItem:{
         flex:1,
         height:heightOfSection,
         overflow: Platform.OS==='android' && 'hidden',
         elevation:3,
         
    },
    container:{
        flex:1,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        padding:15,
        justifyContent:'center',
        alignSelf:'stretch',
        

    },
    title:{
        fontSize:25,
        textAlign:'center'
    }
});
export default HealthTrackGrid;