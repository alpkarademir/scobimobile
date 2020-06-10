import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import TextInput1 from '../tfaTextInput';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const TwoFAScreen = () => {
  const onClick = () => {
    Actions.homeScreen();
  }
  return (
    <View style={styles.container} >
      <Image 
      style={styles.logo}
      source={require('../../assets/2fa.png')}
      />
      <Text style={styles.textarea}>Lütfen 2FA kodunuzu giriniz.</Text>
      <TextInput1></TextInput1>
      <TouchableOpacity
        style={styles.button}
        onPress={onClick}
      >
        <FontAwesomeIcon icon={faCheck} size={20} />
        <Text>   Doğrula </Text>
      </TouchableOpacity>
    </View>                   
  );
}

export default TwoFAScreen

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textarea: {
      marginTop: 5,
      flex:0.06,
    },
    logo: {
      flex: 0.35,
        width:230,
    },
    button: {
      alignItems: "center",
      backgroundColor: "cadetblue",
      borderRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderWidth: 1,
      flexDirection: 'row',
    },
  });
