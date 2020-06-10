import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

function UselessTextInput(props) {
  return (
    <TextInput
      {...props}
      editable
      maxLength={40}
    />
  );
}

export default function UselessTextInputMultiline() {
  const [value, onChangeText] = React.useState('');

  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
      }}>
      <UselessTextInput
        style={{marginLeft:10}}
        placeholder="Write what you think!"
        autoCapitalize="none"
        placeholderTextColor="#A3A3A1"
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
