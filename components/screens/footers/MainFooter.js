import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusSquare, faBell } from "@fortawesome/free-regular-svg-icons";
import { faShare, faEye, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PostScreen() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <View style={styles.addPostContainer}>
          <FontAwesomeIcon color="#000000" icon={faSearch} size={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.addScobContainer}>
          <FontAwesomeIcon color="#000000" icon={faPlusSquare} size={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.addScobContainer}>
          <FontAwesomeIcon color="#000000" icon={faBell} size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  footer: {
    height: 60,
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
});
