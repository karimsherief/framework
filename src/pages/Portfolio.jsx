import { useState } from "react";
import { Carousel, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import PortfolioImages from "../constants/Portfolio";
export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="portfolio py-5">
      <div className="special-title mb-5">
        <h1>portfolio</h1>
        <div>
          <FaStar />
        </div>
      </div>
      <Container>
        <Row className="g-4">
          {PortfolioImages.map((image, i) => (
            <Col md={6} lg={4} key={i}>
              <div
                className="portfolio__image"
                onClick={() => {
                  handleShow();
                  setIndex(i);
                }}
              >
                <Image
                  src={image}
                  alt="portfolio"
                  className="w-100 rounded-3"
                  loading="lazy"
                />
                <div className="portfolio__overlay rounded-3">
                  <FaMagnifyingGlass />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} size="md" centered>
        <Modal.Body className="p-0">
          <Carousel
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
            fade
          >
            {PortfolioImages.map((image, i) => (
              <Carousel.Item key={i}>
                <Image src={image} alt="portfolio" className="w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  );
}
