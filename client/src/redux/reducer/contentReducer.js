import { GET_CONTENT } from "../actionType/actionType";

const initializeState = {
  data: [],
};
const contentReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default contentReducer;
