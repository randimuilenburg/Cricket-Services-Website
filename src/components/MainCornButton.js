import { render } from "@testing-library/react";
import React, { component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../App.css";

const CornEmojis = () => {
  return (
    <Row>
      <Col></Col>
      <Col></Col>
      <Col xs lg="4">
        <Button className="emojiButton" variant="outline-info" size="sm">
          his FAVORITE things
        </Button>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default CornEmojis;
