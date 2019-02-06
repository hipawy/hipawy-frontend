import { FETCH_PETS, FETCH_USER_PETS } from "../types";

const initialState = {
  pets: [],
  userPets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PETS:
      return { ...state, pets: action.payload };
    case FETCH_USER_PETS:
      return { ...state, userPets: action.payload };
    default:
      return state;
  }
};
