import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  REDIRECT_TWO_FA,
  GET_TOKEN,
  UPDATE_TWO_FA,
} from "../actions/types";
import { AsyncStorage } from "react-native";

const _retrieveData = async () => {
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

const initialState = {
  token: _retrieveData(),
  isAuthenticated: false,
  loading: true,
  user: null,
  two_fa: null,
};

const _storeData = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    // Error saving data
  }
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case GET_TOKEN:
      return {
        ...state,
        ...payload,
      };
    case REDIRECT_TWO_FA:
      return {
        ...state,
        two_fa: payload.two_fa,
        user: payload.user,
        loading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      _storeData(payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      AsyncStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: true,
        user: null,
        two_fa: null,
        secret: null,
      };
    case UPDATE_TWO_FA: {
      return {
        ...state,
        user: { ...state.user, two_fa: payload },
      };
    }
    default:
      return state;
  }
}
