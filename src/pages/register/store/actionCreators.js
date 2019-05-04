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
  if (!regInfo.account || !regInfo.password || !regInfo.verifyPassword) {
    return registerFail("账号或密码不可以为空");
  } else if (regInfo.password !== regInfo.verifyPassword) {
    return registerFail("密码不匹配");
  }
    return dispatch => {
      axios
        .post("/user/info", regInfo)
        .then(res => {
        //   dispatch(res);
        })
        .catch(err => {
          console.log("请求失败");
        });
    };
};
