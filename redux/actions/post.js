import axios from "axios";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_DISLIKES,
  GET_BOOKMARKS,
  UPDATE_BOOKMARKS,
  CLEAR_POST,
} from "./types";
import { endPoint } from "../api";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(endPoint + "/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getPost = (id) => async (dispatch) => {
  dispatch(clearPost());
  try {
    const res = await axios.get(`${endPoint}/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err },
    });
  }
};

export const clearPost = () => (dispatch) => {
  dispatch({
    type: CLEAR_POST,
  });
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`${endPoint}/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`${endPoint}/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like
export const addDislike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`${endPoint}/api/posts/dislike/${id}`);

    dispatch({
      type: UPDATE_DISLIKES,
      payload: { id, dislikes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeDislike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`${endPoint}/api/posts/undislike/${id}`);

    dispatch({
      type: UPDATE_DISLIKES,
      payload: { id, dislikes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
