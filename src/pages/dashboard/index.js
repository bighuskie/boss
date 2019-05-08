import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import NavFooter from "../../components/navFooter";
import { Route, Switch } from "react-router-dom";
import "./style.scss";

function Recruiter() {
  return <div>recruiter</div>;
}
function Applicant() {
  return <div>applicant</div>;
}
function Message() {
  return <div>message</div>;
}
function Personal() {
  return <div>personal</div>;
}

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
        component: Recruiter,
        isHide: identity === "applicant"
      },
      {
        path: "/applicant",
        text: "应聘者",
        icon: "applicant",
        title: "招聘者列表",
        component: Applicant,
        isHide: identity === "recruiter"
      },
      {
        path: "/message",
        text: "消息",
        icon: "message",
        title: "消息列表",
        component: Message
      },
      {
        path: "/personal",
        text: "我",
        icon: "personal",
        title: "个人中心",
        component: Personal
      }
    ];
    return (
      <div>
        {/* 头部导航条 */}
        <NavBar mode="dark" className="fixed-header">
          {navList.find(item => item.path === pathname).title}
        </NavBar>
        {/* 内容区 */}
        <section className="content-wrapper">
          <Switch>
            {navList.map(item => {
              return (
                <Route
                  path={item.path}
                  exact
                  component={item.component}
                  key={item.path}
                />
              );
            })}
          </Switch>
        </section>
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
