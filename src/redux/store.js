import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contentReducer from "./reducer/contentReducer";

const store = createStore(contentReducer, composeWithDevTools());

export default store;
