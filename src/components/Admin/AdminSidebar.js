import React, { Component, Fragment } from "react";
import "../../assests/custom.css";
import { Button, Collapse, Nav, Navbar, NavItem } from "reactstrap";
import { Route, Switch, withRouter, Link, NavLink } from "react-router-dom";
import Feed from "./Pages/Feed";
import Dashboard from "./Pages/Dashboard";

const AdminSidebar = () => {
  return (
    <div className="sidebar is-open">
      <div className="sidebar-header">
        <h3>Spyder</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink className="nav-link" to={"/admin/feed"}>
              Feed
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to={"/admin/dashboard"}>
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
