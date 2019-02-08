import {
  FETCH_PETS,
  FETCH_USER_PETS,
  FETCH_USER_DATA,
  CREATE_PET,
  UPDATE_PET_PROFILE,
  UPDATE_PET_PROFILE_STATUS
} from "../types";

const initialState = {
  pets: [],
  userPets: [],
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PET:
      return { ...state, userPets: [...state.userPets, action.payload] };
    case FETCH_PETS:
      return { ...state, pets: action.payload };
    case FETCH_USER_DATA:
      return { ...state, user: action.payload };
    case FETCH_USER_PETS:
      return { ...state, userPets: action.payload };
    case UPDATE_PET_PROFILE:
      return { ...state, pets: action.payload };
    case UPDATE_PET_PROFILE_STATUS:
      return { ...state, pets: action.payload };
    default:
      return state;
  }
};
