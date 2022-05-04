import { render } from "@testing-library/react";
import React, { component } from "react";
import { Carousel } from "react-bootstrap";

const CricketSlides = () => {
  return (
    <div class="carousel">
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricket1.jpg")}
            alt="Cricket on the balcony"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricket2.jpg")}
            alt="Cricket with his toy"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricket3.jpg")}
            alt="Smiling Cricket"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricket4.jpg")}
            alt="Cricket in the sun"
          />
        </Carousel.Item>
        {/* <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/cricket5.jpg")}
            alt="Sleeping Cricket"
          />
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default CricketSlides;
