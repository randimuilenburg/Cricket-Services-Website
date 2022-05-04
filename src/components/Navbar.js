import { render } from "@testing-library/react";
import React, { component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    // <Button>hi</Button>
    // <Nav className="navbar navbar-light"></Nav>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#main">Navigation:</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Link to="/Main">Main</Link> */}
          <Nav.Link href="/main">Main</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>

          <Nav.Link href="/booking">Booking</Nav.Link>
          {/*  */}
          <Nav.Link href="/donation">Donate a Treat</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;

// const Navigation () => {
// return (
//   <>
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//     <br />
//     <Navbar bg="primary" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>

//     <br />
//     <Navbar bg="light" variant="light">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   </>
// )};
