import { fromJS } from "immutable";
import { actionType } from "./index";
import { getRedirectPath } from "../../../util";

const defalutState = fromJS({
  isAuth: false,
  redirectTo: "",
  username: "",
  password: "",
  identity: "",
  message: ""
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      return state.merge({
        isAuth: true,
        redirectTo: getRedirectPath(action),
        message: "",
        username: action.data.username,
        password: action.data.password,
        identity: action.data.identity
      });
    case actionType.LOGIN_FAIL:
      return state.merge({
        isAuth: false,
        redirectTo: "",
        username: "",
        password: "",
        identity: "",
        message: action.msg
      });
    case actionType.CLEAR_REDUX_INFO:
      return state.merge({ redirectTo: "", message: "" });
    default:
      return state;
  }
};
