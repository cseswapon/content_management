import { TOGGLE, TOGGLE_UPLOAD } from "../actionType/actionType";

const initializeState = {
  toggle: false,
  data: [],
};

const filterReducer = (state = initializeState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case TOGGLE_UPLOAD:
      if (!state.data.includes(action.payload)) {
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      } else {
        return {
          ...state,
          data: state.data.filter((data) => data !== action.payload),
        };
      }
    default:
      return state;
  }
};

export default filterReducer;
