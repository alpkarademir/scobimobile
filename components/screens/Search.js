import * as React from "react";
import {
  View,
  Button,
  TextComponent,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faShare, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

import { Actions } from "react-native-router-flux";
import { SearchBar } from "react-native-elements";

export default class Search extends React.Component {
  onPressBack = () => {
    Actions.homeScreen();
  };

  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onPressBack}>
            <FontAwesomeIcon
              style={styles.headerprofilePhotos}
              color="#ffffff"
              icon={faArrowLeft}
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Search</Text>
          <TouchableOpacity onPress={this.onPressBack}>
            <FontAwesomeIcon
              style={styles.headerIcon}
              color="#ffffff"
              icon={faSellcast}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <SearchBar
          lightTheme
          round
          placeholder="Search for Users"
          onChangeText={this.updateSearch}
          value={search}
          platform="ios"
        />
      </View>
    );
  }
}

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textArea: {
    justifyContent: "center",
    flex: 0.1,
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
    paddingRight: 10,
  },
  headerIcon: {
    marginRight: 10,
  },
});
