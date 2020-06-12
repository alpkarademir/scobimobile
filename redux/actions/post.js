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
  CLEAR_USER_POSTS,
  GET_USER_POSTS,
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

export const getUsersPosts = (username) => async (dispatch) => {
  dispatch(clearUserPosts());

  try {
    const res = await axios.get(`${endPoint}/api/posts/user/${username}`);

    dispatch({
      type: GET_USER_POSTS,
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

export const clearUserPosts = () => (dispatch) => {
  dispatch({
    type: CLEAR_USER_POSTS,
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

// Add Bookmark
export const addBookmark = (id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${endPoint}/api/posts/bookmark/${id}`);

    dispatch({
      type: UPDATE_BOOKMARKS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeBookmark = (id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${endPoint}/api/posts/unbookmark/${id}`);

    dispatch({
      type: UPDATE_BOOKMARKS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsersBookmarks = () => async (dispatch) => {
  try {
    const res = await axios.get(`${endPoint}/api/posts/user/get/bookmarks`);

    dispatch({
      type: GET_BOOKMARKS,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //   type: BOOKMARKS_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(endPoint + "/api/posts", formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    return res.data;
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    return false;
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${endPoint}/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    return true;
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    return false;
  }
};

// Add comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `${endPoint}/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {

  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`${endPoint}/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {

  }
};