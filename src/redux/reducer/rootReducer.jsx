import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import useReducer from "./UseReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  user: useReducer,

});

export default rootReducer;
