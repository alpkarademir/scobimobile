import React from "react";
import { StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import TwoFAScreen from "./components/screens/TwoFAScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import SignUpScreen from "./components/screens/SignUpScreen";
import PostScreen from "./components/screens/PostScreen";
import CommentScreen from "./components/screens/CommentScreen";
import ContactScreen from "./components/screens/ContactScreen";
import ProfilePostScreen from "./components/screens/ProfilePostScreen";
import ProfileScobScreen from "./components/screens/ProfileScobScreen";
import ProfileBookmarkScreen from "./components/screens/ProfileBookmarkScreen";
import SearchScreen from "./components/screens/Search";
import NotificationScreen from "./components/screens/NotificationsScreen";
import ProfileEditScreen from "./components/screens/ProfileEditScreen";
import ContentAddScreen from "./components/screens/ContentAdd";

import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene
            key="twofaScreen"
            component={TwoFAScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="profileScreen"
            component={ProfileScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="homeScreen"
            component={HomeScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="loginScreen"
            component={LoginScreen}
            animation="fade"
            hideNavBar={true}
            initial={true}
          />
          <Scene
            key="signupScreen"
            component={SignUpScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="postScreen"
            component={PostScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="commentScreen"
            component={CommentScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="contactScreen"
            component={ContactScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="profilePostScreen"
            component={ProfilePostScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="profileScobScreen"
            component={ProfileScobScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="profileBookmarkScreen"
            component={ProfileBookmarkScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="searchScreen"
            component={SearchScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="notificationScreen"
            component={NotificationScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="profileEditScreen"
            component={ProfileEditScreen}
            animation="fade"
            hideNavBar={true}
          />
          <Scene
            key="contentAddScreen"
            component={ContentAddScreen}
            animation="fade"
            hideNavBar={true}
          />
        </Scene>
      </Router>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
