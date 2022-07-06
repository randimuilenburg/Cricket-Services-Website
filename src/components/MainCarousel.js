import { Carousel } from "react-bootstrap";

const cricketSlides = () => {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/CricketMain1.jpg")}
            alt="Dinosaur Cricket"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/CricketMain2.jpg")}
            alt="Ready for Winter Cricket"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/CricketMain3.jpg")}
            alt="Athlete Cricket"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carouselCricket"
            src={require("../photos/CricketMain4.jpg")}
            alt="Dragon Cricket"
          />
        </Carousel.Item>{" "}
      </Carousel>
    </div>
  );
};

export default cricketSlides;
