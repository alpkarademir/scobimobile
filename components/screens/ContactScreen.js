import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
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

import TextInput from "../textinput";
import TextInput2 from "../textinput2";

export default class Contact extends Component {
  onPressLogo = () => {
    Actions.homeScreen();
  };
  onPressBack = () => {
    Actions.postScreen();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onPressBack}>
            <FontAwesomeIcon
              style={styles.headerprofilePhotos}
              color="#ffffff"
              icon={faUserCircle}
              size={40}
            />
          </TouchableOpacity>
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.textArea1}>* These fields are required.</Text>
          <Text style={styles.textArea}> *Name </Text>
          <TextInput />
          <Text style={styles.textArea}> *Surname </Text>
          <TextInput />
          <Text style={styles.textArea}>*Email</Text>
          <TextInput />
          <Text style={styles.textArea}>*Message</Text>
          <TextInput2 />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    marginBottom: 10,
  },
  textArea1: {
    justifyContent: "flex-start",
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 15,
    marginBottom: 40,
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
  loginButton: {
    height: 35,
    width: 100,
    backgroundColor: "#2F855A",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#C6F6D5",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flexDirection: "row",
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
