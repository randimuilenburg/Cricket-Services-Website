import { Button, Row, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import BookingCricketImage from "./BookingCricketImage";
import BookingCalendar from "./BookingCalendar";
import BookingRequestForm from "./BookingRequestForm";
import "../App.css";
import "react-calendar/dist/Calendar.css";

const bookingPage = () => {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="9">
          {bookingHeader()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="5">
          {bookingParagraph()}
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="6">
          {calendarHeader()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="6">
          <div id="animate" />
          {BookingCalendar()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="6">
          {availabilityKey()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="8">
          {BookingRequestForm()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs lg="8">
          {BookingCricketImage()}
        </Col>
      </Row>
    </div>
  );
};

// Helper Functions:

// Booking Header
const bookingHeader = () => {
  return (
    <div>
      <h1 className="bookingHead">Want to hire Cricket for your next event?</h1>
    </div>
  );
};

// Booking Paragraph
const bookingParagraph = () => {
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
const calendarHeader = () => {
  return <h1 className="calendarHead">Cricket's Availability</h1>;
};

// Calendar:
// BookingCalendar Component

// Pricing Calendar Key
const availabilityKey = () => {
  return (
    <div className="bookingKey">
      <h6>Pricing</h6>
      <h6>Black: $30 per hour</h6>
      <h6>Red: $50 per hour</h6>
      <h6>Discounted rates for multi-day events are available.</h6>
    </div>
  );
};

// Request Booking Form:
// BookingRequestForm Component

// Cricket Image:
// BookingCricketImage Component

export default bookingPage;
