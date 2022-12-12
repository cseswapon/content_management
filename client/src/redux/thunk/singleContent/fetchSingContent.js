import { loadSingleContent } from "../../action/content";

const fetchSingleContent = (id) => {
    return async(dispatch, getState) => {
        const res =await fetch(
          `http://localhost:5000/content/${id}`
        );
        const data = await res.json();
        dispatch(loadSingleContent(data))
    }
}

export default fetchSingleContent;