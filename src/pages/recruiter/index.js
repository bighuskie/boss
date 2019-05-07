import React, { PureComponent } from "react";
import { NavBar, InputItem, TextareaItem } from "antd-mobile";
import Avatar from "../../components/avatar";

class Recruiter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      avatarText: ""
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
      avatarText: avatar
    });
  }
  render() {
    return (
      <div>
        <NavBar mode="dark">个人信息完善</NavBar>
        {/* 头像选择组件 */}
        <Avatar selectAvatar={this.selectAvatar} />
        <InputItem onChange={value => this.handleChange("post", value)}>
          招聘职位
        </InputItem>
        <InputItem onChange={value => this.handleChange("company", value)}>
          公司名称
        </InputItem>
        <InputItem onChange={value => this.handleChange("salary", value)}>
          职位薪资
        </InputItem>
        <TextareaItem
          onChange={value => this.handleChange("info", value)}
          title="职位要求"
          row={3}
          autoHeight
        />
      </div>
    );
  }
}

export default Recruiter;
