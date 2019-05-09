import React, { Component } from "react";
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Recruiter extends Component {
  componentDidMount() {
    const { getUserList } = this.props;
    getUserList();
  }
  render() {
    const { userList } = this.props;
    return (
      <section>
        {userList.map(item => {
          return (
            <WingBlank size="md" key={item._id}>
              <WhiteSpace size="md" />
              <Card>
                <Card.Header
                  title={item.username}
                  extra={<span>{item.post}</span>}
                  thumb={require(`../../components/avatar/images/${
                    item.header
                  }.png`)}
                  thumbStyle={{ width: "50px" }}
                />
                <Card.Body>
                  <div>{item.info}</div>
                </Card.Body>
              </Card>
            </WingBlank>
          );
        })}
      </section>
    );
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
