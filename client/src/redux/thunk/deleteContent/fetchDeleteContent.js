import { deleteContent } from "../../action/content";

const fetchDeleteContent = (id) => {
  return async (dispatch, getState) => {
    await dispatch(deleteContent(id));
    const res = await fetch(`http://localhost:5000/content/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.data.deletedCount > 0) {
      alert("Delete Successfully")
    }
  };
};

export default fetchDeleteContent;
