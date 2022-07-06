import { render } from "@testing-library/react";
import React, { component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  render();
  return (
    <Navbar bg="light" variant="light">
      {" "}
      <Container>
        <Navbar.Brand href="#main">Navigation:</Navbar.Brand>{" "}
        <Nav className="me-auto">
          <Nav.Link href="/main">Main</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/booking">Booking</Nav.Link>
          <Nav.Link href="/donation">Donate a Treat</Nav.Link>
          {/* <Nav.Link href="/account">Account</Nav.Link>{" "} */}
        </Nav>{" "}
      </Container>{" "}
    </Navbar>
  );
};

export default Navigation;
