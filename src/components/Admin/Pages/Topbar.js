import React from "react";
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

const Topbar = ({ PageTitle }) => {
  return (
    <div>
      <Navbar light expand="md" className="navbar-border-bottom">
        <NavbarBrand>{PageTitle}</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Topbar;
