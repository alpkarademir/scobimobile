import React, {Component} from 'react';
import {TextInput, View, Icon, Text} from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{
        marginTop: 5,
        marginBottom: 10,
        height: 40,
        width: 320,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 30,
      }}
      onChangeText={text => onChangeText(text)}
      autoCorrect={false}
      value={value}
    />
  );
}
