import React, {Component} from 'react';
import {TextInput, View, Icon, Text} from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{
        marginBottom: 25,
        height: 40,
        width: 200,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 30,
        marginLeft: 10,
      }}
      onChangeText={text => onChangeText(text)}
      autoCorrect={false}
      value={value}
    />
  );
}
