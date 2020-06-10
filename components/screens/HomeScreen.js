import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserCircle,
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

export default function HomeScreen() {
  onPressPostScreen = () => {
    Actions.postScreen();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon
          style={styles.headerprofilePhotos}
          color="#ffffff"
          icon={faUserCircle}
          size={40}
        />
        <Text style={styles.headerText}>Main</Text>
        <FontAwesomeIcon
          style={styles.headerIcon}
          color="#ffffff"
          icon={faSellcast}
          size={40}
        />
      </View>
      <ScrollView>
        <TouchableOpacity onPress = {this.onPressPostScreen}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderLeft}>
                <FontAwesomeIcon color="#000000" icon={faUserCircle} size={40} />
                <Text style={styles.postUsername}>Username</Text>
              </View>
              <View style={styles.postHeaderRight}>
                <Text style={styles.postTime}>15m</Text>
              </View>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.postTitle}>Post Title</Text>
              <Text style={styles.postParagraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </Text>
            </View>
            <View style={styles.postFooter}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faThumbsDown} />
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faShare} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.onPressPostScreen}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderLeft}>
                <FontAwesomeIcon color="#000000" icon={faUserCircle} size={40} />
                <Text style={styles.postUsername}>Username</Text>
              </View>
              <View style={styles.postHeaderRight}>
                <Text style={styles.postTime}>15m</Text>
              </View>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.postTitle}>Post Title</Text>
              <Text style={styles.postParagraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </Text>
            </View>
            <View style={styles.postFooter}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faThumbsDown} />
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faShare} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.onPressPostScreen}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderLeft}>
                <FontAwesomeIcon color="#000000" icon={faUserCircle} size={40} />
                <Text style={styles.postUsername}>Username</Text>
              </View>
              <View style={styles.postHeaderRight}>
                <Text style={styles.postTime}>15m</Text>
              </View>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.postTitle}>Post Title</Text>
              <Text style={styles.postParagraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </Text>
            </View>
            <View style={styles.postFooter}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faThumbsDown} />
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faShare} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.onPressPostScreen}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderLeft}>
                <FontAwesomeIcon color="#000000" icon={faUserCircle} size={40} />
                <Text style={styles.postUsername}>Username</Text>
              </View>
              <View style={styles.postHeaderRight}>
                <Text style={styles.postTime}>15m</Text>
              </View>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.postTitle}>Post Title</Text>
              <Text style={styles.postParagraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </Text>
            </View>
            <View style={styles.postFooter}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faThumbsDown} />
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faShare} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.onPressPostScreen}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderLeft}>
                <FontAwesomeIcon color="#000000" icon={faUserCircle} size={40} />
                <Text style={styles.postUsername}>Username</Text>
              </View>
              <View style={styles.postHeaderRight}>
                <Text style={styles.postTime}>15m</Text>
              </View>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.postTitle}>Post Title</Text>
              <Text style={styles.postParagraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </Text>
            </View>
            <View style={styles.postFooter}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faThumbsDown} />
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faShare} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2E8F0",
    height: screenHeight,
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
  },
  headerIcon: {
    marginRight: 10,
  },

  post: {
    height: 210,
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
    marginTop: 10,
    backgroundColor: "#E2E8F0",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  postUsername: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 5,
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
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  postTitle: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
  postParagraph: {
    fontStyle: "italic",
  },
  postFooter: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
