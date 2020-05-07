import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ClientLists from "./ClientLists";

const Clients = () => {
  return (
    <section className="border-top border-bottom">
      <Container>
        <Row className="text-center py-3">
          {ClientLists.map((clientList, i) => (
            <Col md="2" key={i}>
              <img src={clientList.src} height="60" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Clients;
