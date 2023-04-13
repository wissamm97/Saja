import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
function NewCarouselr() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="./logo.jpg" alt="First slide" />
          <Carousel.Caption style={{ zIndex: "9999" }}>
            <p>#تبرعك_سجى</p>
            <a href="#"> تعرف على المزيد</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./logo.jpg" alt="First slide" />
          <Carousel.Caption style={{ zIndex: "9999" }}>
            <p>#تبرعك_سجى</p>
            <a href="#"> تعرف على المزيد</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./logo.jpg" alt="First slide" />
          <Carousel.Caption style={{ zIndex: "9999" }}>
            <p>#تبرعك_سجى</p>
            <a href="#"> تعرف على المزيد</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default NewCarouselr;
