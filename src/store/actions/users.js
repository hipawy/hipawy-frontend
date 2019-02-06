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

export const fetchUser = userId => dispatch => {
  const token = Cookies.get("token");

  Axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => {
      dispatch({ type: FETCH_USER, payload: response.data.user });
    })
    .catch(err => {
      console.error(err);
    });
};

export const updateUserProfile = data => dispatch => {
  // const token = Cookies.get("token");
  // console.log(token);

  Axios.patch(`${process.env.REACT_APP_API_URL}/users/${data.id}`)
    .then(response => {
      dispatch({ type: UPDATE_USER_PROFILE, payload: response.data.user });
      dispatch(fetchUser(data.id));
    })
    .catch(err => {
      console.error(err);
    });
};
