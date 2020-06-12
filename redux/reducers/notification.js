import {
  GET_NOTIFICATIONS,
  READ_NOTIFICATIONS,
  GET_UNREADED_NOTIFICATIONS,
} from "../actions/types";

const initialState = {
  notifications: [],
  hasUnreadNotifications: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: payload.notifications,
      };
    case READ_NOTIFICATIONS:
      return {
        ...state,
        hasUnreadNotifications: false,
      };
    case GET_UNREADED_NOTIFICATIONS:
      return {
        ...state,
        hasUnreadNotifications: true,
      };
    default:
      return state;
  }
}
