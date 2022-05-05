import { render } from "@testing-library/react";
import React, { component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../App.css";

const CornEmojis = ({ onClick }) => {
  // <link href="https://fonts.googleapis.com/css?family=Oswald:600,700" rel="stylesheet">
  <div id="all">
    <div id="container">
      <div id="animate"></div>
    </div>
  </div>;

  return (
    <Row>
      <Col></Col>
      <Col></Col>
      <Col xs lg="4">
        <Button
          className="emojiButton"
          variant="outline-info"
          size="sm"
          onClick={onClick}
        >
          his FAVORITE things
        </Button>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default CornEmojis;
