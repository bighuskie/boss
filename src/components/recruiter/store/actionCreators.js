import axios from "axios";
import { actionType } from "./index";

//获取招聘者信息的action
const getUserSuccess = data => {
  return {
    type: actionType.GET_USER_LIST,
    data
  };
};
// const loginFail = msg => {
//   return {
//     type: actionType.LOGIN_FAIL,
//     msg
//   };
// };

export const getUserList = identity => {
  return dispatch => {
    axios.get(`/userlist?identity=${identity}`).then(res => {
      const result = res.data;
      if (result.code === 0) {
        dispatch(getUserSuccess(result.data));
      } else {
        console.log("查询用户列表失败");
      }
    });
  };
};

// //销毁组件时清除login的redux中RedirectTo和message

// export const clearReduxInfo = () => {
//   return {
//     type: actionType.CLEAR_REDUX_INFO
//   };
// };
