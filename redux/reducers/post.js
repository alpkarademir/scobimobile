import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  UPDATE_DISLIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_BOOKMARKS,
  UPDATE_BOOKMARKS,
  CLEAR_POST,
  GET_USER_POSTS,
  CLEAR_USER_POSTS,
} from "../actions/types";

const initialState = {
  posts: [],
  user_posts: [],
  post: null,
  bookmarks: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CLEAR_POST:
      return {
        ...state,
        post: null,
      };
    case CLEAR_USER_POSTS:
      return {
        ...state,
        user_posts: [],
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_USER_POSTS:
      return {
        ...state,
        user_posts: payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case GET_BOOKMARKS:
      return {
        ...state,
        bookmarks: payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        user_posts: state.posts.filter((post) => post._id !== payload),
        post: null,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_BOOKMARKS:
      return {
        ...state,
        bookmarks: payload,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        post: state.post ? { ...state.post, likes: payload.likes } : null,
        loading: false,
      };
    case UPDATE_DISLIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id
            ? { ...post, dislikes: payload.dislikes }
            : post
        ),
        post: state.post ? { ...state.post, dislikes: payload.dislikes } : null,
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
}
