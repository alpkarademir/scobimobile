import * as React from "react";
import {
  View,
  TextComponent,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faShare, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

import { Actions } from "react-native-router-flux";

const users = [
  {
    name: "This is a new notification...",
  },
];

export default class Notification extends React.Component {
  onPressBack = () => {
    Actions.homeScreen();
  };

  render() {
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
          <Text style={styles.headerText}> Notifications</Text>
          <TouchableOpacity onPress={this.onPressBack}>
            <FontAwesomeIcon
              style={styles.headerIcon}
              color="#ffffff"
              icon={faSellcast}
              size={40}
            />
          </TouchableOpacity>
        </View>

        <Card title="Latest Notifications">
          {users.map((u, i) => {
            return (
              <ListItem
                key={i}
                roundAvatar
                title={u.name}
                avatar={{ uri: u.avatar }}
              />
            );
          })}
        </Card>
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
    paddingRight: 5,
  },
  headerIcon: {
    marginRight: 10,
  },
});
