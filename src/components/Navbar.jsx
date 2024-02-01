import { useEffect, useRef, useState } from "react";
import { Navbar as NavbarBS, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const buttonRef = useRef();
  const menuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(window.scrollY >= 60);
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      if (menuRef.current.classList.contains("show")) {
        buttonRef.current.click();
      }
    }
  }, [pathname]);

  return (
    <NavbarBS
      expand="md"
      data-bs-theme="dark"
      className={`${isScroll ? "py-2" : "py-4"}`}
      fixed="top"
    >
      <Container>
        <NavbarBS.Brand as={NavLink} to="/" className="fs-3 fw-bold">
          &lt;Framework/&gt;
        </NavbarBS.Brand>
        <NavbarBS.Toggle
          aria-controls="basic-navbar-nav"
          className="shadow-none border-0"
          ref={buttonRef}
        />
        <NavbarBS.Collapse className="justify-content-end" ref={menuRef}>
          <Nav className="gap-2 mt-3 mt-md-0">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}
