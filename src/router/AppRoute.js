import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import login from "../components/Authentication/login";
import Ourproduct from "../components/OurProduct/Ourproduct";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Ourproduct} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
