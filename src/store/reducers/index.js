import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import pets from "./pets";

export default combineReducers({ auth, users, pets });
