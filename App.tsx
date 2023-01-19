/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmitted = () =>{
    if(name.length != 0){
      setSubmitted(!submitted)
    } else{
      // Alert.alert('Warning!', 'Name must be entered.', [
      //   {
      //     text: 'Do not show again'
      //   },
      //   {
      //     text: 'OK'
      //   },
      // ], {
      //   cancelable:true
      // })

      ToastAndroid.show('Please enter your name', ToastAndroid.LONG)
    }
  }
  
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please enter your name</Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g. Jagat Jeeban'
      onChangeText={(value) => {setName(value)}}
      >
      </TextInput>
      {<TouchableOpacity
      style={
        {
          backgroundColor: '#6495ED',
          width:200,
          height: 50,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:5
        }
      }
      activeOpacity={0.8}
      onPress={onSubmitted}
      >
        <Text style={styles.buttonText}>{submitted? 'Clear': 'Submit'}</Text>
      </TouchableOpacity>
    }
      {submitted?
      <Text style={styles.text}>
        You're registered as {name}</Text>
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    alignItems:'center',
    justifyContent: 'center',
    margin: 20,
    color: '#ffffff'
  },
  input:{
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    marginBottom: 30
  },
  buttonText:{
    color: '#000000',
    fontSize:18
  }
});

export default App;
