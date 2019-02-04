import { CREATE_PET, FETCH_PETS } from "../types";

const initialState = {
  pets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PETS:
      return { ...state, pets: action.payload };
    default:
      return state;
  }
};
