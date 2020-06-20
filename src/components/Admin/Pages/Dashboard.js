import React from "react";
import Topbar from "./Topbar";
import project1 from "./../../../assests/img/project/1.jpg";
import project2 from "./../../../assests/img/project/2.jpg";
import project3 from "./../../../assests/img/project/3.jpg";
import project4 from "./../../../assests/img/project/4.jpg";

import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
  CardDeck,
  Badge,
  CardHeader,
  Media,
  CardBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tasks = [
  {
    title: "Management meeting",
    color: "soft-primary",
    time: "16 june",
  },
  {
    title: "Launchday Logo meeting",
    color: "soft-danger",
    time: "17 june",
  },
  {
    title: "Client meeting",
    color: "soft-success",
    time: "16 may",
  },
  {
    title: "Draft your card",
    color: "muted",
    time: "10 april",
  },
];

const projects = [
  {
    src: project1,
    title: "Homepage Redesign",
    subTitle: "Updated 4hr ago",
  },
  {
    src: project2,
    title: "Travels & Time",
    subTitle: "Updated 7hr ago",
  },
  {
    src: project3,
    title: "Total Working",
    subTitle: "Updated 9hr ago",
  },
  {
    src: project4,
    title: "Cycling & Share",
    subTitle: "Updated 10hr ago",
  },
];

function Dashboard() {
  return (
    <div>
      <Topbar PageTitle="Dashboard" />
      <section className="p-4">
        <Container>
          <Row>
            <Col md="3" className="pr-1">
              <Card>
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col>
                      <h6 className="text-muted">VALUE</h6>
                      <h5>
                        $2400
                        <Badge className="ml-1 badge-soft-success fs--200" pill>
                          $3.5%
                        </Badge>
                      </h5>
                    </Col>
                    <Col xs="auto">
                      <span>
                        <FontAwesomeIcon
                          className="text-muted h2"
                          icon="home"
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col md="3" className="pr-1">
              <Card>
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col>
                      <h6 className="text-muted">TOTAL HOURS</h6>
                      <h5>
                        954.3
                        <Badge
                          className="ml-1 bg-soft-primary text-primary fs--200"
                          pill
                        >
                          $3.5%
                        </Badge>
                      </h5>
                    </Col>
                    <Col xs="auto">
                      <span>
                        <FontAwesomeIcon
                          className="text-muted h2"
                          icon="meteor"
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col md="3" className="pr-1">
              <Card>
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col>
                      <h6 className="text-muted">Total Order</h6>
                      <h5>58.8k</h5>
                    </Col>
                    <Col xs="auto">
                      <span>
                        <FontAwesomeIcon
                          className="text-muted h2"
                          icon="envelope-open"
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col md="3" className="">
              <Card>
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col>
                      <h6 className="text-muted">Weekly Sales</h6>
                      <h5>52k</h5>
                    </Col>
                    <Col xs="auto">
                      <span>
                        <FontAwesomeIcon
                          className="text-muted h2"
                          icon="poll"
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="pr-0">
              <Card>
                <div className="card-header">
                  <h5>Projects</h5>
                </div>
                <div className="card-body">
                  {projects.map((project, i) => (
                    <Media key={i} className="row align-items-center ml-3 mb-4">
                      <a className="avatar avatar-s">
                        <img src={project.src} className="avatar-img rounded" />
                      </a>
                      <Media body className="ml-3">
                        <h4 className="mb-0 fs-h4">{project.title}</h4>
                        <small className="text-muted">{project.subTitle}</small>
                      </Media>
                    </Media>
                  ))}
                </div>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <div className="card-header">
                  <h5>Assigned Tasks</h5>
                </div>
                <div className="card-body p-3">
                  {tasks.map((task, i) => (
                    <Card className="mb-2" key={i}>
                      <CardBody>
                        <Row className=" align-items-center">
                          <Col>
                            <span
                              className={`border-left border-2x pl-3 border-${task.color} `}
                            ></span>
                            <span className="h6">{task.title}</span>
                          </Col>
                          <Col xs="auto" className={`text-${task.color}`}>
                            <FontAwesomeIcon className="mr-2 " icon="clock" />
                            <small className="">{task.time}</small>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Dashboard;
