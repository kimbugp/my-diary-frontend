import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";
import entriesReducer from "./entriesReducer";

const reducers = combineReducers({
  userReducer,
  loadingReducer,
  entriesReducer
});

export default reducers;
