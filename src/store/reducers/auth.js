import {
  SIGN_IN,
  SET_SIGN_UP_STATUS,
  SIGN_OUT,
  UPDATE_USER_PROFILE
} from "../types";

const initialState = {
  isAuthenticated: false,
  isSignUpSuccess: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGN_UP_STATUS:
      return { ...state, isSignUpSuccess: action.payload };
    case SIGN_IN:
      return { ...state, isAuthenticated: true, user: action.payload };
    case SIGN_OUT:
      return { ...state, isAuthenticated: false, user: null };
    case UPDATE_USER_PROFILE:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
