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
} from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";
import ProfileScreen from "./ProfileScreen";

export default function ProfileEditScreen() {
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
            icon={faArrowLeft}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit</Text>
        <TouchableOpacity onPress={routeToHome}>
          <FontAwesomeIcon
            style={styles.headerIcon}
            color="#ffffff"
            icon={faSellcast}
            size={40}
          />
        </TouchableOpacity>
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
  bracket: {
    height: 30,
    backgroundColor: "#E2E8F0",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
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
