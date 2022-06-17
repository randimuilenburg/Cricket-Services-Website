import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RequestForm = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  // this.state = {
  //   isValidEmail: false,
  //   isValidDate: false,
  //   isValidTime: false,
  //   isChecked: false,
  // };

  return (
    <div className="bookingForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            // isInvalid={true} <- use a func to determine if is valid
            isInvalid={isValidEmail}
          />
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

const validateField = (e) => {
  console.log("testing!");
  console.log(e);
  // somehow figure out what the input text is, then
  // decide if that input is valid
  return true;
};

// Submit Button Alert
const onClick = () => {
  return alert("Thank you! We will respond within 48 hours.");
};

export default RequestForm;
