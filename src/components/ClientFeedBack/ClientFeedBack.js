import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import poster from "./../../assests/img/client1.jpg";

const ClientFeedBack = () => {
  return (
    <Fragment>
      <div className="space-md w-90">
        <Container>
          <Row className="align-items-center bg-purple p-4">
            <Col md="6">
              <Player playsInline poster={poster}>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                <BigPlayButton position="center" />
              </Player>
              {/* <Player
                playsInline
                poster={poster}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              /> */}
            </Col>
            <Col md="6">
              <h4 className="text-white">
                Their skill and expertise in digital design and development is
                self evident. I knew the finished product would be the envy of
                our competitors. A true partnership that's taken our digital
                business to the next level.
              </h4>
              <p className="text-white text-italic mt-3">
                Shipman Northcutt – Digital Manager, dusk Australia
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ClientFeedBack;
