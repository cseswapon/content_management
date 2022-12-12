import { GET_CONTENT, SINGLE_CONTENT } from "../actionType/actionType";

export const loaContent = (data) => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};

export const loadSingleContent = (data) => {
  return {
    type: SINGLE_CONTENT,
    payload: data,
  };
};
