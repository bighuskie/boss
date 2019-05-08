import React, { Component } from "react";
import PropTypes from "prop-types";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
import "./style.scss";

class NavFooter extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired
  };
  render() {
    const navDataArray = this.props.navList.filter(item => !item.isHide);
    const { pathname } = this.props.location;
    return (
      <div>
        <TabBar>
          {navDataArray.map(item => {
            return (
              <TabBar.Item
                title={item.text}
                key={item.path}
                icon={{
                  uri: require(`./images/${item.icon}.png`)
                }}
                selectedIcon={{
                  uri: require(`./images/${item.icon}-selected.png`)
                }}
                tabBarPosition="bottom"
                selected={pathname == item.path}
                onPress={() => {
                  this.props.history.push(item.path);
                }}
              />
            );
          })}
        </TabBar>
      </div>
    );
  }
}

export default withRouter(NavFooter);
