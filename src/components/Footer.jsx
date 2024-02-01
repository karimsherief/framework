import { Col, Container, Row, Stack } from "react-bootstrap";
import { FaGlobe, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="text-center text-white ">
      <div className="py-5 footer__contact ">
        <Container>
          <Row className="justify-content-between" xs={1} md={2} lg={3}>
            <Col>
              <h3>LOCATION</h3>
              <ul className="list-unstyled">
                <li>2215 John Daniel Drive</li>
                <li>Clark, MO 65243</li>
              </ul>
            </Col>
            <Col>
              <h3>AROUND THE WEB</h3>
              <Stack
                as="ul"
                className="justify-content-center list-unstyled"
                direction="horizontal"
                gap={3}
              >
                <li className="footer__social__links__icon">
                  <FaFacebookF />
                </li>
                <li className="footer__social__links__icon">
                  <FaLinkedinIn />
                </li>
                <li className="footer__social__links__icon">
                  <FaTwitter />
                </li>
                <li className="footer__social__links__icon">
                  <FaGlobe />
                </li>
              </Stack>
            </Col>
            <Col>
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 shadow-lg">
        <p className="m-0">Copyright © 2024</p>
      </div>
    </footer>
  );
}
