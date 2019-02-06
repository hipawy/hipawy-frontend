import { FETCH_USERS, FETCH_USER, UPDATE_USER_PROFILE } from "../types";

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case FETCH_USER:
      return action.payload;
    case UPDATE_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
