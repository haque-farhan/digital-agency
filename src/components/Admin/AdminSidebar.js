import React, { Component, Fragment } from "react";
import "../../assests/custom.css";
import avatar from "./../../assests/img/../avatar.jpg";
import test from "./../../assests/img/spyder-logo.png";
import { Button, Collapse, Nav, Navbar, NavItem, Media } from "reactstrap";
import { Route, Switch, withRouter, Link, NavLink } from "react-router-dom";
import Feed from "./Pages/Feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Dashboard from "./Pages/Dashboard";

const AdminSidebar = () => {
  return (
    <div className="sidebar is-open">
      <div className="sidebar-header">
        <Media className="d-flex align-items-center p-3 sidebar-top">
          <Media left href="#">
            <img src={avatar} className="img-sidebar rounded-circle" />
          </Media>
          <Media className="ml-2" body>
            <Media className="mb-0 h5" heading>
              Linda Miller
            </Media>
            <small>Front-end Developer </small>
          </Media>
        </Media>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink className="nav-link" to={"/admin/dashboard"}>
              <FontAwesomeIcon className="mr-3 fa-1x" icon="home" />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to={"/admin/travel"}>
              <FontAwesomeIcon className="mr-3 fa-1x" icon="meteor" />
              Travel Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to={"/admin/feed"}>
              <FontAwesomeIcon className="mr-3 fa-1x" icon="meteor" />
              Feed
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to={"!#"}>
              <FontAwesomeIcon className="mr-3 fa-1x" icon="lock" />
              Authentication
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to={"!#"}>
              <FontAwesomeIcon className="mr-3 fa-1x" icon="envelope-open" />
              Email
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to={"!#"}>
              <FontAwesomeIcon className="mr-3 fa-1x" icon="poll" />
              Widget
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to={"!#"}>
              <FontAwesomeIcon className="mr-3 fa-1x" icon="copy" />
              Extended
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
