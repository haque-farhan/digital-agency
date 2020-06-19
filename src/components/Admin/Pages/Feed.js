import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import TopBanner from "../../Banner/TopBanner";
import Topbar from "./Topbar";

function Feed() {
  return (
    <div>
      <Topbar PageTitle="Feed" />
    </div>
  );
}

export default Feed;
