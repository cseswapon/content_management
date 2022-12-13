import { addContent } from "../../action/content";

const fetchPostContent = (data) => {
    console.log(data);
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/content/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    dispatch(addContent(resData));
  };
};

export default fetchPostContent;
