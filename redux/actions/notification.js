import axios from "axios";
import {
  GET_NOTIFICATIONS,
  GET_UNREADED_NOTIFICATIONS,
  READ_NOTIFICATIONS,
} from "./types";
import { endPoint } from "../api";

// Get posts
export const getNotifications = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(endPoint + "/api/notifications");

    const notifications = res.data.notifications;

    if (getState().notification.notifications.length !== notifications.length)
      await dispatch({ type: GET_UNREADED_NOTIFICATIONS });

    dispatch({
      type: GET_NOTIFICATIONS,
      payload: res.data,
    });
  } catch (err) {}
};

export const readNotifications = () => async (dispatch) => {
  await dispatch({ type: READ_NOTIFICATIONS });
};
