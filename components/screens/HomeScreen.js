import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserCircle,
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShare,
  faFileSignature,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import MainFooter from "./footers/MainFooter";

import { connect } from "react-redux";
import { getPosts, getPost, getUsersPosts } from "../../redux/actions/post";
import { getProfileByUsername } from '../../redux/actions/profile';
import PropTypes from "prop-types";

import TimeAgo from "react-native-timeago";

import { Avatar } from "react-native-elements";

function HomeScreen({ auth, getPosts, posts, getPost, getProfileByUsername, getUsersPosts }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  const routeToPost = (post_id) => {
    // Actions.postScreen();
    getPost(post_id);
    Actions.postScreen();
  };
  const routeToProfile = () => {
    if (auth.user) {
      getProfileByUsername(auth.user.username);
      getUsersPosts(auth.user.username);
      Actions.profileScreen();
    }
  };
  const routeToContact = () => {
    Actions.contactScreen();
  };

  if (!auth.isAuthenticated) {
    Actions.loginScreen();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={routeToProfile}>
          {auth.user ? (
            <Image
              style={styles.headerAvatar}
              source={{ uri: "https:" + auth.user.avatar }}
            />
          ) : (
            <FontAwesomeIcon
              style={styles.headerprofilePhotos}
              color="#ffffff"
              icon={faUserCircle}
              size={40}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.headerText}>Scobi</Text>
        <TouchableOpacity onPress={routeToContact}>
          <FontAwesomeIcon
            style={styles.headerIcon}
            color="#ffffff"
            icon={faFileSignature}
            size={38}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {posts.length === 0 ? (
          <View>
            <Text>There are no posts yet.</Text>
          </View>
        ) : (
          posts.map((post) => (
            <TouchableOpacity
              onPress={() => routeToPost(post._id)}
              key={post._id}
            >
              <View style={styles.post}>
                <View style={styles.postHeader}>
                  <View style={styles.postHeaderLeft}>
                    <Image
                      style={styles.postAvatar}
                      source={{ uri: "https:" + post.avatar }}
                    />
                    <Text style={styles.postUsername}>{post.username}</Text>
                  </View>
                  <View style={styles.postHeaderRight}>
                    <View style={styles.postTime}>
                      <TimeAgo time={post.date} />
                    </View>
                  </View>
                </View>
                {post.cover.length > 0 && (
                  <Image style={styles.stretch} source={{ uri: post.cover }} />
                )}

                <View style={styles.postBody}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <Text style={styles.postParagraph}>{post.subtitle}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      <MainFooter />
    </View>
  );
}

HomeScreen.propTypes = {
  auth: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  getPost: PropTypes.func.isRequired,
  getProfileByUsername: PropTypes.func.isRequired,
  getUsersPosts: PropTypes.func.isRequired,
};

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
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
    marginBottom: 10,
  },
  headerprofilePhotos: {
    marginLeft: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: 5,
    paddingRight: 10,
  },
  container: {
    backgroundColor: "#E2E8F0",
    height: "100%",
  },
  post: {
    backgroundColor: "#fff",
    flexDirection: "column",
    marginTop: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    borderTopWidth: 1,
    borderTopColor: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 10,
    borderRadius: 10,
  },
  postHeader: {
    marginTop: 10,
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
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
    marginVertical: 10,
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
  headerIcon: {
    marginRight: 10,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "stretch",
  },
  headerAvatar: {
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 20,
    resizeMode: "stretch",
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  posts: state.post.posts,
});

export default connect(mapStateToProps, { getPosts, getPost, getProfileByUsername, getUsersPosts})(HomeScreen);
