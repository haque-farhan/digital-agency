import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import product1 from "./../../assests/img/product/1.jpg";
import product2 from "./../../assests/img/product/2.jpg";
import product3 from "./../../assests/img/product/3.jpg";
import TopNavigation from "../Navbar/TopNavigation";
import PageTop from "../PageTop/PageTop";

const Ourproduct = () => {
  return (
    <Fragment>
      <TopNavigation title="Digital Products" />
      <PageTop pageTitle="Digital Products" />
      <section className="py-5">
        <Container>
          <Row className="align-items-center text-center p-4 py-5">
            <Col md="4">
              <Card className="productCard">
                <CardImg
                  className="productCardShadow"
                  top
                  width="100%"
                  src={product1}
                  alt="Card image cap"
                />
                <CardBody>
                  <h2>Design</h2>
                  <CardText>
                    A digital product agency can maintain all the visual and
                    experience process (UI/UX design), apart from, art direction
                    and visual design.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="productCard">
                <CardImg
                  top
                  className="productCardShadow"
                  width="100%"
                  src={product2}
                  alt="Card image cap"
                />
                <CardBody>
                  <h2>Consulting</h2>
                  <CardText>
                    A product agency can give you guidance with its technical
                    proficiency and overall knowledge when it’s not enough
                    building,promoting a digital product
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="productCard">
                <CardImg
                  top
                  className="productCardShadow"
                  width="100%"
                  src={product3}
                  alt="Card image cap"
                />
                <CardBody>
                  <h2>Strategy</h2>
                  <CardText>
                    Concept creation, planning, development, release, marketing,
                    maintenance, update, implementation. In short, entire
                    practices for the digital product.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Ourproduct;
