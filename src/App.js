import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router/AppRoute";
import { Route, Switch } from "react-router-dom";
import "./components/helpers/initFA";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AppRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
