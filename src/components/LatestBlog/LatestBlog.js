import React from "react";
import { Container, Row, Col } from "reactstrap";
import project2 from "./../../assests/img/project/11.jpg";
import project4 from "./../../assests/img/project/4.jpg";
import project7 from "./../../assests/img/project/7.jpg";
import project9 from "./../../assests/img/project/9.jpg";

const LatestBlog = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center text-center">
          {/* <Col md="12" className="p-4">
            <h3>Who are we?</h3>
            <p>
              Bar flustered impressive manifest far crud opened inside owing
              after wasteful telling sprang coldly and spoke less clients.
            </p>
          </Col> */}
        </Row>
        <Row className="align-items-end">
          <Col md="7">
            <Row>
              <Col md="4">
                <img src={project2} className="img-fluid rounded h-100 w-100" />
              </Col>
              <Col md="8">
                <img src={project9} className="img-fluid rounded h-100 w-100" />
              </Col>
            </Row>
          </Col>
          <Col md="5">
            <p className="mb-4">
              We can make any Personal , Commercial-Website and Software at very
              short period of time. We focus on Customer needs and Choice.
              Quality work is our Business Policy ipsum dui manatee for the one
              asfers since far flustered impressive your longtails.
            </p>
            <Row>
              <Col md="6">
                <img src={project7} className="img-fluid rounded h-100 w-100" />
              </Col>
              <Col md="6">
                <img src={project4} className="img-fluid rounded h-100 w-100" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestBlog;
