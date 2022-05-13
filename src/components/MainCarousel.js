import { render } from "@testing-library/react";
import React, { component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

const CricketSlides = () => {
  return (
    <div class="carousel">
      {/* <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="2"></Col> */}
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricketresized1.jpg")}
            alt="Cricket on the balcony"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricketresized2.jpg")}
            alt="Cricket with his toy"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricketresized3.jpg")}
            alt="Smiling Cricket"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricketresized4.jpg")}
            alt="Cricket in the sun"
          />
        </Carousel.Item>{" "}
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricketresized5.jpg")}
            alt="Sleeping Cricket"
          />
        </Carousel.Item>{" "}
      </Carousel>
      {/* </Row> */}
    </div>
  );
};

export default CricketSlides;
