import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Feed from "./Pages/Feed";
import Dashboard from "./Pages/Dashboard";
import AdminSidebar from "./AdminSidebar";

const AdminRoutes = () => {
  return (
    <Fragment>
      {/* <AdminSidebar />
        <Switch>
          <Route exact path={`${match.url}/dashboard`} component={Dashboard} />
          <Route exact path={`${match.url}/feed`} component={Feed} />
          <Route render={() => <h1>not found</h1>} />
        </Switch> */}
    </Fragment>
  );
};

export default withRouter(AdminRoutes);
