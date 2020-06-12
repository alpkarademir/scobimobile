import { combineReducers } from "redux";
import auth from "./auth";
import post from "./post";
import profile from "./profile";
import scob from "./scob";
import notification from "./notification";

export default combineReducers({
  auth,
  post,
  profile,
  scob,
  notification,
});
