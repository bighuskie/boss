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
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionCreators } from "./store";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      account: "",
      password: "",
      verifyPassword: "",
      identity: ""
    };
    this.navToLogin = this.navToLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  navToLogin() {
    this.props.history.push("/login");
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  render() {
    const RadioItem = Radio.RadioItem;
    let { redirectTo, handleRegister } = this.props;
    return (
      <div>
        {redirectTo ? <Redirect to={redirectTo} /> : null}
        <Logo />
        <h3 className="info">账号注册</h3>
        <WingBlank>
          <List>
            <InputItem onChange={value => this.handleChange("account", value)}>
              用户名
            </InputItem>
            <InputItem
              type="password"
              onChange={value => this.handleChange("password", value)}
            >
              密码
            </InputItem>
            <InputItem
              type="password"
              onChange={value => this.handleChange("verifyPassword", value)}
            >
              确认密码
            </InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.identity === "applicant"}
              onChange={() => this.handleChange("identity", "applicant")}
            >
              求职者
            </RadioItem>
            <RadioItem
              checked={this.state.identity === "recruiter"}
              onChange={() => this.handleChange("identity", "recruiter")}
            >
              招聘者
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={() => handleRegister(this.state)}>
            注册
          </Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.navToLogin}>
            登录
          </Button>
        </WingBlank>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    isAuth: state.getIn(["Register", "isAuth"]),
    message: state.getIn(["Register", "message"]),
    redirectTo: state.getIn(["Register", "redirectTo"])
  };
};

const mapDispatchToProp = dispatch => {
  return {
    handleRegister(regInfo) {
      const action = actionCreators.handleRegister(regInfo);
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Register);
