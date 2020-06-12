import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextComponent,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Actions } from "react-native-router-flux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faShare, faArrowLeft, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

import ComTextInput from "../textinput3";
import SendCom from "../sendCont";
import AlrCom from "../alrCont";

export default class CommentScreen extends Component {
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
          <ScrollView>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postT}>
              <Text style={styles.postTitleText}>Username</Text>
            </View>
            <View style={styles.postHeaderRight}>
              <Text style={styles.postTime}>15m</Text>
              <TouchableOpacity>
              <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faTrashAlt} />
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postBody}>
            <Text style={styles.postParagraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Text>
          </View>
        </View>
    </ScrollView>
          <SendCom style={{flex:0.35}} />
        </View>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2E8F0",
    height: '100%',
    flex: 1,
  },
  header: {
    height:80,
    paddingTop: 10,
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
  },
  headerIcon: {
    marginRight: 10,
  },
  postCounterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#E2E8F0",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  countersText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
  },
  post: {
    flex: 1,
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
  },
  postHeader: {
    backgroundColor: "#E2E8F0",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  postTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  postTime: {
    fontWeight: "400",
  },
  postBody: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  postTitleText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 15,
  },
  postParagraph: {
    marginTop: 5,
  },
  postFooter: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});