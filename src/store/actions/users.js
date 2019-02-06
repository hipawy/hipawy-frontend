import { FETCH_USERS, FETCH_USER, UPDATE_USER_PROFILE } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchUsers = () => dispatch => {
  const token = Cookies.get("token");

  Axios.get(`${process.env.REACT_APP_API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(({ data: { users } }) => {
      console.log(users);
      dispatch({ type: FETCH_USERS, payload: users });
    })
    .catch(err => {
      console.error(err);
    });
};

export const fetchUser = (userId) => dispatch => {
  const token = Cookies.get("token");

  Axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(({ data: { user } }) => {
      console.log(user);
      dispatch({ type: FETCH_USER, payload: user });
    })
    .catch(err => {
      console.error(err);
    });
};

export const updateUserProfile = userId => dispatch => {
  const token = Cookies.get("token");

  Axios.patch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(({ data: { user } }) => {
      console.log(user);
      
      dispatch({ type: UPDATE_USER_PROFILE, payload: user })
      // dispatch({fetchUser(userId)})
    })
    .catch(err => {
      console.error(err);
    });
}