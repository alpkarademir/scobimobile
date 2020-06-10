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
import {
  faUserCircle,
  faThumbsUp,
  faThumbsDown,
  faPlusSquare,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
import { faShare, faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

export default function PostScreen() {
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
        <FontAwesomeIcon
          style={styles.headerIcon}
          color="#ffffff"
          icon={faSellcast}
          size={40}
        />
      </View>
      <ScrollView>
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
        <TouchableOpacity>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postT}>
                <Text style={styles.postTitleText}>Post Title</Text>
              </View>
              <View style={styles.postHeaderRight}>
                <Text style={styles.postTime}>15m</Text>
              </View>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.postParagraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Text>
            </View>
            <View style={styles.postFooter}>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsUp} />
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsDown} />
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row" }}>
                <FontAwesomeIcon icon={faEye} />
                <Text style={{ marginLeft: 5 }}>200k+</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesomeIcon icon={faShare} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postT}>
                <Text style={styles.postTitleText}>Post Title</Text>
              </View>
              <View style={styles.postHeaderRight}>
                <Text style={styles.postTime}>15m</Text>
              </View>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.postParagraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Text>
            </View>
            <View style={styles.postFooter}>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsUp} />
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsDown} />
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row" }}>
                <FontAwesomeIcon icon={faEye} />
                <Text style={{ marginLeft: 5 }}>200k+</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesomeIcon icon={faShare} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postT}>
                <Text style={styles.postTitleText}>Post Title</Text>
              </View>
              <View style={styles.postHeaderRight}>
                <Text style={styles.postTime}>15m</Text>
              </View>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.postParagraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Text>
            </View>
            <View style={styles.postFooter}>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsUp} />
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsDown} />
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row" }}>
                <FontAwesomeIcon icon={faEye} />
                <Text style={{ marginLeft: 5 }}>200k+</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesomeIcon icon={faShare} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <View style={styles.addPostContainer}>
            <FontAwesomeIcon color="#000000" icon={faSearch} size={30} />
            <Text style={styles.addPostText}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.addScobContainer}>
            <FontAwesomeIcon color="#000000" icon={faPlusSquare} size={30} />
            <Text style={styles.addScobtext}>Add Scob</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.addScobContainer}>
            <FontAwesomeIcon color="#000000" icon={faBell} size={30} />
            <Text style={styles.addScobtext}>Notification</Text>
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
    height: 60,
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
});
