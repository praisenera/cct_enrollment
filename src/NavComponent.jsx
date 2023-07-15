// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3"
          style={{ background: "white" }}
        >
          <Container fluid>
            <Navbar.Brand>
              <img
                src={require("./img/cct_logo.jpg")}
                alt="logo"
                style={{ width: "80px" }}
              />
              Christian College of Tanauan
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link className="link" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/About">
                      About
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/About">
                      Courses
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/login">
                      Login
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/register">
                      Register
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
