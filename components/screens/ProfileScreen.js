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
  faBookmark
} from "@fortawesome/free-regular-svg-icons";
import { faShare, faCheck, faEdit, faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";
import ProfilePostScreen from './ProfilePostScreen';
import profileScobScreen from './ProfileScobScreen';
import profileBookmarkScreen from './ProfileBookmarkScreen';

export default function ProfileScreen() {
  const routeToProfile = () => {
    Actions.profileScreen();
  };
  const routeToScob = () => {
    Actions.profileScobScreen();
  };
  const routeToHome = () => {
    Actions.homeScreen();
  }
  const routeToBookmark = () => {
    Actions.profileBookmarkScreen();
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
        <Text style={styles.headerText}>Username</Text>
        <TouchableOpacity onPress={routeToHome}>
        <FontAwesomeIcon
          style={styles.headerIcon}
          color="#ffffff"
          icon={faSellcast}
          size={40}
        />
        </TouchableOpacity>
      </View>
        <View style={styles.postCounterContainer}>
          <View style={styles.counters}>
            <Text style={styles.countersText}>Post</Text>
            <Text style={styles.countersText}>3</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.counters}>
              <Text style={styles.countersText}>Followers</Text>
              <Text style={styles.countersText}>12M</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.counters}>
              <Text style={styles.countersText}>Following</Text>
              <Text style={styles.countersText}>113</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bracket}>
        <TouchableOpacity
            style={styles.loginButton}>
            <FontAwesomeIcon
            icon={faCheck}
            size={15}
            color= "#ffffff"
            />
            <Text style={styles.loginText}>Follow</Text>
            </TouchableOpacity>
        </View>
      <View style={{marginBottom:10}}>
        <ProfilePostScreen></ProfilePostScreen>
      </View>


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
  post: {
    height: 150,
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
  footer: {
    height: 50,
    alignItems: "center",
    backgroundColor: "#CBD5E0",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 3,
    paddingTop: 10,
    paddingBottom: 5,
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
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
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
    flexDirection: 'row',
  },
  loginText: {
    fontSize: 15,
    fontWeight: "300",
    color: "#ffffff",
    marginLeft: 10,
  },
});
