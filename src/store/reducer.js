//使用redux-immutable库使state变为immutable对象
import { combineReducers } from "redux-immutable";
import { reducer as registerReducer } from "../pages/register/store";

export default combineReducers({
  Register: registerReducer
});
