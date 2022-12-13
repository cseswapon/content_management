import { TOGGLE, TOGGLE_UPLOAD } from "../actionType/actionType";

export const toggleData = () => {
  return {
    type: TOGGLE,
  };
};

export const toggleUpload = (data) => {
  return {
    type: TOGGLE_UPLOAD,
    payload: data,
  };
};
