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
} from "reactstrap";

const Billing = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md="12" className="text-center py-5">
            <p>Pricing</p>
            <h2>No additional costs. Pay for what you use.</h2>
          </Col>
          <CardDeck>
            <Card className="text-center">
              <CardBody>
                <CardTitle> Starter package</CardTitle>
                <h3 className="display-3 font-weight-bold">$18</h3>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button outline color="primary">
                  Start Free Trial
                </Button>
                <CardFooter className="bg-white border-0 mt-2">
                  <Badge href="#" color="primary" className="p-1">
                    Licensed for 10 projects
                  </Badge>
                </CardFooter>
              </CardBody>
            </Card>
            <Card className="text-center">
              <CardBody>
                <CardTitle> Ultimate package</CardTitle>
                <h3 className="display-3 font-weight-bold">$39</h3>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button color="primary">Start Free Trial</Button>
                <CardFooter className="bg-white border-0 mt-2">
                  <Badge href="#" color="primary" className="p-1">
                    Unlimited usage
                  </Badge>
                </CardFooter>
              </CardBody>
            </Card>
            <Card className="text-center">
              <CardBody>
                <CardTitle> Premium package</CardTitle>
                <h3 className="display-3 font-weight-bold">$26</h3>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button outline color="primary">
                  Start Free Trial
                </Button>
                <CardFooter className="bg-white border-0 mt-2">
                  <Badge href="#" color="primary" className="p-1">
                    Licensed for 50 projects
                  </Badge>
                </CardFooter>
              </CardBody>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Billing;
