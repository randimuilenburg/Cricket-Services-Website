import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RequestForm = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidDate, setIsValidDate] = useState(false);
  const [isValidTime, setIsValidTime] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Research UTIL?

  // Helper Functions:

  // Validating Input Fields:
  const validateField = (e) => {
    let fieldValue = e.target.value;
    console.log(fieldValue);
    let fieldId = e.target.id;
    switch (fieldId) {
      case "formBasicEmail":
        validateEmail(fieldValue);
        break;
      case "formBasicDate":
        validateDate(fieldValue);
        break;
      case "formBasicTime":
        validateTime(fieldValue);
        break;
      case "formBasicCheckbox":
        validateCheckbox(fieldValue);
        break;
    }
    return true;
  };

  // Validating Email:
  const validateEmail = (fieldValue) => {
    if (fieldValue.includes("@", ".com", ".net")) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  // Validating Selected Dates:
  const validateDate = (fieldDate) => {
    console.log(fieldDate.type);
    if (fieldDate == undefined) {
      setIsValidDate(false);
    } else {
      setIsValidDate(true);
    }
  };

  // Validating Selected Times:
  const validateTime = (fieldTime) => {
    // console.log(fieldTime.type);
    if (fieldTime == undefined) {
      setIsValidTime(false);
    } else {
      setIsValidTime(true);
    }
  };

  // Validating Checkbox:
  const validateCheckbox = (fieldCheckbox) => {
    // console.log("help");
    if (fieldCheckbox == fieldCheckbox.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  // Validate Form:
  // Button should be conditionally selectable if all "isValid" are valid

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
          <Form.Control
            type="date"
            isInvalid={isValidDate}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTime">
          <Form.Label>Enter start time</Form.Label>
          <Form.Control
            type="time"
            isInvalid={isValidTime}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Select end date</Form.Label>
          <Form.Control
            type="date"
            isInvalid={isValidDate}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <h6>
          Please select the same date as your start date if it is a single day
          event.
        </h6>
        <Form.Group className="mb-3" controlId="formBasicTime">
          <Form.Label>Enter end time</Form.Label>
          <Form.Control
            type="time"
            isInvalid={isValidTime}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I acknowledge that Cricket is a very busy boy and may not be available for my preferred date(s)."
            // isInvalid={isChecked}
            onClick={(e) => {
              validateCheckbox(e);
            }}
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
