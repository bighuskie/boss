import React, { Component } from "react";
import logo from "./images/logo.jpg";
import "./style.scss";

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default Logo;
