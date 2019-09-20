import { combineReducers } from "redux";
import table from "./table";
import loginReducer from "../containers/Login/reducer";

const rootReducer = combineReducers({
  table,
  loginReducer
});

export default rootReducer;
