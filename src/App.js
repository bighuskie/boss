import React, { Component } from "react";
//可以向组件注入store数据
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//引入组件
import AuthRoute from "./pages/auth";
import Login from "./pages/login";
import Register from "./pages/register";
import RecruiterInfo from "./pages/recruiterInfo";
import ApplicantInfo from "./pages/applicantInfo";
import Dashboard from "./pages/dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AuthRoute />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/recruiterinfo" exact component={RecruiterInfo} />
            <Route path="/applicantinfo" exact component={ApplicantInfo} />
            <Route component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
