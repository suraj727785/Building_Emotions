import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet, FlatList,Image} from 'react-native';
import Card from '../components/card';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { getFamily} from './queries';


const FitBitScreen = ()=>{
  const [familyUsers,setFamilyUsers]=useState([]);

  useEffect(()=>{

    const fetchFamilyUser = async()=>{
      try{
    const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
    const userData= await API.graphql(graphqlOperation(
      getUser,{
        id:userInfo.attributes.sub,
      }
    ));
    const familyId=userData.data.getUser.familyUser.items[0].familyID;
    const getFamilyUsers= await API.graphql(graphqlOperation(
      getFamily,{
        id:familyId,
      }
    ));
    setFamilyUsers(getFamilyUsers.data.getFamily.familyUsers.items);
    

    }catch(e){
      console.log(e);
    }
  }


    fetchFamilyUser();
  },[]);

    const RenderUsers=(itemData)=>{
        return(
        <Card style={styles.product}>
      <View style={styles.touchable}>
            <View style={styles.details}>
              <Text style={styles.title}>{itemData.item.user.name}</Text>
            </View>
            <View style={styles.container}>
            <View style={styles.heart}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: 'https://ak2.picdn.net/shutterstock/videos/5772212/thumb/1.jpg'}} />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.title1}>Heart Rate: </Text>
            <Text style={styles.data}>60 </Text>
            <Text style={styles.dataTitle}>BPM</Text>
            </View>
                </View>
                <View style={styles.steps}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: 'https://i.ndtvimg.com/i/2017-09/morning-walks-offer-life-changing-benefits_650x400_61504759821.jpg' }} />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.title1}>Steps: </Text>
            <Text style={styles.data}>1400 </Text>
            <Text style={styles.dataTitle}>steps</Text>
            </View>
                </View>
            </View>
        
      </View>
    </Card>
        );

    };

    return(
        <View>
       <FlatList 
       keyExtractor={(item)=>item.id}
       data={familyUsers} 
       renderItem={RenderUsers} 
       numColumns={1}
       />
       </View>
    );
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
      width: 190,
      height: 180,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden'
    },
    image: {
      width: '80%',
      height: '80%'
    },
    details: {
      alignItems: 'center',
      height: '17%',
      padding: 10,
      marginBottom:10
    },
    title: {
      
      fontSize: 28,
      marginVertical: 1
    },
    container:{
        flexDirection:'row',
    },
    heart:{
        alignSelf:'flex-start',
        marginLeft:5
    },
    steps:{
        alignSelf:'flex-end',
        marginRight:5
    },
    title1:{
        
        fontSize: 19,
        marginVertical: 1
    },
    data:{
        marginTop:4,
        fontSize: 16,
    },
    dataTitle:{
        marginTop:4,
        fontSize: 14,
    }
  });

export default FitBitScreen;