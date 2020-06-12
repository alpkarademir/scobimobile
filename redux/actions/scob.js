import axios from "axios";
import { GET_SCOBS, ADD_SCOB, DELETE_SCOB, CLEAR_USER_SCOBS } from "./types";
import { endPoint } from "../api";

export const getUsersScobs = (username) => async (dispatch) => {
  await dispatch({ type: CLEAR_USER_SCOBS });
  try {
    const { data } = await axios.get(`${endPoint}/api/scobs/user/${username}`);

    dispatch({
      type: GET_SCOBS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addScob = (text) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(
      endPoint + "/api/scobs",
      { text },
      config
    );

    dispatch({
      type: ADD_SCOB,
      payload: data,
    });

    return data._id;
  } catch (error) {
    console.error(error);
  }
};
