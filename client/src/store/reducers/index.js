import stepCounter from "./stepCounter";
import settings from "./settings";
import { combineReducers } from "redux";

const reducers = combineReducers({
  stepCounter,
  settings
});

export default reducers;
