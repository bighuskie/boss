import React, { Component } from "react";
//可以向组件注入store数据
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
//引入组件
import Login from "./pages/login";
import Register from "./pages/register";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
