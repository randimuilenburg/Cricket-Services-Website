import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RequestForm = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  // const [isValidDate, setIsValidDate] = useState(false);
  // const [isValidTime, isValidTime] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  // Helper Functions:

  // Validating Email Address:
  const validateField = (e) => {
    let fieldText = e.target.value;
    let fieldId = e.target.id;
    // console.log("testing!");
    // console.log(fieldText);
    // console.log(fieldId);
    switch (fieldId) {
      case "formBasicEmail":
        validateEmail(fieldText);
        break;
    }
    return true;
  };

  // UTIL?

  const validateEmail = (fieldText) => {
    if (fieldText.includes("@", ".com", ".net")) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  // Submit Button Alert
  const onClick = () => {
    return alert("Thank you! We will respond within 48 hours.");
  };

  return (
    <div className="bookingForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            isInvalid={isValidEmail}
            onBlur={(e) => {
              validateField(e);
            }}
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
export default RequestForm;
