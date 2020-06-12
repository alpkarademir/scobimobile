import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Actions } from "react-native-router-flux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { connect } from 'react-redux';
import { getToken, login_2fa } from '../../redux/actions/auth';
import PropTypes from 'prop-types'


// const TwoFAScreen = ({ getToken, login_2fa, auth }) => {
//   useEffect(() => {
//     if (auth.user) {
//       getToken(auth.user.id);
//     }
//   }, [getToken]);

//   const [token, setToken] = useState('');
//   const [loadingToken, setLoadingToken] = useState(true);


//   // if (!auth.user && !auth.two_fa) {
//   //   Actions.loginScreen();
//   // }
//   const onClick = () => {
//     if (token) {
//       login_2fa(auth.secret, token, auth.user.id);
//     }
//   };

//   if (auth.isAuthenticated) {
//     Actions.homeScreen();
//   }

//   return (
//     <View style={styles.container}>
//       <Image style={styles.logo} source={require("../../assets/2fa.png")} />
//       <Text style={styles.textarea}>Lütfen 2FA kodunuzu giriniz.</Text>
//       <TextInput
//         style={{height: 40, width: 320, borderColor: 'gray', borderWidth: 1, borderRadius: 30, marginBottom: 12, padding: 10}}
//         onChangeText={(text) => setToken(text)}
//         autoCorrect= {false}
//         value={token}
//         placeholder="Doğrulama Kodu"
//         autoCapitalize="none"
//         placeholderTextColor="#A3A3A1" />
//       <TouchableOpacity style={styles.button} onPress={onClick}>
//         <FontAwesomeIcon icon={faCheck} size={20} />
//         <Text> Doğrula </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

export class TwoFAScreen extends Component {
  state = {
    token: ''
  };

  static propTypes = {
    getToken: PropTypes.func.isRequired,
  login_2fa: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  };

  componentWillMount() {
    // this.props.getToken(this.props.auth.user.id);
  }

  onClick = () => {
    console.log(this.state.token);
    if (this.state.token) {
      this.props.login_2fa(this.props.auth.secret, this.state.token, this.props.auth.user.id);
    }
  }

  onClickKodGonder = () => {
    this.props.getToken(this.props.auth.user.id);
  }

  render() {
    const { token} = this.state;
    const {auth} = this.props;
    if (auth.isAuthenticated) {
      Actions.homeScreen();
    }
    return (
      <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/2fa.png")} />
      <Text style={styles.textarea}>Lütfen 2FA kodunuzu giriniz.</Text>
      <TextInput
        style={{height: 40, width: 320, borderColor: 'gray', borderWidth: 1, borderRadius: 30, marginBottom: 12, padding: 10}}
        onChangeText={(text) => this.setState({token: text})}
        autoCorrect= {false}
        value={token}
        placeholder="Doğrulama Kodu"
        autoCapitalize="none"
        placeholderTextColor="#A3A3A1" />
      <TouchableOpacity style={styles.button} onPress={this.onClick}>
        <FontAwesomeIcon icon={faCheck} size={20} />
        <Text> Doğrula </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={this.onClickKodGonder}>
        <FontAwesomeIcon icon={faCheck} size={20} />
        <Text> Kodu Gönder </Text>
      </TouchableOpacity>
    </View>
    )
  }
}

// TwoFAScreen.propTypes = {
//   getToken: PropTypes.func.isRequired,
//   login_2fa: PropTypes.func.isRequired,
// }

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { getToken, login_2fa })(TwoFAScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textarea: {
    marginTop: 5,
    flex: 0.06,
  },
  logo: {
    flex: 0.35,
    width: 230,
  },
  button: {
    alignItems: "center",
    backgroundColor: "cadetblue",
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 5,
    borderWidth: 1,
    flexDirection: "row",
  },
});
