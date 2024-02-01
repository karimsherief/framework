import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default function About() {
  return (
    <section className="home">
      <div className="special-title">
        <h1>about us</h1>
        <div>
          <FaStar />
        </div>
      </div>
      <Container>
        <Row xs={1} md={2} className="text-center text-md-start">
          <Col>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </Col>
          <Col>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
