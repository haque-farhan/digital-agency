import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route render={() => <h1>not found</h1>} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
