import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextComponent,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Actions } from "react-native-router-flux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faShare, faArrowLeft, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

import ComTextInput from "../textinput3";
import SendCom from "../sendCont";
import AlrCom from "../alrCont";

import { connect } from 'react-redux';
import { addComment, deleteComment } from '../../redux/actions/post';
import PropTypes from 'prop-types'
import TimeAgo from "react-native-timeago";

class CommentScreen extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
  }

  onPressLogo = () => {
    Actions.homeScreen();
  };
  onPressBack = () => {
    Actions.postScreen();
  };

  onPressDeleteComment =  (commentId) => {
    this.props.deleteComment(this.props.post._id, commentId);
  }
  render() {
    const { post } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onPressBack}>
            <FontAwesomeIcon
              style={styles.headerprofilePhotos}
              color="#ffffff"
              icon={faArrowLeft}
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Comments</Text>
          <TouchableOpacity onPress={this.onPressLogo}>
            <FontAwesomeIcon
              style={styles.headerIcon}
              color="#ffffff"
              icon={faSellcast}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ScrollView>
          { post && post.comments.map((comment) => (<View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postT}>
              <Text style={styles.postTitleText}>{comment.username}</Text>
            </View>
            <View style={styles.postHeaderRight}>
              <TimeAgo style={styles.postTime} time={comment.date} />
              <TouchableOpacity onPress={() => this.onPressDeleteComment(comment._id)}>
              <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faTrashAlt} />
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postBody}>
            <Text style={styles.postParagraph}>
              {comment.text}
            </Text>
          </View>
        </View>))}
    </ScrollView>
          <SendCom style={{flex:0.35}} />
        </View>


    </View>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post.post,
})

export default connect(mapStateToProps, { addComment, deleteComment })(CommentScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2E8F0",
    height: '100%',
    flex: 1,
  },
  header: {
    height:80,
    paddingTop: 10,
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
    flex: 1,
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
});