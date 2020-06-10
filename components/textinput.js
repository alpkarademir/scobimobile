/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, View, Icon, Text} from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{height: 40, width: 320, borderColor: 'gray', borderWidth: 1, borderRadius: 30, marginBottom: 12, padding: 10}}
      onChangeText={(text) => onChangeText(text)}
      autoCorrect= {false}
      value={value}
      placeholder="Doğrulama Kodu"
      autoCapitalize="none"
      placeholderTextColor="#A3A3A1"
    />
  );
}
