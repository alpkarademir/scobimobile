import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
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
} from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";
import ProfilePostScreen from "./ProfilePostScreen";
import profileScobScreen from "./ProfileScobScreen";
import ProfileBookmarkScreen from "./ProfileBookmarkScreen";
import ProfileFooter from "./footers/ProfileFooter";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts, getPost } from "../../redux/actions/post";
import { follow, unfollow } from "../../redux/actions/profile";
import { getUsersScobs } from "../../redux/actions/scob";
import TimeAgo from "react-native-timeago";
import ProfileScobScreen from "./ProfileScobScreen";

function ProfileScreen({
  auth,
  posts,
  getPost,
  profile,
  follow,
  unfollow,
  getUsersScobs,
  scob,
}) {
  const [showScobs, setShowScobs] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);

  const routeToProfile = () => {
    Actions.profileScreen();
  };
  const routeToScob = () => {
    Actions.profileScobScreen();
  };
  const routeToHome = () => {
    Actions.homeScreen();
  };
  const routeToBookmark = () => {
    Actions.profileBookmarkScreen();
  };
  const routeToPost = (post_id) => {
    getPost(post_id);
    Actions.postScreen();
  };

  const toggleFollow = (username) => {
    if (
      auth.user &&
      profile &&
      profile.followers.filter(
        (follower) => follower.user.username === auth.user.username
      ).length > 0
    ) {
      unfollow(username);
    } else {
      follow(username);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
        <Text style={styles.headerText}>
          {profile && profile.user.username}
        </Text>
        <TouchableOpacity onPress={routeToHome}>
          <FontAwesomeIcon
            style={styles.headerIcon}
            color="#ffffff"
            icon={faSellcast}
            size={40}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.postScreen}>
        <View style={styles.postCounterContainer}>
          <View style={styles.counters}>
            <Text style={styles.countersText}>Post</Text>
            <Text style={styles.countersText}>{posts && posts.length}</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.counters}>
              <Text style={styles.countersText}>Followers</Text>
              <Text style={styles.countersText}>
                {profile && profile.followers.length}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.counters}>
              <Text style={styles.countersText}>Following</Text>
              <Text style={styles.countersText}>
                {profile && profile.following.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {auth.user && profile && auth.user.username != profile.user.username && (
          <View style={styles.bracket}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => toggleFollow(profile.user.username)}
            >
              <Text style={styles.loginText}>
                {auth.user &&
                profile &&
                profile.followers.filter(
                  (follower) => follower.user.username === auth.user.username
                ).length > 0
                  ? "Unfollow"
                  : "Follow"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <ScrollView>
        {!showBookmarks ? (
          <View>
            {!showScobs ? (
              <View>
                {posts.length === 0 ? (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
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
                            <Text style={styles.postUsername}>
                              {post.username}
                            </Text>
                          </View>
                          <View style={styles.postHeaderRight}>
                            <View style={styles.postTime}>
                              <TimeAgo time={post.date} />
                            </View>
                          </View>
                        </View>
                        {post.cover.length > 0 && (
                          <Image
                            style={styles.stretch}
                            source={{ uri: post.cover }}
                          />
                        )}

                        <View style={styles.postBody}>
                          <Text style={styles.postTitle}>{post.title}</Text>
                          <Text style={styles.postParagraph}>
                            {post.subtitle}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))
                )}
              </View>
            ) : (
              <ProfileScobScreen profile={profile} />
            )}
          </View>
        ) : (
          <View>
            <ProfileBookmarkScreen />
          </View>
        )}
      </ScrollView>
      <ProfileFooter
        showScobs={showScobs}
        setShowScobs={setShowScobs}
        showBookmarks={showBookmarks}
        setShowBookmarks={setShowBookmarks}
      />
    </View>
  );
}

ProfileScreen.propTypes = {
  auth: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  getPost: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  getUsersScobs: PropTypes.func.isRequired,
  scob: PropTypes.object.isRequired,
};

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2E8F0",
    height: "100%",
  },
  container1: {
    flex: 1,
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
    fontSize: 25,
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
  postTitleText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 15,
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
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "stretch",
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  posts: state.post.user_posts,
  profile: state.profile.profile,
  scob: state.scob,
});

export default connect(mapStateToProps, {
  getPost,
  follow,
  unfollow,
  getUsersScobs,
})(ProfileScreen);
