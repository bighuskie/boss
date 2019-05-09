import axios from "axios";
import { actionType } from "./index";

//完善信息的action
const loginSuccess = data => {
  return {
    type: actionType.AUTH_SUCCESS,
    data
  };
};
const loginFail = msg => {
  return {
    type: actionType.AUTH_FAIL,
    msg
  };
};

export const handleAuth = state => {
  if (!state.header) {
    return loginFail("更改失败");
  }
  return dispatch => {
    console.log(state);
    axios
      .post("/update", state)
      .then(res => {
        dispatch(loginSuccess(res.data.data));
      })
      .catch(err => {
        dispatch(loginFail("请求失败"));
        // throw err;
        console.log("请求失败");
      });
  };
};
