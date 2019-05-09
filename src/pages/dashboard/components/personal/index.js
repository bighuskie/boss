import React, { Component } from "react";
import { Result, WhiteSpace, List } from "antd-mobile";
import { connect } from "react-redux";

class Personal extends Component {
  render() {
    const { username, header, company, post, info } = this.props;
    return (
      <section>
        <Result
          img={
            <img src={require(`../../../../assets/images/${header}.png`)} />
          }
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
        <List>
          <List.Item onClick={() => {}}>退出登录</List.Item>
        </List>
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
  mapDispatchToProps
)(Personal);
