import React, { useState, useEffect, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import navbarBrandLogo from "../../assests/img/spyder-logo.png";
import help from "../../assests/img/help.png";

import { NavLink } from "react-router-dom";

const TopNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBarTitle, setNavBarTitle] = useState("navTitle");
  const [navbarBack, setNavbarBack] = useState("navBackground");
  const [navBarItem, setNavBarItem] = useState("navItem");

  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setNavBarItem("navItemScroll");
        setNavBarTitle("navTitleScroll");
        setNavbarBack("navBackgroundScroll");
      } else if (window.scrollY < 100) {
        setNavBarItem("navItem");
        setNavBarTitle("navBarTitle");
        setNavbarBack("navBackground");
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <title>{props.title}</title>
      <Navbar expand="md" fixed="top" className={navbarBack}>
        <NavbarBrand to="/" className="navbarTitle">
          <img src={navbarBrandLogo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navbar-theme">
          <Nav></Nav>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-3">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/products"
              >
                Products
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/login"
              >
                Login
              </NavLink>
            </NavItem>
            <NavbarText onClick={modalToggle} className="px-3 cursor-pointer">
              Help
            </NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
      <Modal isOpen={modal} toggle={modalToggle} className="">
        <ModalHeader toggle={modalToggle}>How can we help?</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="5">
              <img src={help} className="img-fluid" />
            </Col>
            <Col md="7" className="text-center">
              <h5>we are ready to help you</h5>
              <p>Email us: Farhanhaque.lu@gmail.com</p>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={modalToggle}>
            Do Something
          </Button>{" "} */}
          <Button color="secondary" onClick={modalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default TopNavigation;
