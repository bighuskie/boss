import { fromJS } from "immutable";
import { actionType } from "./index";
import { getRedirectPath } from "../../../util";

const defalutState = fromJS({
  isAuth: false,
  redirectTo: "",
  username: "",
  identity: "",
  message: "",
  _id: ""
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      return state.merge({
        isAuth: true,
        redirectTo: getRedirectPath(action.data),
        username: action.data.username,
        identity: action.data.identity,
        _id: action.data._id,
        message: ""
      });
    case actionType.LOGIN_FAIL:
      return state.merge({
        isAuth: false,
        redirectTo: "",
        username: "",
        identity: "",
        message: action.msg,
        _id: ""
      });
    case actionType.CLEAR_REDUX_INFO:
      return state.merge({ redirectTo: "", message: "" });
    default:
      return state;
  }
};
