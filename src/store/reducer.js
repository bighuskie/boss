//使用redux-immutable库使state变为immutable对象
import { combineReducers } from "redux-immutable";
import { reducer as registerReducer } from "../pages/register/store";
import { reducer as loginReducer } from "../pages/login/store";
import { reducer as userListReducer } from "../components/recruiter/store";

export default combineReducers({
  Register: registerReducer,
  User: loginReducer,
  UserList: userListReducer
});
