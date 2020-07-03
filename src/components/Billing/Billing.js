import React, { Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Badge,
  CardTitle,
  CardText,
  CardDeck,
  CardFooter,
  CardBody,
  Container,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const Billing = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md="12" className="text-center py-5">
            <h1>Pricing Plans</h1>
            <p>No additional costs. Pay for what you use.</p>
          </Col>
          <Col md="4" className="text-center">
            <Card className="text-center billing-card">
              <CardBody className="align-items-center">
                <div className="pt-md-2 mb-3">
                  <h4 className="font-weight-semi-bold">Basic</h4>
                </div>
                <div className="d-flex justify-content-center pb-md-2">
                  <span className="h3">$</span>
                  <h1 className="font-weight-semi-bold mb-0">49</h1>
                </div>
                <span className="text-small text-muted mb-3">
                  Per user, per month
                </span>
                <ul className="text-center list-unstyled my-2 my-md-4">
                  <li className="py-1">
                    <span>10k Visitors/mo</span>
                  </li>
                  <li className="py-1">
                    <span>10 Funnels, 50 Pages</span>
                  </li>
                  <li className="py-1">
                    <span>Unlimited Transactions</span>
                  </li>
                  <li className="py-1">
                    <span>Analytics</span>
                  </li>
                  <li className="py-1">
                    <span>Integrations</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted text-strikethrough">
                      Audience Data
                    </span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted text-strikethrough">
                      Premium Templates
                    </span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted text-strikethrough">
                      White Labelling
                    </span>
                  </li>
                </ul>
                <Button outline color="primary">
                  Start Free Trial
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="text-center">
            <Card className="text-center billing-card shadow">
              <CardBody className="align-items-center">
                <div className="pt-md-2 mb-3">
                  <h4 className="font-weight-semi-bold">Pro</h4>
                </div>
                <div className="d-flex justify-content-center pb-md-2">
                  <span className="h3">$</span>
                  <h1 className="font-weight-semi-bold mb-0">89</h1>
                </div>
                <span className="text-small text-muted mb-3">
                  Per user, per month
                </span>
                <ul className="text-center list-unstyled my-2 my-md-4">
                  <li className="py-1">
                    <span>10k Visitors/mo</span>
                  </li>
                  <li className="py-1">
                    <span>10 Funnels, 50 Pages</span>
                  </li>
                  <li className="py-1">
                    <span>Unlimited Transactions</span>
                  </li>
                  <li className="py-1">
                    <span>Analytics</span>
                  </li>
                  <li className="py-1">
                    <span>Integrations</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted ">Audience Data</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted ">Premium Templates</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted text-strikethrough">
                      White Labelling
                    </span>
                  </li>
                </ul>
                <Button color="primary">Get Pro</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="text-center">
            <Card className="text-center billing-card">
              <CardBody className="align-items-center">
                <div className="pt-md-2 mb-3">
                  <h4 className="font-weight-semi-bold">Ultimate</h4>
                </div>
                <div className="d-flex justify-content-center pb-md-2">
                  <span className="h3">$</span>
                  <h1 className="font-weight-semi-bold mb-0">99</h1>
                </div>
                <span className="text-small text-muted mb-3">
                  Per user, per month
                </span>
                <ul className="text-center list-unstyled my-2 my-md-4">
                  <li className="py-1">
                    <span>10k Visitors/mo</span>
                  </li>
                  <li className="py-1">
                    <span>10 Funnels, 50 Pages</span>
                  </li>
                  <li className="py-1">
                    <span>Unlimited Transactions</span>
                  </li>
                  <li className="py-1">
                    <span>Analytics</span>
                  </li>
                  <li className="py-1">
                    <span>Integrations</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted">Audience Data</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted">Premium Templates</span>
                  </li>
                  <li className="py-1">
                    <span className="text-muted">White Labelling</span>
                  </li>
                </ul>
                <Button outline color="primary">
                  Get Ultimate
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Billing;
