import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import NavFooter from "../../components/navFooter";

class Dashboard extends Component {
  render() {
    const { identity } = this.props;
    const { pathname } = this.props.location;
    const navList = [
      {
        path: "/recruiter",
        text: "招聘者",
        icon: "recruiter",
        title: "应聘者列表",
        component: "",
        isHide: identity === "applicant"
      },
      {
        path: "/applicant",
        text: "应聘者",
        icon: "applicant",
        title: "招聘者列表",
        component: "",
        isHide: identity === "recruiter"
      },
      {
        path: "/message",
        text: "消息",
        icon: "message",
        title: "消息列表",
        component: ""
      },
      {
        path: "/personal",
        text: "我",
        icon: "personal",
        title: "个人中心",
        component: ""
      }
    ];
    return (
      <div>
        {/* 头部导航条 */}
        <NavBar mode="dark">
          {navList.find(item => item.path === pathname).title}
        </NavBar>
        {/* 内容区 */}
        {/* 底部导航 */}
        <NavFooter navList={navList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    identity: state.getIn(["User", "identity"])
  };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
