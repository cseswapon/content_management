import { loaContent } from "../../action/content";

const fetchContent = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/content");
    const data = await res.json();
    if (data.data) {
      dispatch(loaContent(data.data));
    }
  };
};

export default fetchContent;
