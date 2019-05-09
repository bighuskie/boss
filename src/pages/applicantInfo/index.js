import React, { PureComponent } from "react";
import {
  NavBar,
  InputItem,
  TextareaItem,
  Button,
  WhiteSpace
} from "antd-mobile";
import Avatar from "../../components/avatar";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class RecruiterInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      header: "",
      info: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectAvatar = this.selectAvatar.bind(this);
  }
  handleChange(value, key) {
    this.setState({
      [value]: key
    });
  }
  //传递给头像选择组件的方法，获得用户选择的图片信息
  selectAvatar(avatar) {
    this.setState({
      header: avatar
    });
  }
  render() {
    let { handleAuth } = this.props;
    return (
      <div>
        <NavBar mode="dark">个人信息完善</NavBar>
        {/* 头像选择组件 */}
        <Avatar selectAvatar={this.selectAvatar} />
        <InputItem onChange={value => this.handleChange("post", value)}>
          应聘职位
        </InputItem>
        {/* <InputItem onChange={value => this.handleChange("company", value)}>
          公司名称
        </InputItem> */}
        {/* <InputItem onChange={value => this.handleChange("salary", value)}>
          职位薪资
        </InputItem> */}
        <TextareaItem
          onChange={value => this.handleChange("info", value)}
          title="个人简介"
          row={3}
          autoHeight
        />
        <WhiteSpace />
        <Button type="primary" onClick={() => handleAuth(this.state)}>
          确定
        </Button>
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => {
  return {
    handleAuth(state) {
      dispatch(actionCreators.handleAuth(state));
    }
  };
};

export default connect(
  null,
  mapDispatchToProp
)(RecruiterInfo);
