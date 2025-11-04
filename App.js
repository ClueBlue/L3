import { Text, View, TextInput, Button, ScrollView, Alert, TouchableOpacity, ToastAndroid } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StatusBar } from 'expo-status-bar';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';

const App = () => {
const [un, setUn] = useState('');
const [pw, setPw] = useState('Admin');
  return (
  <View>
  <Text>User Type:</Text>
  <Picker onValueChange={(value) => console.log(value)}>
        <Picker.Item label='Admin' value='admin'/>
         <Picker.Item label='Guest' value='guest'/>
        </Picker>
  <Text>User Name:</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={(text) => setUn(text)}/>
  <Text>Password:</Text>
    <TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)}/>
  <StatusBar translucent={false} />
<TouchableOpacity onPress={() => {
  const correctpw = '123'
  let mymessage = "Error! Wrong Password!"
  if(pw == correctpw) {
    mymessage = "Welcome "+un+" "+pw;
  }
  ToastAndroid.show(mymessage, ToastAndroid.SHORT)}
  }>
  <Text>LOG IN</Text>
</TouchableOpacity>
<Text>Test {un} {pw}</Text>
</View>
);
};

export default App


