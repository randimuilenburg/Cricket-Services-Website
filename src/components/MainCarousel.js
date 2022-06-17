import { Carousel } from "react-bootstrap";

const cricketSlides = () => {
  return (
    <div class="carousel">
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
    </div>
  );
};

export default cricketSlides;
