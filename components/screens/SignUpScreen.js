import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSellcast,
  faTwitter,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Actions } from "react-native-router-flux";

import { connect } from "react-redux";
import { register } from "../../redux/actions/auth";
import PropTypes from "prop-types";

class SignUpScreen extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  onPressLogIn = () => {
    Actions.loginScreen();
  };
  onPressSignUp = () => {
    const { name, username, email, password, password2 } = this.state;

    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    this.props.register({ name, username, email, password });
  };
  render() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      Actions.homeScreen();
    }

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <FontAwesomeIcon color="#2F855A" icon={faSellcast} size={120} />
          <Text style={styles.iconText}>Scobi Social</Text>
          <Text style={styles.iconText2}>Create Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            autoCapitalize="none"
            placeholderTextColor="#A3A3A1"
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="#A3A3A1"
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            autoCapitalize="none"
            placeholderTextColor="#A3A3A1"
            onChangeText={(text) => this.setState({ email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#A3A3A1"
            onChangeText={(text) => this.setState({ password: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password again"
            secureTextEntry={true}
            placeholderTextColor="#A3A3A1"
            onChangeText={(text) => this.setState({ password2: text })}
          />
          <TouchableOpacity
            style={styles.SignUpButton}
            onPress={this.onPressSignUp}
          >
            <Text style={styles.SignUpText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.buttonTextContainer}>
            <TouchableOpacity
              style={styles.signUpText}
              onPress={this.onPressLogIn}
            >
              <Text style={styles.createAccountText}>
                Already have an account? Log in
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.apiContainer}>
            <TouchableOpacity>
              <FontAwesomeIcon
                style={styles.iconApi}
                color="#1DA1F2"
                icon={faTwitter}
                size={30}
              />
              <Text style={styles.iconApiText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                style={styles.iconApi}
                color="#4267B2"
                icon={faFacebook}
                size={30}
              />
              <Text style={styles.iconApiText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                style={styles.iconApi}
                color="#DB4437"
                icon={faGoogle}
                size={30}
              />
              <Text style={styles.iconApiText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

const inputWidth = Math.round(screenWidth * 0.75);

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingTop: 30,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  container: {
    backgroundColor: "#E2E8F0",
    height: screenHeight,
  },

  input: {
    height: 40,
    color: "#000000",
    borderRadius: 30,
    borderColor: "#2F855A",
    borderWidth: 2,
    marginBottom: 20,
    width: inputWidth,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  form: {
    height: screenHeight - 80,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  SignUpButton: {
    height: 40,
    backgroundColor: "#2F855A",
    width: inputWidth,
    borderRadius: 30,
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
    marginBottom: 20,
  },
  createAccountText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#000000",
  },
  signUpText: {
    marginTop: 20,
    marginBottom: 40,
  },

  buttonTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconText: {
    fontSize: 40,
    marginBottom: 10,
    color: "#2F855A",
  },
  iconText2: {
    fontSize: 25,
    marginBottom: 30,
    color: "#2F855A",
  },
  apiContainer: {
    backgroundColor: "#E2E8F0",
    flexDirection: "row",
    justifyContent: "space-between",
    width: inputWidth,
  },
  iconApi: {
    alignSelf: "center",
  },
  iconApiText: {
    fontSize: 20,
    fontWeight: "300",
  },
  createAccountText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#000000",
  },
  signUpText: {},
  buttonTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(SignUpScreen);
