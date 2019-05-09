import React, { Component } from "react";
import { Result, WhiteSpace, List, Modal, Button } from "antd-mobile";
import { connect } from "react-redux";
import Cookies from "browser-cookies"

class Personal extends Component {
  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
  }
  //modal框提醒用户
  showAlert() {
    const { alert } = Modal;
    alert("退出登录", "确定退出?", [
      {
        text: "取消",
        onPress: () => console.log("cancel"),
        style: "default"
      },
      { text: "确定", onPress: () => {Cookies.erase("userid")} }
    ]);
  }
  render() {
    const { username, header, company, post, info } = this.props;
    return (
      <section>
        <Result
          img={<img src={require(`../../../../assets/images/头像1.png`)} />}
          title={username}
          message={company}
        />
        <List renderHeader={() => "职业信息"}>
          <List.Item>
            {post}
            <List.Item.Brief>{info}</List.Item.Brief>
          </List.Item>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.showAlert}>
          退出登录
        </Button>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.getIn(["User", "username"]),
    header: state.getIn(["User", "header"]),
    company: state.getIn(["User", "company"]),
    post: state.getIn(["User", "post"]),
    info: state.getIn(["User", "info"])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  null
)(Personal);
