import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Actions } from "react-native-router-flux";
import {
  faUserCircle,
  faThumbsUp,
  faThumbsDown,
  faPlusSquare,
  faBell,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShare,
  faCheck,
  faEdit,
  faGripLines,
  faArrowLeft,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";
import { Input } from "react-native-elements";

export default function ContentAddScreen() {
  const routeToProfile = () => {
    Actions.profileScreen();
  };
  const routeToHome = () => {
    Actions.homeScreen();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={routeToProfile}>
          <FontAwesomeIcon
            style={styles.headerprofilePhotos}
            color="#ffffff"
            icon={faUserCircle}
            size={40}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Post</Text>
        <TouchableOpacity onPress={routeToHome}>
          <FontAwesomeIcon
            style={styles.headerIcon}
            color="#ffffff"
            icon={faSellcast}
            size={40}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Input
          placeholder="Title"
          style={styles}
          onChangeText={(value) => this.setState({ title: value })}
        />
      </View>
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
  loginButton: {
    height: 30,
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
    fontSize: 15,
    fontWeight: "300",
    color: "#ffffff",
    marginLeft: 10,
  },
});
