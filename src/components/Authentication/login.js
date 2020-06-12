import React, { Fragment } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import loginImage from "./../../assests/img/login.png";
import TopNavigation from "../Navbar/TopNavigation";
import Footer from "../Footer/Footer";

const login = () => {
  return (
    <Fragment>
      <TopNavigation title="Login" />
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col md="6">
            <img src={loginImage} className="img-fluid" />
          </Col>
          <Col md="6">
            <div className="ml-2">
              <h1>LOGIN</h1>
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleEmail" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter your email"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail" sm={2}>
                  Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                  />
                </Col>
              </FormGroup>
              <Col sm={10}>
                <Button color="primary" className="btnGradient" block>
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default login;
