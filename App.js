import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import TwoFAScreen from './components/screens/TwoFAScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import PostScreen from './components/screens/PostScreen';

export default function App() {
  return (
    <Router>
	      <Scene key="root">
	        <Scene key="twofaScreen"
	          component={TwoFAScreen}
	        	animation='fade'
            hideNavBar={true}
            
	        />
	        <Scene key="profileScreen"
	          component={ProfileScreen}
	          animation='fade'
						hideNavBar={true}
	        />
          <Scene key="homeScreen"
	          component={HomeScreen}
	          animation='fade'
						hideNavBar={true}
	        />
			<Scene key="loginScreen"
	          component={LoginScreen}
	          animation='fade'
            hideNavBar={true}
            initial={true}
	        />
			<Scene key="signupScreen"
				component={SignUpScreen}
				animation='fade'
				hideNavBar={true}
	        />
			<Scene key="postScreen"
				component={PostScreen}
				animation='fade'
				hideNavBar={true}
	        />
	      </Scene>
	    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
