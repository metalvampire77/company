import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.jpg";

function NavScrollExample() {
  return (
    <Navbar
      expand="lg"
      // className="bg-body-tertiary"
      style={{ backgroundColor: " rgb(243, 18, 35)", height: "90px" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="logo">
            <img src={logo} alt="" className="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="mt-2">
          {" "}
          {/* Added margin top here */}
          <Nav
            className="ms-auto my-2 my-lg-0 links"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="link">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="link">
              Services
            </Nav.Link>
            <Nav.Link href="#action1" className="link">
              About Us
            </Nav.Link>
            <Nav.Link href="#action2" className="link">
              Projects
            </Nav.Link>
            <Nav.Link href="#action1" className="link">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#action1">
              <button className="contactBtn">Get in Touch</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
