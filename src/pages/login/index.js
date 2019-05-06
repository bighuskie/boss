import React, { Component } from "react";
import Logo from "../../components/logo";
import {
  List,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
  NoticeBar
} from "antd-mobile";
import "./style.scss";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accout: "",
      password: ""
    };
    this.navToRegister = this.navToRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  navToRegister() {
    this.props.history.push("/register");
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    let { message, redirectTo, handleLogin } = this.props;
    return (
      <div>
        {/* 登录成功就重定向 */}
        {redirectTo ? <Redirect to={redirectTo} /> : null}
        {/* logo图片组件 */}
        <Logo />
        <h3 className="info">账号登录</h3>
        {/* 提示通知栏  */}
        {message ? (
          <div>
            <NoticeBar mode="closable" icon={null}>
              {message}
            </NoticeBar>
            <WhiteSpace />
          </div>
        ) : null}
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
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={() => handleLogin(this.state)}>
            登录
          </Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.navToRegister}>
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
  componentWillUnmount() {
    const { clearReduxInfo } = this.props;
    clearReduxInfo();
  }
}
const mapStateToProps = state => {
  return {
    message: state.getIn(["Login", "message"]),
    redirectTo: state.getIn(["Login", "redirectTo"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    /**
     *派发登录action，处理登录逻辑
     */
    handleLogin(loginInfo) {
      dispatch(actionCreators.handleLogin(loginInfo));
    },
    /**
     * 销毁组件时清除login的redux中RedirectTo和message
     */
    clearReduxInfo() {
      dispatch(actionCreators.clearReduxInfo());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
