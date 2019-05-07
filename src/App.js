import React, { Component } from "react";
//可以向组件注入store数据
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
//引入组件
import AuthRoute from "./pages/auth";
import Login from "./pages/login";
import Register from "./pages/register";
import Recruiter from "./pages/recruiter";
import UserCenter from "./pages/userCenter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AuthRoute />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/applicant" exact component={UserCenter} />
          <Route path="/recruiter" exact component={Recruiter} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
