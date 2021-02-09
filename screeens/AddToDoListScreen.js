import React, {useState} from 'react';
import {Button, Platform,View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import { Ionicons , MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddToDoListScreen = () =>{
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    return(
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>Select Date:</Text>
        <TouchableOpacity onPress={showDatepicker}>
        <MaterialIcons name="date-range" size={38} color='grey' style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.showTime}>
          <Text style={styles.timeText}>20-12-2020</Text>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>Select Time:</Text>
        <TouchableOpacity onPress={showTimepicker}>
        <Ionicons name="time-outline" size={38} color='grey' style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.showTime}>
          <Text style={styles.timeText}>10:10 AM</Text>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    <View style={styles.formControl}>
    <Text style={styles.label}>Work:</Text>
    <View style={styles.inputContainer}>
    <TextInput
            style={styles.input}
            id="work"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={console.log("")}
            required
          />
          </View>
          </View>
          <View style={styles.buttonContainer}>
          <Button
            color="grey"
            title="Create"       
            onPress={() => {
              console.log("");
            }}     
          />
          </View>
         
    </View>
    );
};
const styles= StyleSheet.create({
  formControl: {
    width: '100%',
    flexDirection:'row',
    paddingVertical:8,
  },
  label: {
    color:'grey',
    marginLeft:5,
    fontSize:35
  },
  date:{
    fontSize:35,
    marginLeft:5,
    color:'grey',
  },
  icon:{
    marginLeft:5,
  },
  input: {
    fontSize:22,
    padding:13
  },
  inputContainer:{
     backgroundColor:'white',
     borderRadius:10,
     marginLeft:20,
     width:'67%',
  },
  dateContainer:{
    flexDirection:'row',
    alignItems:'flex-end',
    paddingVertical:8,

  },
  buttonContainer:{
    width:'50%',
    alignSelf:'center',
    borderRadius:10,
    marginTop:30
  },
  showTime:{
    borderWidth:0.5,
    marginLeft:5,
  },
  timeText:{
    fontSize:26,
    color:'grey',
    paddingHorizontal:4

  }
});

export default AddToDoListScreen;