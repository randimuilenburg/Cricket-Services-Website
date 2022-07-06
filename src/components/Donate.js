import { Row, Col } from "react-bootstrap";

const Donation = () => {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="10">
          {bookingHeader()}
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="4">
          <div id="animate" />
          {bookingSubline()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="8">
          {bookingParagraph()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="4">
          {donationImages()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="4">
          {donationUsername()}
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

// Header:
const bookingHeader = () => {
  return (
    <div>
      <h3 className="donateHeader">
        Want to help Cricket but don't need to schedule an appointment?
      </h3>
    </div>
  );
};

// Subtext:
const bookingSubline = () => {
  return (
    <div>
      <h5 className="donateSubline">Make a donation!</h5>
    </div>
  );
};

// Paragraph:
const bookingParagraph = () => {
  return (
    <div>
      <p className="donateParagraph">
        Donations go toward keeping Cricket healthy and happy. Dogs are
        expensive, especially when they're as popular and active as he is! Every
        dollar sent will go directly toward vet bills, food, treats, healthy
        chews, plush toys, puzzle toys, grooming supplies, supplements, and
        bedding.
      </p>
      <p className="donateParagraph">
        You are welcome to donate a random amount, big or small (every little
        bit helps!), or the exact price for some of his favorite things. For a
        list of top suggestions and their prices, you can email
        CricketWishlist@outlook.com. We'll respond as quickly as possible!
      </p>
      <p className="donateParagraph">
        Donations also make wonderful tips if you recently book a session with
        Cricket and loved his services! He's a dog, so he has no use for money
        by itself, but a Fluff 'n Tuff toy? That's well-earned for a job
        well-done.
      </p>
      <p className="donateParagraph">Cricket thanks you!</p>
    </div>
  );
};

// Donation Icons:
const donationImages = () => {
  return (
    <div>
      <img
        className="donationIcons"
        src={require("../photos/venmo.png")}
        alt="Venmo icon"
      />
      <img
        className="donationIcons"
        src={require("../photos/paypal.png")}
        alt="Paypal icon"
      />
    </div>
  );
};

// Donation Username:
const donationUsername = () => {
  return (
    <div>
      <h6>@DingoDogMom</h6>
    </div>
  );
};

export default Donation;
