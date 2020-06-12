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
} from "@fortawesome/free-regular-svg-icons";
import {
  faShare,
  faEye,
  faSearch,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";
import TimeAgo from "react-native-timeago";
import { removeBookmark, getPost } from "../../redux/actions/post";
import PropTypes from "prop-types";
import { Actions } from "react-native-router-flux";

function ProfileBookmarkScreen({ bookmarks, removeBookmark, getPost }) {
  const onPressPost = (id) => {
    getPost(id);
    Actions.postScreen();
  };
  return (
    <ScrollView>
      {bookmarks &&
        bookmarks.map((bookmark) => (
          <TouchableOpacity onPress={() => onPressPost(bookmark.post._id)}>
            <View style={styles.post}>
              <View style={styles.postHeader}>
                <View style={styles.postHeaderLeft}>
                  <FontAwesomeIcon
                    color="#000000"
                    icon={faUserCircle}
                    size={40}
                  />
                  <Text style={styles.postUsername}>
                    {bookmark.post.username}
                  </Text>
                </View>
                <View style={styles.postHeaderRight}>
                  <TouchableOpacity
                    onPress={() => removeBookmark(bookmark.post._id)}
                  >
                    <FontAwesomeIcon
                      style={styles.bookmarkIcon}
                      icon={faBookmark}
                    />
                  </TouchableOpacity>
                  <View style={styles.postTime}>
                    <TimeAgo time={bookmark.post.date} />
                  </View>
                </View>
              </View>
              <View style={styles.postBody}>
                <Text style={styles.postTitle}>{bookmark.post.title}</Text>
                <Text style={styles.postParagraph}>
                  {bookmark.post.subtitle}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
}

ProfileBookmarkScreen.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  removeBookmark: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
};

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2E8F0",
    height: screenHeight,
  },
  post: {
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    marginBottom: 10,
    paddingBottom: 10,
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
  bookmarkIcon: {
    marginRight: 5,
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

const mapStateToProps = (state) => ({
  bookmarks: state.post.bookmarks,
});

export default connect(mapStateToProps, { removeBookmark, getPost })(
  ProfileBookmarkScreen
);
