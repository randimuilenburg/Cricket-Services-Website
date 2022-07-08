import { useState } from "react";
import { Form, Button } from "react-bootstrap";

// 0 = fresh, 1 = invalid, 2 = valid

const RequestForm = () => {
  const [isInvalidEmail, setIsInvalidEmail] = useState(0);
  const [isInvalidStartDate, setIsInvalidStartDate] = useState(0);
  const [isInvalidStartTime, setIsInvalidStartTime] = useState(0);
  const [isInvalidEndDate, setIsInvalidEndDate] = useState(0);
  const [isInvalidEndTime, setIsInvalidEndTime] = useState(0);
  const [isAllValid, setIsAllValid] = useState(0);

  // Helper Functions:

  // Validating Input Fields:
  const validateField = (e) => {
    let fieldValue = e.target.value;
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
    }
  };

  // Validating Email:
  const validateEmail = (fieldValue) => {
    if (fieldValue.includes("@" && ".com", ".net")) {
      setIsInvalidEmail(2);
    } else {
      setIsInvalidEmail(1);
    }
  };

  // Validating Start Date:
  const validateStartDate = (fieldStartDate) => {
    if (fieldStartDate == undefined || fieldStartDate.trim() == "") {
      setIsInvalidStartDate(1);
    } else {
      setIsInvalidStartDate(2);
    }
  };

  // Validating End Date:
  const validateEndDate = (fieldEndDate) => {
    if (fieldEndDate == undefined || fieldEndDate.trim() == "") {
      setIsInvalidEndDate(1);
    } else {
      setIsInvalidEndDate(2);
    }
  };

  // Validating Start Time:
  const validateStartTime = (fieldStartTime) => {
    if (fieldStartTime == "") {
      setIsInvalidStartTime(1);
    } else {
      setIsInvalidStartTime(2);
    }
  };

  // Validating End Time:
  const validateEndTime = (fieldEndTime) => {
    if (fieldEndTime == "") {
      setIsInvalidEndTime(1);
    } else {
      setIsInvalidEndTime(2);
    }
  };

  const validateAllFields = (checkboxIsChecked) => {
    console.log(checkboxIsChecked);
    if (
      isInvalidEmail === 2 &&
      isInvalidStartDate === 2 &&
      isInvalidStartTime === 2 &&
      isInvalidEndDate === 2 &&
      isInvalidEndTime === 2
    ) {
      if (checkboxIsChecked) {
        setIsAllValid(2);
      } else {
        setIsAllValid(1);
      }
    } else {
      setIsAllValid(1);
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
            isInvalid={isInvalidEmail == 1}
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
            isInvalid={isInvalidStartDate == 1}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStartTime">
          <Form.Label>Enter start time</Form.Label>
          <Form.Control
            type="time"
            isInvalid={isInvalidStartTime == 1}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEndDate">
          <Form.Label>Select end date</Form.Label>
          <Form.Control
            type="date"
            isInvalid={isInvalidEndDate == 1}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <h6>
          Please select the same date as your start date if it is a single day
          event.
        </h6>
        <Form.Group className="mb-3" controlId="formBasicEndTime">
          <Form.Label>Enter end time</Form.Label>
          <Form.Control
            type="time"
            isInvalid={isInvalidEndTime == 1}
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
              validateAllFields(e.target.checked);
            }}
          />
        </Form.Group>
        <Button
          disabled={isAllValid !== 2}
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
