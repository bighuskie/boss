import React, { Component } from "react";
import Logo from "../../components/logo";
import {
  List,
  InputItem,
  Radio,
  WingBlank,
  Button,
  WhiteSpace
} from "antd-mobile";
import "./style.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "applicant"
    };
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo />
        <h3 className="info">账号注册</h3>
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>密码</InputItem>
            <InputItem>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type === "applicant"}>
              求职者
            </RadioItem>
            <RadioItem checked={this.state.type === "recruiter"}>
              招聘者
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary">注册</Button>
          <WhiteSpace />
          <Button type="primary">登录</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Register;
