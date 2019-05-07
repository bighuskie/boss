import axios from "axios";
import { actionType } from "./index";

//注册账号的action
const registerSuccess = data => {
  return {
    type: actionType.REGISTER_SUCCESS,
    data
  };
};
const registerFail = msg => {
  return {
    type: actionType.REGISTER_FAIL,
    msg
  };
};

export const handleRegister = regInfo => {
  if (!regInfo.username || !regInfo.password || !regInfo.verifyPassword) {
    return registerFail("账号或密码不可以为空");
  } else if (regInfo.password !== regInfo.verifyPassword) {
    return registerFail("密码不匹配");
  }
  return dispatch => {
    const { username, password, identity } = regInfo;
    axios
      .post("/register", {
        username,
        password,
        identity
      })
      .then(res => {
        dispatch(registerSuccess(res.data.data));
      })
      .catch(err => {
        dispatch(registerFail("请求失败"));
        // throw err;
        console.log("请求失败");
      });
  };
};

//销毁组件时清除register的redux中RedirectTo和message

export const clearReduxInfo = () => {
  return {
    type: actionType.CLEAR_REDUX_INFO
  };
};
