import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import CategoriesScreen from '../screeens/CategoriesScreen';
import Colors from '../constants/color';
import React from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import Communicate from '../screeens/CommunicateScreen';
import ConnectUserScreen from '../screeens/ConnectUserScreen';
import HealthTrackScreen from '../screeens/HealthTrackScreen';
import LoactionPermission from '../screeens/LocationPermissionScreen'
import ReciepeScreen from '../screeens/ReciepeScreen';
import TrackLocationScreen from '../screeens/TrackLocationScreen';
import FunScreen from '../screeens/FunScreen';
import FitBitScreen from '../screeens/FitBitScreen';
import JournalScreen from '../screeens/JournalScreen';
import ResultsScreen from '../screeens/ResultsScreen';
import ToDoListScreen from '../screeens/ToDoListScreen';
import HealthReportScreen from '../screeens/HealthReportScreen';
import HealthReportImage  from '../screeens/HealthReportImage';
import MedicineScreen from '../screeens/medicineScreen';
import ReciepeDetailScreen from '../screeens/ReciepeDetailScreen';
import ResultsImageScreen from '../screeens/ResultImageScreen';
import JournalDetailScreen from '../screeens/JournalDetailScreen';
import EmergencyScreen from '../screeens/EmergencyScreen';
import ContactShareScreen from '../screeens/ShareContactScreen';
import NotificationScreen from '../screeens/NotificationScreen';
import AddToDoListScreen from '../screeens/AddToDoListScreen';
import AddJournalScreen from '../screeens/AddJournalScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Auth } from 'aws-amplify';
const defaultStackNav =
    {
            headerStyle:{
                backgroundColor:Colors.primaryColor
            },
            headerTintColor:'white'
    }
const Navigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle:'Building_Emotions'
        } 
    },
    Communicate:{
        screen:Communicate,
        navigationOptions:{
            headerTitle:'Connect'
        } 
    },
    Track:{
        screen:HealthTrackScreen,
        navigationOptions:{
            headerTitle:'Track Health'
        } 
    },
    Reciepe:{
        screen:ReciepeScreen,
        navigationOptions:{
            headerTitle:'Reciepe you love'
        } 
    },
    AddReciepe:{
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle:'Add Some Tasty Recipes'
        } 
    },
    Location:{
        screen:TrackLocationScreen,
        navigationOptions:{
            headerTitle:'Know The Location'
        } 
    },
       Fun:{
        screen:FunScreen,
        navigationOptions:{
            headerTitle:'Games'
        } 
    },
    Journal:{
        screen:JournalScreen,
        navigationOptions:{
            headerTitle:'Your Daily Journal'
        } 
    },
    Result:{
        screen:ResultsScreen,
        navigationOptions:{
            headerTitle:'Result'
        } 
    },
    List:{
        screen:ToDoListScreen,
        navigationOptions:{
            headerTitle:'To Do List'
        } 
    },
    Health:{
        screen:HealthReportScreen,
        navigationOptions:{
            headerTitle:'Reports'
        } 
    },
    HealthReportImage:{
        screen:HealthReportImage ,
        navigationOptions:{
            headerTitle:'Reports'
        } 
    },
    Medicine:{
        screen:MedicineScreen ,
        navigationOptions:{
            headerTitle:'Medicine Reminders'
        } 
    },
    Emergency:{
        screen: EmergencyScreen,
        navigationOptions:{
            headerTitle:'Emergency'
        } 
    },
    Notification:{
        screen: NotificationScreen,
        navigationOptions:{
            headerTitle:'Notification'
        } 
    },
    Fit:{
        screen:FitBitScreen ,
        navigationOptions:{
            headerTitle:'Fit-Bit'
        } 
    },
    LocationPermission:{
        screen:LoactionPermission ,
        navigationOptions:{
            headerTitle:'Give Acesss!'
        } 
    },
    ContactShare:{
        screen:ContactShareScreen,
        navigationOptions:{
            headerTitle:'Give Acesss!'
        } 
    },
    ConnectUser:{
        screen:ConnectUserScreen ,
        navigationOptions:{
            headerTitle:'Connect'
        } 
    },
    AddToDoList:{
        screen:AddToDoListScreen ,
        navigationOptions:{
            headerTitle:'Add To Do'
        } 
    },
    AddJournal:{
        screen:AddJournalScreen ,
        navigationOptions:{
            headerTitle:'Today Diary!'
        } 
    }
    ,
    ReciepeDetail:{
        screen:ReciepeDetailScreen ,
    },
    ResultImage:{
        screen:ResultsImageScreen,
    },
    JournalDetail:{
        screen:JournalDetailScreen,
    },



    
},{defaultNavigationOptions:defaultStackNav

}
);


const MainNavigator = createDrawerNavigator({

    Add:{
        screen: Navigator,
        navigationOptions:{
        drawerLabel:'Add your loved ones'
    },},
    Edit:{
        screen: Navigator,
        navigationOptions:{
        drawerLabel:'Edit your loved ones'
    },},
    Emergency:{
        screen: EmergencyScreen,
        navigationOptions:{
        drawerLabel:'Emergency',
    },},
    Notification:{
        screen: NotificationScreen,
        navigationOptions:{
        drawerLabel:'Notification',
    },},
},{
    contentOptions: {
      activeTintColor: Colors.primary
    },
contentComponent: props => {
    async function handleLogout(){
        await Auth.signOut();
    }
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...props} />
          <Button
            title="Logout"
            color={Colors.primary}
            onPress={() => {handleLogout()}}
          />
        </SafeAreaView>
      </View>
    );
  }
}
);
const FinalNavigator = createSwitchNavigator({
    Main: MainNavigator,
})

export default createAppContainer(FinalNavigator);