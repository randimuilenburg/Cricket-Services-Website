import React, { component } from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    // <div class="Row"
    // <div class="col-lg-4 col-centered">
    <Row>
      <Col></Col>
      <Col></Col>
      <Col xs lg="6">
        <h1>Crick is the best! </h1>
        <h2>Want to get to know him?</h2>
        <h6>(Yes or no, it doesn't matter.)</h6>
        <h2>This is my dog, Cricket!</h2>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default Header;
