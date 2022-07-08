// import { render } from "@testing-library/react";
import React, { component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      {" "}
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="#main">Navigation:</Navbar.Brand>{" "}
          <Nav.Link href="/main">Main</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/booking">Booking</Nav.Link>
          <Nav.Link href="/donation">Donate a Treat</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>{" "}
        </Nav>{" "}
      </Container>{" "}
    </Navbar>
  );
};

export default Navigation;
