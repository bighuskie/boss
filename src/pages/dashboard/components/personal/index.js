import React, { Component } from "react";
import { Result, WhiteSpace, List } from "antd-mobile";

class Personal extends Component {
  render() {
    return (
      <section>
        <Result
          img={<img src={require(`../../../../assets/images/头像1.png`)} />}
          title="支付成功"
          message="ok"
        />
        <List renderHeader={() => "个人简介"} className="my-list">
          <List.Item>
            Title
            <List.Item.Brief>Brief</List.Item.Brief>
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

export default Personal;
