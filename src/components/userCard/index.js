import React, { Component } from "react";
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import PropTypes from "prop-types";

class UserCard extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  };
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

export default UserCard;
