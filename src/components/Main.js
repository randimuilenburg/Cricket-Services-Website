import { Row, Col } from "react-bootstrap";
import "../App.css";
import MainEmojiButton from "./MainEmojiButton";
import MainCarousel from "./MainCarousel";
// import { render } from "@testing-library/react";

const mainPage = () => {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="8">
          {mainHeader()}
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="8">
          {mainSubline()}
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="4">
          <div id="animate" />
          {MainEmojiButton()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="9">
          {MainCarousel()}
        </Col>
      </Row>
    </div>
  );
};

// Helper Functions:

// Main Header:
const mainHeader = () => {
  return <h1 className="meetCricket">MEET CRICKET</h1>;
};

// Subtitle:
const mainSubline = () => {
  return (
    <div className="meetCricketSub">
      <h3>Dinosaur, woodsman, athlete, dragon:</h3>
      <h4>ready to play any role for your event's needs.</h4>
    </div>
  );
};

// Emoji Button:
// MainEmojiButton Component

// Cricket Picture Carousel:
// MainCarousel Component

export default mainPage;
