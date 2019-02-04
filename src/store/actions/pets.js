import { CREATE_PET, FETCH_PETS } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchPets = () => dispatch => {
  Axios.get(`${process.env.REACT_APP_API_URL}/pets`)
    .then(response =>
      dispatch({ type: FETCH_PETS, payload: response.data.pets })
    )
    .catch(err => console.error(err));
};

export const createPet = data => dispatch => {
  const token = Cookies.get("token");

  Axios.post(
    `${process.env.REACT_APP_API_URL}/users/${data.userId}/pets`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
    .then(() => dispatch({ type: CREATE_PET }))
    .catch(err => console.error(err));
};
