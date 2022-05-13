import React, { component } from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col></Col>
      <Col></Col>
      <Col xs lg="8">
        <h1 className="meetCricket">MEET CRICKET</h1>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default Header;
