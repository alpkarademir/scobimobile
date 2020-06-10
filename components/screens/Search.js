import * as React from 'react';
import {View, Button, TextComponent, Text, StyleSheet} from 'react-native';

import Serachinput from '../textinput3';

export default function Serach() {
  return (
    <View style={searchStyle.container}>
      <Serachinput />
      <Button title="Search" />
    </View>
  );
}

const searchStyle = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
