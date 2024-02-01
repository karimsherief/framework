import { Container, Image, Stack } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
export default function Home() {
  return (
    <section className="home">
      <Container className="h-100">
        <Stack
          className="h-100 align-items-center justify-content-center"
          gap={3}
        >
          <Image
            src="images/avatar.svg"
            className="home__image"
            roundedCircle
            alt="avatar"
          />
          <div className="special-title mt-3">
            <h1>start Framework</h1>
            <div>
              <FaStar />
            </div>
          </div>
          <p className="text-center">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </Stack>
      </Container>
    </section>
  );
}
