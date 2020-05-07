import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImage from "../../assests/img/about/about.jpg";

const AboutUs = () => {
  return (
    <Fragment>
      {/* <div className="border-top"></div> */}
      <Container>
        <Row className="align-items-center">
          <Col md="5">
            <h1 className="black-color font-alt">
              Get this Bootstrap landing page for on Sharebootstrap.com ..
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md="7" className="text-right">
            <img className="imgFluid py-5" src={aboutImage} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AboutUs;
