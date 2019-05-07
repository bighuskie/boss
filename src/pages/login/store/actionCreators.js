import axios from "axios";
import { actionType } from "./index";

//登录账号的action
const loginSuccess = data => {
  return {
    type: actionType.LOGIN_SUCCESS,
    data
  };
};
const loginFail = msg => {
  return {
    type: actionType.LOGIN_FAIL,
    msg
  };
};

export const handleLogin = loginInfo => {
  if (!loginInfo.username || !loginInfo.password) {
    return loginFail("账号或密码不可以为空");
  }
  return dispatch => {
    const { username, password } = loginInfo;
    axios
      .post("/login", {
        username,
        password
      })
      .then(res => {
        const result = res.data;
        if (res.status === 200 && result.code === 0) {
          const data = result.data;
          dispatch(loginSuccess(data));
        }
      })
      .catch(err => {
        dispatch(loginFail("请求失败"));
        console.log("请求失败");
      });
  };
};

//销毁组件时清除login的redux中RedirectTo和message

export const clearReduxInfo = () => {
  return {
    type: actionType.CLEAR_REDUX_INFO
  };
};
