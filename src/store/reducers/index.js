import { combineReducers } from "redux";
import { SIGN_OUT } from "../types";

import auth from "./auth";
import users from "./users";
import pets from "./pets";

const appReducer = combineReducers({ auth, users, pets });

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
