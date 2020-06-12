import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  Share
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Actions } from "react-native-router-flux";
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";

import {
  faShare,
  faPlus,
  faEye,
  faThumbsUp as faThumbsUpSolid,
  faThumbsDown as faThumbsDownSolid,
  faArrowLeft,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

import { connect } from "react-redux";
import {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  getUsersPosts,
  getUsersBookmarks,
  addBookmark,
  removeBookmark,
  deletePost,
} from "../../redux/actions/post";
import { getUsersScobs } from "../../redux/actions/scob";
import { getProfileByUsername } from "../../redux/actions/profile";
import PropTypes from "prop-types";

import TimeAgo from "react-native-timeago";
import Markdown from "react-native-markdown-renderer";
import { text } from "@fortawesome/fontawesome-svg-core";

function PostScreen({
  post,
  user,
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  getUsersPosts,
  getProfileByUsername,
  getUsersScobs,
  getUsersBookmarks,
  addBookmark,
  removeBookmark,
  bookmarks,
  deletePost,
}) {
  const goBack = () => {
    Actions.pop();
  };

  const routeToMain = () => {
    Actions.homeScreen();
  };

  const routeToComment = () => {
    Actions.commentScreen();
  };

  const onPressLike = () => {
    if (
      user &&
      post.likes.filter((like) => like.user._id == user._id).length > 0
    ) {
      removeLike(post._id);
    } else {
      addLike(post._id);
    }
  };

  const onPressDislike = () => {
    console.warn(post._id);
    if (
      user &&
      post.dislikes.filter((like) => like.user._id == user._id).length > 0
    ) {
      removeDislike(post._id);
    } else {
      addDislike(post._id);
    }
  };

  const onPressPostHeaderLeft = () => {
    getProfileByUsername(post.username);
    getUsersPosts(post.username);
    getUsersScobs(post.username);
    getUsersBookmarks();
    Actions.profileScreen();
  };

  const onPressBookmark = () => {
    addBookmark(post._id);
  };

  const onPressUnBookmark = () => {
    removeBookmark(post._id);
  };

  const onPressDeletePost = async () => {
    const deleted = await deletePost(post._id);
    if (deleted) Actions.pop();
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Have you seen this post on Scobi? http://scobi.social/posts/'+ post._id,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <FontAwesomeIcon
            style={styles.headerprofilePhotos}
            color="#ffffff"
            icon={faArrowLeft}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Scobi</Text>
        <TouchableOpacity onPress={routeToMain}>
          <FontAwesomeIcon
            style={styles.headerIcon}
            color="#ffffff"
            icon={faSellcast}
            size={40}
          />
        </TouchableOpacity>
      </View>
      {post && (
        <View style={styles.postHeader}>
          <TouchableOpacity
            onPress={onPressPostHeaderLeft}
            style={styles.postHeaderLeft}
          >
            <Image
              style={styles.postAvatar}
              source={{ uri: "https:" + post.avatar }}
            />
            <Text style={styles.postUsername}>{post.username}</Text>
          </TouchableOpacity>
          <View style={styles.postHeaderRight}>
            <View style={styles.postTime}>
              <TimeAgo time={post.date} />
            </View>
            <TouchableOpacity onPress={onPressDeletePost}>
              <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faTrashAlt} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ScrollView>
      {post ? (
        <View style={styles.post}>
          <View style={styles.postBody}>
            <ScrollView style={styles.markdownContainer}>
              {post.cover.length > 0 && (
                <Image
                  style={{ width: "100%", height: 200, resizeMode: "stretch" }}
                  source={{ uri: post.cover }}
                />
              )}
              <Text style={styles.postTitle}>{post.title}</Text>
              <Markdown style={styles.postParagraph}>{post.text}</Markdown>
              <View style={styles.postFooter}>
                <TouchableOpacity
                  style={styles.likeButton}
                  onPress={onPressLike}
                >
                  {user &&
                  post.likes.filter((like) => like.user._id == user._id)
                    .length > 0 ? (
                    <FontAwesomeIcon icon={faThumbsUpSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faThumbsUp} />
                  )}
                  <Text style={styles.likeText}>{post.likes.length}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.likeButton}
                  onPress={onPressDislike}
                >
                  {user &&
                  post.dislikes.filter(
                    (dislike) => dislike.user._id == user._id
                  ).length > 0 ? (
                    <FontAwesomeIcon icon={faThumbsDownSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faThumbsDown} />
                  )}
                  <Text style={styles.likeText}>{post.dislikes.length}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <FontAwesomeIcon icon={faEye} />
                  <Text style={{ marginLeft: 5 }}>{post.views.length}</Text>
                </TouchableOpacity>

                {post &&
                bookmarks &&
                bookmarks.filter((bookmark) => bookmark.post._id === post._id)
                  .length > 0 ? (
                  <TouchableOpacity onPress={onPressUnBookmark}>
                    <FontAwesomeIcon icon={faBookmarkSolid} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <FontAwesomeIcon
                      icon={faBookmark}
                      onPress={onPressBookmark}
                    />
                  </TouchableOpacity>
                )}

                <TouchableOpacity onPress={onShare}>
                  <FontAwesomeIcon icon={faShare} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.commentButton}
                onPress={routeToComment}
              >
                <View style={styles.commentContainer}>
                  <View style={styles.commentPlus}>
                    <FontAwesomeIcon icon={faPlus} color="#FFFFFF" size={20} />
                  </View>
                  <View style={styles.commentButonTextContainer}>
                    <Text style={styles.commentButonText}>Comment</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      </ScrollView>
    </View>
  );
}

PostScreen.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addDislike: PropTypes.func.isRequired,
  removeDislike: PropTypes.func.isRequired,
  getUsersPosts: PropTypes.func.isRequired,
  getProfileByUsername: PropTypes.func.isRequired,
  getUsersScobs: PropTypes.func.isRequired,
  getUsersBookmarks: PropTypes.func.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2E8F0",
    height: "100%",
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
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    flexDirection: "column",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  postHeader: {
    backgroundColor: "#E2E8F0",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
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
    marginTop: 10,
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
    marginBottom: 10,
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
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "stretch",
  },
  markdownContainer: {
    height: "89%",
    paddingBottom: 10,
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeText: {
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => ({
  post: state.post.post,
  user: state.auth.user,
  bookmarks: state.post.bookmarks,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  getUsersPosts,
  getProfileByUsername,
  getUsersScobs,
  getUsersBookmarks,
  addBookmark,
  removeBookmark,
  deletePost,
})(PostScreen);
