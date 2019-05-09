import { fromJS } from "immutable";
import { actionType } from "./index";

const defalutState = fromJS({
  userList: []
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case actionType.GET_USER_LIST:
      return state.set("userList", action.data);
    default:
      return state;
  }
};
