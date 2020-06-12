import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserCircle,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShare,
  faEllipsisH,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";
import ScobTextInput from "../scobTextInput";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import TimeAgo from "react-native-timeago";
import { addScob } from "../../redux/actions/scob";

function ProfileScobScreen({ scob, addScob, profile, auth }) {
  const [text, setText] = useState("");

  const onPressAddScob = () => {
    if (text.trim() !== "") addScob(text);
  };

  return (
    <View style={styles.container}>
      {auth.user && profile && auth.user.username === profile.user.username && (
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <FontAwesomeIcon color="#000000" icon={faUserCircle} size={40} />
              <Text style={styles.postUsername}>Username</Text>
            </View>
          </View>
          <View style={styles.postBody}>
            <ScobTextInput text={text} setText={setText}></ScobTextInput>
          </View>
          <View
            style={{ alignContent: "center", marginTop: 15, marginLeft: 140 }}
          >
            <TouchableOpacity
              style={styles.loginButton}
              onPress={onPressAddScob}
            >
              <FontAwesomeIcon icon={faPlusSquare} size={20} color="#ffffff" />
              <Text style={styles.loginText}>Scob</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bracket}></View>
        </View>
      )}
      <ScrollView>
        {!scob.loading && scob.scobs.length > 0 ? (
          scob.scobs.map((scob) => (
            <View style={styles.post} key={scob._id}>
              <View style={styles.postHeader}>
                <View style={styles.postHeaderLeft}>
                  <FontAwesomeIcon
                    color="#000000"
                    icon={faUserCircle}
                    size={40}
                  />
                  <Text style={styles.postUsername}>{scob.username}</Text>
                </View>
                <View style={styles.postHeaderRight}>
                  <TimeAgo style={styles.postTime} time={scob.date} />
                </View>
              </View>
              <View style={styles.postBody}>
                <Text style={styles.postParagraph}>{scob.text}</Text>
              </View>
              <View style={styles.postFooter}>
                <TouchableOpacity>
                  <FontAwesomeIcon icon={faShare} />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>There are no scobs yet.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

ProfileScobScreen.propTypes = {
  scob: PropTypes.object.isRequired,
  addScob: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
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
  postHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
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
    justifyContent: "flex-end",
    marginRight: 20,
  },
  loginButton: {
    height: 35,
    width: 120,
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
  bracket: {
    height: 10,
    backgroundColor: "#68d391",
    borderRadius: 5,
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
  },
});

const mapStateToProps = (state) => ({
  scob: state.scob,
  auth: state.auth,
});

export default connect(mapStateToProps, { addScob })(ProfileScobScreen);
