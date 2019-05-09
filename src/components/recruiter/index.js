import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import UserCard from "../userCard";

class Recruiter extends Component {
  componentDidMount() {
    const { getUserList } = this.props;
    getUserList();
  }
  render() {
    const { userList } = this.props;
    // 将immutable对象转为js对象
    const userListArray = userList.toJS();
    return <UserCard userList={userListArray} />;
  }
}

const mapStateToProps = state => {
  return {
    userList: state.getIn(["UserList", "userList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList() {
      dispatch(actionCreators.getUserList("recruiter"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recruiter);
