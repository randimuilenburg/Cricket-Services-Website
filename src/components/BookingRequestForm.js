import { useState } from "react";
import { Form, Button } from "react-bootstrap";

// 0 = fresh page, 1 = invalid, 2 = valid

const RequestForm = () => {
  const [emailValidity, setEmailValidity] = useState(0);
  const [startDateValidity, setStartDateValidity] = useState(0);
  const [startTimeValidity, setStartTimeValidity] = useState(0);
  const [endDateValidity, setEndDateValidity] = useState(0);
  const [endTimeValidity, setEndTimeValidity] = useState(0);
  const [allFieldValidity, setAllFieldValidity] = useState(0);

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
      setEmailValidity(2);
    } else {
      setEmailValidity(1);
    }
  };

  // Validating Start Date:
  const validateStartDate = (fieldStartDate) => {
    if (fieldStartDate == undefined || fieldStartDate.trim() == "") {
      setStartDateValidity(1);
    } else {
      setStartDateValidity(2);
    }
  };

  // Validating End Date:
  const validateEndDate = (fieldEndDate) => {
    if (fieldEndDate == undefined || fieldEndDate.trim() == "") {
      setEndDateValidity(1);
    } else {
      setEndDateValidity(2);
    }
  };

  // Validating Start Time:
  const validateStartTime = (fieldStartTime) => {
    if (fieldStartTime == "") {
      setStartTimeValidity(1);
    } else {
      setStartTimeValidity(2);
    }
  };

  // Validating End Time:
  const validateEndTime = (fieldEndTime) => {
    if (fieldEndTime == "") {
      setEndTimeValidity(1);
    } else {
      setEndTimeValidity(2);
    }
  };

  const validateAllFields = (checkboxIsChecked) => {
    console.log(checkboxIsChecked);
    if (
      emailValidity === 2 &&
      startDateValidity === 2 &&
      startTimeValidity === 2 &&
      endDateValidity === 2 &&
      endTimeValidity === 2
    ) {
      if (checkboxIsChecked) {
        setAllFieldValidity(2);
      } else {
        setAllFieldValidity(1);
      }
    } else {
      setAllFieldValidity(1);
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
            isInvalid={emailValidity == 1}
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
            isInvalid={startDateValidity == 1}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStartTime">
          <Form.Label>Enter start time</Form.Label>
          <Form.Control
            type="time"
            isInvalid={startTimeValidity == 1}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEndDate">
          <Form.Label>Select end date</Form.Label>
          <Form.Control
            type="date"
            isInvalid={endDateValidity == 1}
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
            isInvalid={endTimeValidity == 1}
            onBlur={(e) => {
              validateField(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            disabled={
              !(
                emailValidity === 2 &&
                startDateValidity === 2 &&
                startTimeValidity === 2 &&
                endDateValidity === 2 &&
                endTimeValidity === 2
              )
            }
            label="I acknowledge that Cricket is a very busy boy and may not be available for my preferred date(s)."
            onClick={(e) => {
              validateAllFields(e.target.checked);
            }}
          />
        </Form.Group>
        <Button
          disabled={allFieldValidity !== 2}
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
