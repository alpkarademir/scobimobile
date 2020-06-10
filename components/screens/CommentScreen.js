import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextComponent,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Actions } from "react-native-router-flux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faShare, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";  

import ComTextInput from '../textinput3';
import SendCom from '../sendCont';
import AlrCom from '../alrCont';

export default class CommentScreen extends Component {
  onPressLogo = () => {
    Actions.homeScreen();
  };
  onPressBack = () => {
    Actions.postScreen();
  }
  render() {
    return (
      <View style= {{flex:1}}> 
      <View style={styles.header}>
        <TouchableOpacity onPress={this.onPressBack}>
        <FontAwesomeIcon
          style={styles.headerprofilePhotos}
          color="#ffffff"
          icon={faArrowLeft}
          size={30}
        />
        </TouchableOpacity>
        <Text style={styles.headerText}>Comments</Text>
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
        <AlrCom />
        <SendCom />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textArea: {
    justifyContent: 'center',
    flex: 0.1,
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
