import { Row, Col } from "react-bootstrap";
import AccountLogin from "./AccountLogin";

const Account = () => {
  return (
    <div className="container">
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="4">
          {accountHeader()}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs lg="4">
          {AccountLogin()}
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

// Header:
const accountHeader = () => {
  return <h4 className="accountHeader">Log in</h4>;
};

// Log in:
// AccountLogin Component

export default Account;
