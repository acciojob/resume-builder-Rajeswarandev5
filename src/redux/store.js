
import { createStore } from "redux";
import resumeReducer from "./resumeSlice";

const store = createStore(resumeReducer);

export default store;