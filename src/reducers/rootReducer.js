import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";

const reducers = combineReducers({
  userReducer,
  loadingReducer
});

export default reducers;
