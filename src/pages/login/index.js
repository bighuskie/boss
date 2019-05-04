import React, { Component } from "react";
import Logo from "../../components/logo";
import { List, InputItem, WingBlank, Button, WhiteSpace } from "antd-mobile";
import "./style.scss";


class Login extends Component {
  constructor(props) {
    super(props);
    this.navToRegister = this.navToRegister.bind(this);
  }
  navToRegister() {
    this.props.history.push("/register");
  }

  render() {
    return (
      <div>
        <Logo />
        <h3 className="info">账号登录</h3>
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.navToRegister}>
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
