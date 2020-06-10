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
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faShare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

export default function PostScreen() {
  const routeToMain = () => { Actions.homeScreen() }
  const routeToProfile = () => { Actions.profileScreen() }
  const routeToComment = () => { Actions.commentScreen() }
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
        <Text style={styles.headerText}>Author Username</Text>
        <TouchableOpacity onPress={routeToMain}>
        <FontAwesomeIcon
          style={styles.headerIcon}
          color="#ffffff"
          icon={faSellcast}
          size={40}
        />
        </TouchableOpacity>
      </View>
      <ScrollView>
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
              ever since the 1500s.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </Text>
          </View>
          <View style={styles.postFooter}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faThumbsUp} />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesomeIcon icon={faThumbsDown} />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesomeIcon icon={faBookmark} />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesomeIcon icon={faShare} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.commentButton} onPress={routeToComment}>
            <View style={styles.commentContainer}>
              <View style={styles.commentPlus}>
                <FontAwesomeIcon icon={faPlus} color="#FFFFFF" size={20} />
              </View>
              <View style={styles.commentButonTextContainer}>
                <Text style={styles.commentButonText}>Comment</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
    height: screenHeight,
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  postHeader: {
    backgroundColor: "#E2E8F0",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
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
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  postParagraph: {
    marginTop: 20,
  },
  postFooter: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  commentButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#2F855A",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
  },
  commentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  commentPlus: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    padding: 3,
  },
  commentButonTextContainer: {
    textAlign: "center",
    justifyContent: "center",
  },
  commentButonText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 10,
  },
});
