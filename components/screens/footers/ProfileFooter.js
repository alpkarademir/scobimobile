import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import PropTypes from "prop-types";

export default function ProfileFooter() {
  const routeToProfile = () => {
    Actions.profileScreen();
  };
  const routeToScob = () => {
    Actions.profileScobScreen();
  };
  const routeToBookmark = () => {
    Actions.profileBookmarkScreen();
  };

  return (
    <View style={styles.footer} onPress={routeToProfile}>
      <TouchableOpacity>
        <View style={styles.addPostContainer}>
          <FontAwesomeIcon color="#000000" icon={faGripLines} size={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={routeToScob}>
        <View style={styles.addScobContainer}>
          <FontAwesomeIcon color="#000000" icon={faEdit} size={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={routeToBookmark}>
        <View style={styles.addScobContainer}>
          <FontAwesomeIcon color="#000000" icon={faBookmark} size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  footer: {
    height: 60,
    alignItems: "center",
    backgroundColor: "#CBD5E0",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 3,
    paddingTop: 10,
    paddingBottom: 5,
    bottom: 0,
    width: "100%",
  },
  addPostContainer: {
    alignItems: "center",
  },
  addPostText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  addScobContainer: {
    alignItems: "center",
  },
  addScobtext: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
