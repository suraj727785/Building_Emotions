import React from 'react';
import {Button, View,Text,StyleSheet,TextInput} from 'react-native';

const AddJournalScreen = () =>{

    return(
    <View>
    <Text style={styles.newText}>What Happened Today?</Text>
    <View style={styles.formControl}>
    <Text style={styles.label}>Heading:</Text>
    <View style={styles.inputContainer}>
    <TextInput
            placeholder="Very Good Day!!"
            style={styles.input}
            id="work"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={console.log("")}
            required
          />
          </View>
          </View>
          <View style={styles.inputContentContainer}>
      <TextInput
            placeholder="Start Writing what happened today!!!"
            multiline
            style={styles.input}
            id="work"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={console.log("")}
            required
          />
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
  input: {
    fontSize:22,
    padding:13
  },
  inputContainer:{
     backgroundColor:'white',
     borderRadius:10,
     marginLeft:20,
     width:'67%',
  },inputContentContainer:{
    backgroundColor:'white',
    borderRadius:10,
    marginHorizontal:5,
    width:'100%',
    height:240
 },
  buttonContainer:{
    width:'50%',
    alignSelf:'center',
    borderRadius:10,
    marginTop:30
  },
  newText:{
    color:'grey',
    marginLeft:5,
    fontSize:35,
    marginBottom:10
  }
});

export default AddJournalScreen;