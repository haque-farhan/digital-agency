import React, { Fragment } from "react";
import { Row, Badge, Col, Container, Card } from "reactstrap";
import TopBanner from "../../Banner/TopBanner";
import Topbar from "./Topbar";
import project6 from "./../../../assests/img/project/6.jpg";
import project7 from "./../../../assests/img/project/7.jpg";
import project8 from "./../../../assests/img/project/8.jpg";
import project9 from "./../../../assests/img/project/9.jpg";
import project10 from "./../../../assests/img/project/10.jpg";

const Travel = () => {
  return (
    <Fragment>
      <Topbar PageTitle="Travel" />
      <section className="p-4">
        <Container>
          <Row>
            <Col md="6">
              <div className="">
                <Badge
                  className="ml-1 bg-soft-primary text-primary fs-01 py-2 font-weight-normal px-4"
                  pill
                >
                  Travel Blogs
                </Badge>
                <h2 className="font-weight-light text-capitalize mb-0 mt-3">
                  read our latest
                  <br />
                  <strong className="text-primary">travel Blogs</strong>
                </h2>
                <p className="fs-01 mt-2">
                  San Francisco is a beautiful, eclectic city. Balancing its
                  hippy roots with its modern, techie scene, San Francisco is a
                  cool, lively, energetic city bursting with history and tons of
                  amazing food. It’s some to hippies, students, artists,
                  entrepreneurs, and sizeable immigrant communities. All of that
                  combines to create one of the best cities in the country.
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
      <section className="p-4">
        <Container fluid>
          <Row>
            <Col md="6">
              <Card>
                <Row noGutters>
                  <Col md="6">
                    <img src={project9} className="bg-holder rounded-left" />
                  </Col>
                  <Col md="6">
                    <div className="p-3">
                      <p className="font-weight-normal text-muted fs-1200 mb-1">
                        April 29, 2019
                      </p>
                      <h5>San Francisco </h5>
                      <p className="fs--200">
                        the city has a growing hostel scene so you can find
                        affordable accommodation during your visit. I’ve been
                        visiting San Francisco for a decade and have stayed in
                        dozens of hostels, hotels.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <Row noGutters>
                  <Col md="6">
                    <img src={project10} className="bg-holder rounded-left" />
                  </Col>
                  <Col md="6">
                    <div className="p-3">
                      <p className="font-weight-normal text-muted fs-1200 mb-1">
                        May 19, 2020
                      </p>
                      <h5>SAN DIEGO </h5>
                      <p className="fs--200">
                        San Diego is an underrated destination. While visitors
                        flock to San Francisco and Los Angeles, more often than
                        not San Diego gets skipped over.th incredible weather,
                        awesome beaches.It was awesome journey.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Travel;
