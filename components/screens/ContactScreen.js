import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button, TextInput } from "react-native";
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
import TextInput2 from "../textinput2";

import axios from 'axios';
import {endPoint} from '../../redux/api'

export default class Contact extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: ''
  }

  onPressLogo = () => {
    Actions.homeScreen();
  };
  onPressBack = () => {
    Actions.postScreen();
  };

  onPressSend = async () => {
    const { name, surname, email, phone, message } = this.state;
    console.warn({ name, surname, email, phone, message });

    const config = {
      headers : {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };

    try {
      await axios.post(endPoint + '/api/contact', { name, surname, email, phone, message }, config);
      console.warn('mail gitti');
      Actions.pop();
    } catch(error) {
      console.warn(error);
    }
  }

  render() {
    const { name, surname, email, phone, message } = this.state;
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
            onChangeText={text => this.setState({ name: text })}
            autoCorrect={false}
            value={name} />
          <Text style={styles.textArea}> *Surname </Text>
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
            onChangeText={text => this.setState({ surname: text })}
            autoCorrect={false}
            value={surname} />
          <Text style={styles.textArea}>*Email</Text>
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
            onChangeText={text => this.setState({ email: text })}
            autoCorrect={false}
            value={email} />
          <Text style={styles.textArea}>*Message</Text>
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
            onChangeText={text => this.setState({ message: text })}
            autoCorrect={false}
            value={message} />
          <TouchableOpacity style={styles.loginButton} onPress={() => this.onPressSend()}>
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
