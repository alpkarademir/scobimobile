import React, { useState } from "react";
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
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";
import { Input } from "react-native-elements";

import { connect } from "react-redux";
import { addPost } from "../../redux/actions/post";
import PropTypes from "prop-types";

function ContentAddScreen({ addPost }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [cover, setCover] = useState("");
  const [text, setText] = useState("");

  const routeToProfile = () => {
    Actions.profileScreen();
  };
  const routeToHome = () => {
    Actions.homeScreen();
  };

  const onPressShare = async () => {
    const formData = {
      title: title.trim(),
      subtitle: subtitle.trim(),
      cover: cover.trim(),
      text: text.trim(),
    };

    const post = await addPost(formData);

    if (post) {
      Actions.postScreen();
    }
  };

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
        <Text style={styles.headerText}>Add Post</Text>
        <TouchableOpacity onPress={routeToHome}>
          <FontAwesomeIcon
            style={styles.headerIcon}
            color="#ffffff"
            icon={faSellcast}
            size={40}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingTop: 10 }}>
        <Input
          placeholder="Title (*)"
          onChangeText={(value) => setTitle(value)}
        />
        <Input
          placeholder="Subtitle"
          onChangeText={(value) => setSubtitle(value)}
        />
        <Input
          placeholder="Enter cover image URL"
          onChangeText={(value) => setCover(value)}
        />
        <Input
          multiline
          placeholder="Write post body... (*)"
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "#333",
            width: 200,
            alignSelf: "center",
            marginBottom: 20,
          }}
          onPress={onPressShare}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Share</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

ContentAddScreen.propTypes = {
  addPost: PropTypes.func.isRequired,
};

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
});

export default connect(null, { addPost })(ContentAddScreen);
