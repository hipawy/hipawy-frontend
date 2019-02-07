import { FETCH_USERS, FETCH_USER } from "../types";

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case FETCH_USER:
      return { user: action.payload };
    default:
      return state;
  }
};
