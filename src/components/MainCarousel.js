import { render } from "@testing-library/react";
import React, { component } from "react";
import { Carousel } from "react-bootstrap";

const CricketSlides = () => {
  return (
    // [IGNORE, attempted but didn't work, will ask why]
    // <div id="myCarousel" class="carousel container slide">
    //   <div class="carousel-inner">
    //     <div class="active item one"></div>
    //     <div class="item two"></div>
    //     <div class="item three"></div>
    //   </div>
    //   <script type="text/javascript">
    //     $(document).ready(function(){" "}
    //     {`$(".carousel").carousel({ interval: 1000 })`});
    //   </script>
    // </div>
    // [THIS ONE WORKS BUT NOT AS BACKGROUND]
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
