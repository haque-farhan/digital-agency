import React, { Fragment } from "react";
import HomePage from "./pages/HomePage";
import PageTop from "./components/PageTop/PageTop";
import About from "./pages/About";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router/AppRoute";

import { Route, Switch, withRouter } from "react-router-dom";
import "./components/helpers/initFA";
import AdminSidebar from "./components/Admin/AdminSidebar";
import AdminLayouts from "./components/Admin/AdminLayouts";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminLayouts} />
        <Route path="/" component={AppRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
