import React, { Fragment } from "react";
import "../../assests/custom.css";
import { Row, Container, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBanner = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="row d-flex align-items-center justify-content-center text-center">
          <Col md="10">
            <h1>Business Goals Achieved with Design</h1>
            <h4 className="mt-3 mb-3">
              Join over 100,000 people who get our Hints &amp; Tips email
              newsletter.
            </h4>
            <p>
              <a href="#" className="btn btn-lg btnGradient">
                <FontAwesomeIcon className="mr-2 fa-1x" icon="coffee" />
                Signup for trial
              </a>
            </p>
            <p>
              <small>🔥 1241 signed up for the demo in the last month </small>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TopBanner;
