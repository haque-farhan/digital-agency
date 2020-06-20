import React, { useState, Fragment } from "react";
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
  Row,
  Badge,
  Col,
  Container,
} from "reactstrap";
import TopBanner from "../../Banner/TopBanner";
import Topbar from "./Topbar";
import project6 from "./../../../assests/img/project/6.jpg";
import project7 from "./../../../assests/img/project/7.jpg";
import project8 from "./../../../assests/img/project/8.jpg";

function Feed() {
  return (
    <Fragment>
      <Topbar PageTitle="Feed" />
      <section className="p-4">
        <Container>
          <Row>
            <Col md="6">
              <div className="">
                <Badge
                  className="ml-1 bg-soft-primary text-primary fs-01 py-2 font-weight-normal px-4"
                  pill
                >
                  Blogs
                </Badge>
                <h2 className="font-weight-light text-capitalize mb-0 mt-3">
                  read our latest
                  <br />
                  <strong className="text-primary">news Blogs</strong>
                </h2>
                <p className="fs-01 mt-2">
                  Our happiness is in sharing our journey and experiences with
                  you through our articles and blog posts. Feel free to check
                  them and leave your comments
                </p>
              </div>
            </Col>
            <Col md="6">
              <Row noGutters>
                <Col className="mr-3 align-self-center">
                  <img src={project8} className="img-fluid rounded" />
                </Col>
                <Col>
                  <div className="mb-4">
                    <img src={project6} className="img-fluid rounded" />
                  </div>
                  <div>
                    <img src={project7} className="img-fluid rounded" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Feed;
