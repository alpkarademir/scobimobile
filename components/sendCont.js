import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import Textin3 from './textinput3';

export default function SendCont() {
  return (
    <View style={stylecomment.container}>
      <Text style={stylecomment.textArea}>Send Comment</Text>
      <Textin3 />
      <Button title="send" color="green" />
    </View>
  );
}

const stylecomment = StyleSheet.create({
  container: {
    flex: 0.23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    marginBottom: 0,
    justifyContent: 'center',
    flex: 0.5,
  },
});
