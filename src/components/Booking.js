import { Button, Row, Col, Form } from "react-bootstrap";
import Calendar from "react-calendar";
import { useState } from "react";
import "../App.css";
import "react-calendar/dist/Calendar.css";

// import { render } from "@testing-library/react";

const BookingPage = () => {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="9">
          {BookingHeader()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="5">
          {BookingParagraph()}
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="6">
          {CalendarHeader()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="6">
          <div id="animate" />
          {ApptCalendar()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="6">
          {AvailabilityKey()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="8">
          {RequestForm()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs lg="8">
          {BusinessCricket()}
        </Col>
      </Row>
    </div>
  );
};

// Helper Functions:

// Booking Header
const BookingHeader = () => {
  return (
    <div>
      <h1 className="bookingHead">Want to hire Cricket for your next event?</h1>
    </div>
  );
};

// Booking Paragraph
const BookingParagraph = () => {
  return (
    <p className="bookingPara">
      He's the perfect addition for your next birthday party, graduation, or
      wedding. He's cute, very soft, and full of personality. He'll be happy to
      play with the kids, pose for pictures, and be a striking conversation
      piece. He's very professional.
    </p>
  );
};

// Calendar Header
const CalendarHeader = () => {
  return <h1 className="calendarHead">Cricket's Availability</h1>;
};

// Calendar
const ApptCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} selectRange={true} />
      </div>
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Today's date:</span> {date.toDateString()}
        </p>
      )}
    </div>
  );
};

// Pricing Calendar Key
const AvailabilityKey = () => {
  return (
    <div className="bookingKey">
      <h6>Pricing</h6>
      <h6>Black: $30 per hour</h6>
      <h6>Red: $50 per hour</h6>
      <h6>Discounted rates for multi-day events are available.</h6>
    </div>
  );
};

// Request Booking Form
const RequestForm = () => {
  return (
    <div className="bookingForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
          <Form.Text className="text-muted">
            Your email will never be shared with anyone else. We will only use
            it to respond to you.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Select start date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTime">
          <Form.Label>Enter start time</Form.Label>
          <Form.Control type="time" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Select end date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <h6>
          Please select the same date as your start date if it is a single day
          event.
        </h6>
        <Form.Group className="mb-3" controlId="formBasicTime">
          <Form.Label>Enter end time</Form.Label>
          <Form.Control type="time" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I acknowledge that Cricket is a very busy boy and may not be available for my preferred date(s)."
          />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={onClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

// Submit Button Alert
const onClick = () => {
  return alert("Thank you! We will respond within 48 hours.");
};

// Cricket Image
const BusinessCricket = () => {
  return (
    <div>
      <img
        className="bookingCricketImage"
        src={require("../photos/CricketBooking.jpg")}
        alt="Businessman Cricket"
      />
    </div>
  );
};

export default BookingPage;
