import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Auth extends Component {
  componentDidMount() {
    const excludeRoute = ["/login", "/register"];
    const { pathname } = this.props.location;
    if (excludeRoute.indexOf(pathname) > -1) {
      return false;
    }
    axios
      .get("http://localhost:8080/user/info")
      .then(res => {
        if (res.status === 200) {
          //已经登录
          if (res.data.code === 1) {
            console.log(res.data);
          } else {
            //还没登陆需要跳转
            this.props.history.push("/login");
          }
        }
      })
      .catch(err => {
        console.log("请求用户信息失败");
      });
  }
  render() {
    return <div>判断路由跳转的组件</div>;
  }
}

export default withRouter(Auth);
