import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Fragment>
      <Container className="py-3">
        <Row>
          <Col md="12" className="text-center">
            <p>Thank you for creating with Me | 2020 © Farhan </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Footer;
