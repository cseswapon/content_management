import { GET_CONTENT, SINGLE_CONTENT } from "../actionType/actionType";

const initializeState = {
  data: [],
  singleData: {},
};
const contentReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        data: action.payload,
      };
    case SINGLE_CONTENT:
      return {
        ...state,
        singleData: action.payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
