import React, { Component, Fragment } from "react";
import TopNavigation from "../Navbar/TopNavigation";
import { Row, Col, Container } from "reactstrap";

class PageTop extends Component {
  render() {
    return (
      <Fragment>
        <section className="hero">
          <Container>
            <Row className="row d-flex align-items-center justify-content-center text-center">
              <Col md="10">
                <h2 className="mx-2">{this.props.pageTitle}</h2>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default PageTop;
