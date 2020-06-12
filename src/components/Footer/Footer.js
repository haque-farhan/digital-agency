import React, { Fragment } from "react";
import { Container, ListGroup, ListGroupItem, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Fragment>
      <Row className="bg-footer p-5 m-0 mt-5">
        <Col md="12">
          <Row>
            <Col md="4">
              <Container>
                <h2>Spyder</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing esed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna. At
                  vero eos et accusam et justo duo dolores et ea rebum.
                </p>
              </Container>
            </Col>
            <Col md="4">
              <Container>
                <h2>Services</h2>
                <ListGroup>
                  <ListGroupItem className="text-dark font-weight-bold">
                    Website Design
                  </ListGroupItem>
                  <ListGroupItem className="text-dark font-weight-bold">
                    Website Maintanance
                  </ListGroupItem>
                  <ListGroupItem className="text-dark font-weight-bold">
                    Software Design
                  </ListGroupItem>
                  <ListGroupItem className="text-dark font-weight-bold">
                    Graphics Design
                  </ListGroupItem>
                </ListGroup>
              </Container>
            </Col>
            <Col md="4">
              <Container>
                <h2>Contact Us</h2>
                <p className="mb-0">
                  301 The Greenhouse, Custard Factory, London, E2 8DY.
                </p>
                <p className="mb-0">
                  <strong>Email: </strong>
                  information@email.com
                </p>
                <p>
                  <strong>Mobile: </strong>
                  +88 1710212329
                </p>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Row className="bg-footer">
        <Col md="12" className="text-center">
          <p>Thank you for creating with Me | 2020 © Farhan </p>
        </Col>
      </Row> */}
      {/* <Container className="py-3 bg-footer">
        <Row></Row>
      </Container> */}
    </Fragment>
  );
};

export default Footer;
