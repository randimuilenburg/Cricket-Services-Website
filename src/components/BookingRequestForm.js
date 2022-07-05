import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RequestForm = () => {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidStartDate, setIsInvalidStartDate] = useState(false);
  const [isInvalidStartTime, setIsInvalidStartTime] = useState(false);
  const [isInvalidEndDate, setIsInvalidEndDate] = useState(false);
  const [isInvalidEndTime, setIsInvalidEndTime] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isAllValid, setIsAllValid] = useState(false);

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
      case "formBasicStartDate":
        validateStartDate(fieldValue);
        break;
      case "formBasicStartTime":
        validateStartTime(fieldValue);
        break;
      case "formBasicEndDate":
        validateEndDate(fieldValue);
        break;
      case "formBasicEndTime":
        validateEndTime(fieldValue);
        break;
      case "formBasicCheckbox":
        validateCheckbox(e.target.checked);
        break;
    }
    validateAllFields();
    return true;
  };

  // Validating Email:
  const validateEmail = (fieldValue) => {
    if (fieldValue.includes("@" && ".com", ".net")) {
      setIsInvalidEmail(false);
    } else {
      setIsInvalidEmail(true);
    }
  };

  // Validating Start Date:
  const validateStartDate = (fieldStartDate) => {
    if (fieldStartDate == undefined || fieldStartDate.trim() == "") {
      setIsInvalidStartDate(true);
    } else {
      setIsInvalidStartDate(false);
    }
  };

  // Validating End Date:
  const validateEndDate = (fieldEndDate) => {
    if (fieldEndDate == undefined || fieldEndDate.trim() == "") {
      setIsInvalidEndDate(true);
    } else {
      setIsInvalidEndDate(false);
    }
  };

  // Validating Start Time:
  const validateStartTime = (fieldStartTime) => {
    if (fieldStartTime == undefined) {
      setIsInvalidStartTime(false);
    } else {
      setIsInvalidStartTime(true);
    }
  };

  // Validating End Time:
  const validateEndTime = (fieldEndTime) => {
    if (fieldEndTime == undefined) {
      setIsInvalidEndTime(false);
    } else {
      setIsInvalidEndTime(true);
    }
  };

  // Validating Checkbox:
  const validateCheckbox = (isChecked) => {
    console.log("help");
    console.log(isChecked);
    if (isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  // Validate Form:
  const validateAllFields = () => {
    console.log("scream");
    if (
      isInvalidEmail == false &&
      isInvalidStartDate == false &&
      isInvalidStartTime == false &&
      isInvalidEndDate == false &&
      isInvalidEndTime == false &&
      isChecked == true
    ) {
      setIsAllValid(true);
    } else {
      setIsAllValid(false);
    }
    console.log(isAllValid);
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
            isInvalid={isInvalidEmail}
            onBlur={(e) => {
              validateField(e);
            }}
          />
          <Form.Text className="text-muted">
            Your email will never be shared with anyone else. We will only use
            it to respond to you.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStartDate">
          <Form.Label>Select start date</Form.Label>
          <Form.Control
            type="date"
            isInvalid={isInvalidStartDate}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStartTime">
          <Form.Label>Enter start time</Form.Label>
          <Form.Control
            type="time"
            isInvalid={isInvalidStartTime}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEndDate">
          <Form.Label>Select end date</Form.Label>
          <Form.Control
            type="date"
            isInvalid={isInvalidEndDate}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <h6>
          Please select the same date as your start date if it is a single day
          event.
        </h6>
        <Form.Group className="mb-3" controlId="formBasicStartTime">
          <Form.Label>Enter end time</Form.Label>
          <Form.Control
            type="time"
            isInvalid={isInvalidEndTime}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I acknowledge that Cricket is a very busy boy and may not be available for my preferred date(s)."
            onClick={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Button
          disabled={!isAllValid}
          controlId="submitButton"
          variant="dark"
          type="submit"
          onClick={onClick}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default RequestForm;
