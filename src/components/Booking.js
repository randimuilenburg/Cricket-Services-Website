import { Button, Row, Col } from "react-bootstrap";
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
  return <h1 className="calendarHead">Book Appointment</h1>;
};

// Calendar
const ApptCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      {/* <h1 className="text-center">Book an Appointment</h1> */}
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
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
