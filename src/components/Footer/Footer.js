import React, { Fragment } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import product3 from "./../../assests/img/product/3.jpg";

const Footer = () => {
  return (
    <Fragment>
      <Row className="bg-footer p-5 m-0 mt-5">
        {/* <Col md="12">
          <Card inverse>
            <CardImg width="100%" src={product3} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col> */}
        <Col md="12">
          <Row className="p-4">
            <Col md="6">
              <Container>
                <h2>Spyder</h2>
                <small>
                  Where design connects with excellence. Webpixels attempts to
                  bring the best development experience to designers and
                  developers by offering the tools needed for having a quick and
                  solid start in most web projects.
                </small>
              </Container>
            </Col>
            <Col md="2">
              <Container>
                <h6 className="mb-3">Services</h6>
                <ul className="list-unstyled mb-6 mb-md-4 mb-lg-0">
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      Page Builder
                    </a>
                  </li>
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      UI Kit
                    </a>
                  </li>
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      Styleguide
                    </a>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col md="2">
              <Container>
                <h6 className="mb-3">About</h6>
                <ul className="list-unstyled mb-6 mb-md-4 mb-lg-0">
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a class="text-500 text-decoration-none" href="#!">
                      Careers
                    </a>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col md="2">
              <Container>
                <h6 className="mb-3">Company</h6>
                <ul className="list-unstyled mb-6 mb-md-4 mb-lg-0">
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      Community
                    </a>
                  </li>
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className="text-500 text-decoration-none" href="#!">
                      Support
                    </a>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="bg-footer py-3 m-0 ">
        <Col md="12" className="text-center">
          <div className="border-footer-top"></div>
        </Col>
      </Row>
      <Row className="bg-footer py-3 m-0 ">
        <Col md="12" className="text-center">
          <Container>
            <p className="mb-2">All rights reserved. © Ahsanul Haque Farhan</p>
            <small className="mb-3">
              When you visit or interact with our sites, services or tools, we
              or our authorised service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </small>
          </Container>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Footer;
