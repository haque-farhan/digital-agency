import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Container } from "reactstrap";
import Feed from "./Pages/Feed";
import Dashboard from "./Pages/Dashboard";
import AdminSidebar from "./AdminSidebar";
import Travel from "./Pages/Travel";

const AdminLayouts = ({ match }) => {
  return (
    <Fragment>
      <div className="App wrapper">
        <AdminSidebar />
        <div className="content overflow-auto">
          <Switch>
            <Route
              exact
              path={`${match.url}/dashboard`}
              component={Dashboard}
            />
            <Route exact path={`${match.url}/travel`} component={Travel} />
            <Route exact path={`${match.url}/feed`} component={Feed} />
            <Route render={() => <h1>not found</h1>} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};
// AdminLayouts.propTypes = { location: PropTypes.object.isRequired };

export default AdminLayouts;
