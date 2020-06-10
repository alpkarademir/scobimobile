import React, {Component} from 'react';
import {TextInput, View, Icon, Text} from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{
        marginBottom: 15,
        height: 110,
        width: 300,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
      }}
      onChangeText={text => onChangeText(text)}
      autoCorrect={false}
      value={value}
    />
  );
}
