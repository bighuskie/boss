import { fromJS } from "immutable";
import { actionType } from "./index";

const defalutState = fromJS({
  isAuth: false,
  account: "",
  password: "",
  verifyPassword: "",
  identity: "",
  message: ""
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case actionType.REGISTER_SUCCESS:
      return state.set("isAuth", true);
    case actionType.REGISTER_FAIL:
      return state.merge({
        message: action.msg,
        isAuth: false
      });
    default:
      return state;
  }
};
