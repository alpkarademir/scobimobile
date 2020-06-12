import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSellcast } from "@fortawesome/free-brands-svg-icons";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { readNotifications } from "../../redux/actions/notification";
import PropTypes from "prop-types";

const users = [
  {
    name: "This is a new notification...",
  },
];

class Notification extends React.Component {
  static propTypes = {
    readNotifications: PropTypes.func.isRequired,
    notifications: PropTypes.array.isRequired,
  };
  onPressBack = () => {
    Actions.pop();
  };

  componentDidMount() {
    this.props.readNotifications();
  }

  render() {
    const { notifications } = this.props;

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
        <ScrollView>
        <Card title="Latest Notifications">
          
            {notifications.map((notification) => {
              return (
                // <ListItem
                //   key={notification._id}
                //   roundAvatar
                //   title={notification.name + " " + notification.msg}
                //   avatar={{ uri: "https:" + notification.avatar }}
                // />
                <View
                  style={{ flexDirection: "row", alignItems: "center" }}
                  key={notification._id}
                >
                  <Image
                    style={styles.postAvatar}
                    source={{ uri: "https:" + notification.avatar }}
                  />
                  <Text>{notification.name + " " + notification.msg}</Text>
                </View>
              );
            })}
          
        </Card>
        </ScrollView>
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
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "stretch",
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications,
});
export default connect(mapStateToProps, { readNotifications })(Notification);
