import { fromJS } from "immutable";
import { actionType } from "./index";
import { getRedirectPath } from "../../../util";

const defalutState = fromJS({
  isAuth: false,
  redirectTo: "",
  account: "",
  password: "",
  verifyPassword: "",
  identity: "",
  message: ""
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case actionType.REGISTER_SUCCESS:
      return state.merge({ isAuth: true, redirectTo: getRedirectPath(action) });
    case actionType.REGISTER_FAIL:
      return state.merge({
        message: action.msg,
        isAuth: false
      });
    default:
      return state;
  }
};
