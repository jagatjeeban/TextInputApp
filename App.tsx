/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
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
  const [showModal, setModal] = useState(false)

  const onSubmitted = () =>{
    if(name.length != 0){
      setSubmitted(!submitted)
    } else{
      Alert.alert('Warning!', 'Name must be entered.', [
        {
          text: 'Do not show again'
        },
        {
          text: 'OK'
        },
      ], {
        cancelable:true
      })

      // ToastAndroid.show('Please enter your name', ToastAndroid.LONG)

      setModal(true)
    }
  }
  
  return (
    <View style={styles.body}>
        <Text
        style={styles.text}>
        Please enter your name
        </Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g. Jagat Jeeban'
      placeholderTextColor={'#00000099'}
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
          borderRadius:5,
        }
      }
      activeOpacity={0.8}
      onPress={onSubmitted}
      >
        <Text style={styles.buttonText}>{submitted? 'Clear': 'Submit'}</Text>
      </TouchableOpacity>
    }
      {
      submitted?
      <View>
        <Text style={styles.text}>
          You're registered as {name}
        </Text>
        <Image  
          style={styles.image}
          resizeMode={'stretch'}
          source={require('./assets/done.jpg')}/>
      </View>
      
        
        : 
        <Image  
        style={styles.image}
        resizeMode={'stretch'}
        source={require('./assets/error.jpg')}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor:'#ffffff',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    margin: 20,
    color: '#000000',
    fontWeight:'bold',
    textAlign:'center'
  },
  input:{
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    marginBottom: 10,
    color:'#000000'
  },
  buttonText:{
    color: '#ffffff',
    fontSize:18
  },
  image:{
    width:300,
    height:200,
  }
});

export default App;
