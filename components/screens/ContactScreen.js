import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { Actions } from "react-native-router-flux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserCircle,
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";  


import TextInput from '../textinput';
import TextInput2 from '../textinput2';

export default class Contact extends Component {
  onPressLogo = () => {
    Actions.homeScreen();
  };
  onPressBack = () => {
    Actions.postScreen();
  }
  render() {
    return (
      <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={this.onPressBack}>
        <FontAwesomeIcon
          style={styles.headerprofilePhotos}
          color="#ffffff"
          icon={faUserCircle}
          size={40}
        />
        </TouchableOpacity >
        <Text style={styles.headerText}>Contact</Text>
        <TouchableOpacity onPress={this.onPressLogo}>
        <FontAwesomeIcon
          style={styles.headerIcon}
          color="#ffffff"
          icon={faSellcast}
          size={40}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.textArea1}>* These fields are required.</Text>
        <Text style={styles.textArea}> *Name </Text>
        <TextInput />
        <Text style={styles.textArea}> *Surname </Text>
        <TextInput />
        <Text>*Email</Text>
        <TextInput />
        <Text>*Message</Text>
        <TextInput2 />
        <Button title="Send" color="green" />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    flex: 0.3,
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    flex: 0.1,
  },
  textArea1: {
    flex: 0.2,
    justifyContent: 'flex-start',
    fontSize: 10,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    height: 80,
    paddingTop: 30,
    shadowColor: "#276749",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    alignItems: "center",
    backgroundColor: "#2F855A",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerprofilePhotos: {
    marginLeft: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: 5,
    paddingRight: 10,
  },
  headerIcon: {
    marginRight: 10,
  },
});
