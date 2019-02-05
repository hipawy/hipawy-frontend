import { CREATE_PET, FETCH_PETS, FETCH_USER_PETS } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchPets = () => dispatch => {
  Axios.get(`${process.env.REACT_APP_API_URL}/api/pets`)
    .then(response =>
      dispatch({ type: FETCH_PETS, payload: response.data.pets })
    )
    .catch(err => console.error(err));
};

export const fetchUserPets = userId => dispatch => {
  Axios.get(`${process.env.REACT_APP_API_URL}/api/users/${userId}/pets`)
    .then(response =>
      dispatch({ type: FETCH_USER_PETS, payload: response.data.pets })
    )
    .catch(err => console.error(err));
};

export const deletePet = data => dispatch => {
  const token = Cookies.get("token");

  Axios.delete(
    `${process.env.REACT_APP_API_URL}/api/users/${data.userId}/pets/${
      data.petId
    }`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
    .then(response => {
      // dispatch({ type: DELETE_PET });
      // dispatch(fetchUserPets(data.userId));
    })
    .catch(err => console.error(err));
};

export const createPet = data => dispatch => {
  const token = Cookies.get("token");

  Axios.post(
    `${process.env.REACT_APP_API_URL}/api/users/${data.userId}/pets`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
    .then(() => {
      // dispatch({ type: CREATE_PET })
      // dispatch(fetchUserPets(data.userId));
    })
    .catch(err => console.error(err));
};
