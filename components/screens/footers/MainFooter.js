import React, { useEffect } from "react";
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
  prefix,
  faBell as faBellSolid,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import { getNotifications } from "../../../redux/actions/notification";
import PropTypes from "prop-types";

function MainFooter({ logout, getNotifications, hasUnreadNotifications }) {
  useEffect(() => {
    getNotifications();
    setInterval(() => {
      getNotifications();
    }, 5000);
  }, [getNotifications]);

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
          {hasUnreadNotifications ? (
            <FontAwesomeIcon color="#000000" icon={faBellSolid} size={30} />
          ) : (
            <FontAwesomeIcon color="#000000" icon={faBell} size={30} />
          )}
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
  getNotifications: PropTypes.func.isRequired,
  hasUnreadNotifications: PropTypes.bool.isRequired,
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

const mapStateToProps = (state) => ({
  hasUnreadNotifications: state.notification.hasUnreadNotifications,
});

export default connect(mapStateToProps, { logout, getNotifications })(
  MainFooter
);
