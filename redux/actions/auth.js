import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REDIRECT_TWO_FA,
  GET_TOKEN,
  UPDATE_TWO_FA,
} from "./types";
import setAuthToken from "../../utils/setAuthToken";
import { AsyncStorage } from "react-native";
import { endPoint } from "../api";

const _retrieveToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    } else return null;
  } catch (error) {
    // Error retrieving data
    return null;
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  const token = await _retrieveToken();

  if (token) {
    setAuthToken(token);
  }

  try {
    const res = await axios.get(endPoint + "/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });

    // dispatch(getCurrentProfile());

    // dispatch(getUsersBookmarks());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, username, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, username, email, password });

  try {
    const res = await axios.post(endPoint + "/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(endPoint + "/api/auth", body, config);

    if (res.data.two_fa) {
      return dispatch({
        type: REDIRECT_TWO_FA,
        payload: res.data,
      });
    }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data.errors ? err.response.data.errors : false;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    // }
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
