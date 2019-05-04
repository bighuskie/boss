import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "antd-mobile/dist/antd-mobile.css";
import "./axiosConfig";
import axios from "axios";

axios.get("http://localhost:8080/data").then(res => {
  console.log(res);
});

ReactDOM.render(<App />, document.getElementById("root"));
