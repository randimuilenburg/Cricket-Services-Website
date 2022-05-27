import { Row, Col } from "react-bootstrap";

const AboutCricket = () => {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="2"></Col>
        <p className="aboutParagraphs">
          There are some things you should know about Cricket.
        </p>
      </Row>
      <img
        className="aboutCricketImages"
        src={require("../photos/CricketAbout1.jpg")}
        alt="Baby Cricket"
        // onMouseEnter={() => showHearts}
        // onMouseLeave={() => null}
      />
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="2"></Col>
        <p className="aboutParagraphs">
          Cricket was born on a reservation in Texas where he, his mom, and his
          siblings were semi-feral. His family was rescued by Lifeline Puppy
          Rescue and adopted out. That's when we came into his life!
        </p>
      </Row>
      <img
        className="aboutCricketImages"
        src={require("../photos/CricketAbout2.jpg")}
        alt="Baby Cricket with a Treat"
      />
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="2"></Col>
        <p className="aboutParagraphs">
          After a DNA test, we learned that he's part Carolina Dog and part
          Akita. He LOVES meeting other dogs and making new friends. It's his
          favorite thing in the world, maybe even better than french fries.
        </p>
      </Row>
      <img
        className="aboutCricketImages"
        src={require("../photos/CricketAbout3.jpg")}
        alt="Puppy Cricket"
      />
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="2"></Col>
        <p className="aboutParagraphs">
          His favorite things to do: go on long walks with lots of sniffing,
          play in the snow, take a nap in the sunshine, go to doggie day camp,
          play with his puzzle toys, squeak toys incessantly, open his monthly
          Bark Box.
        </p>
      </Row>
      <img
        className="aboutCricketImages"
        src={require("../photos/CricketAbout4.jpg")}
        alt="Teen Cricket"
      />
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="2"></Col>
        <p className="aboutParagraphs">
          His least favorite things to do: take a bath, have his teeth brushed,
          meet new people, go back inside after a long walk, go outside on windy
          days, go to the vet.
        </p>
      </Row>
      <img
        className="aboutCricketImages"
        src={require("../photos/CricketAbout5.jpg")}
        alt="Napping Cricket"
      />
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="2"></Col>
        <p className="aboutParagraphs">
          Favorite snacks: carrots, frozen peanut butter, blueberries, apples,
          bell peppers, kale, salmon skins, bison bully sticks, lamb ears,
          cucumber, goat's milk, pup cups from Starbucks.
        </p>
      </Row>
      <img
        className="aboutCricketImages"
        src={require("../photos/CricketAbout6.jpg")}
        alt="Adult Cricket"
      />
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="2"></Col>
        <p className="aboutParagraphs">
          Least favorite snacks: bananas, strawberry, lettuce, greek yogurt,
          anything with chicken, beef, turkey, or pork.
        </p>
      </Row>
    </div>
  );
};

// const showHearts = (onMouseEnter) => {
//   console.log("pet this dog");
// };

export default AboutCricket;
