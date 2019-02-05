import { SET_SIGN_UP_STATUS, SIGN_IN, SIGN_OUT } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

console.log(process.env);

export const signUp = data => dispatch => {
  Axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, data)
    .then(response => {
      if (response.status === 200) {
        dispatch(setSignUpStatus(true));
      }
    })
    .catch(err => {
      console.error(err);
      dispatch(setSignUpStatus(false));
    });
};

export const setSignUpStatus = value => ({
  type: SET_SIGN_UP_STATUS,
  payload: value
});

export const signIn = data => dispatch => {
  Axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, data)
    .then(response => {
      if (response.status === 200) {
        Cookies.set("token", response.data.token, { expires: 7 });
        dispatch(signInAction(response.data.user));
      }
    })
    .catch(err => {
      console.error(err);
    });
};

export const signInAction = user => ({
  type: SIGN_IN,
  payload: user
});

export const signOut = () => dispatch => {
  Cookies.remove("token");

  dispatch({
    type: SIGN_OUT
  });
};
