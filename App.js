import React , {useEffect} from 'react';
import Navigator from './navigation/Navigator';
import { LogBox } from "react-native";
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify, { Auth,API,graphqlOperation } from 'aws-amplify';
import config from './aws-exports'
import {getUser} from './graphql/queries';
import {createUser} from './graphql/mutations';
Amplify.configure(config)



function App() {
   LogBox.ignoreAllLogs();

  // run this snippet only after first time app is mounted
  try{
  useEffect(()=>{
    const fetchUser= async () => {
  const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
  const userData= await API.graphql(
    graphqlOperation(getUser,{id: userInfo.attributes.sub})
  );
  
  if(userData.data.getUser){
    console.log("User is already registered in database");
    return;
  }
  const newUser={
    id:userInfo.attributes.sub,
    name:userInfo.username,
  }

 await API.graphql(graphqlOperation(
   createUser,
   {input:newUser}
 ))


  // If there is no user in DB with the id create new user

    }
    fetchUser();
  },[]);
}catch(e){
  console.log(e);
}
  return ( 
    <Navigator/>
  );
}

export default withAuthenticator(App)