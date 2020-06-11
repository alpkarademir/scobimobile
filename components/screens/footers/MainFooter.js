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
import { faPlusSquare, faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faShare,
  faEye,
  faSearch,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import PropTypes from "prop-types";

function MainFooter({ logout }) {
  const routeToSearch = () => {
    Actions.searchScreen();
  };
  const routeToNofication = () => {
    Actions.notificationScreen();
  };
  const routeToAdd = () => {
    Actions.contentAddScreen();
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={routeToSearch}>
        <View style={styles.addPostContainer}>
          <FontAwesomeIcon color="#000000" icon={faSearch} size={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={routeToAdd}>
        <View style={styles.addScobContainer}>
          <FontAwesomeIcon color="#000000" icon={faPlusSquare} size={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={routeToNofication}>
        <View style={styles.addScobContainer}>
          <FontAwesomeIcon color="#000000" icon={faBell} size={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logout()}>
        <View style={styles.addScobContainer}>
          <FontAwesomeIcon color="#000000" icon={faSignOutAlt} size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

MainFooter.propTypes = {
  logout: PropTypes.func.isRequired,
};

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

export default connect(null, { logout })(MainFooter);
