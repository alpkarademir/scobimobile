import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function SendCont() {
  return (
    <View style={stylecomment.container}>
      <Text style={stylecomment.textArea}>Comments</Text>
    </View>
  );
}

const stylecomment = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 0.77,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  textArea: {
    justifyContent: 'center',
    flex: 0.1,
  },
});
