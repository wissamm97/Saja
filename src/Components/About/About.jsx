import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineChildCare, MdOutlineWaterDrop } from "react-icons/md";
import { BsLungsFill } from "react-icons/bs";
import { FaRegEye, FaChild } from "react-icons/fa";
import { GiAmbulance } from "react-icons/gi";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container
      className="text-center"
      // style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <section
        className="title"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <p>منصة سجى</p>
        <h4 style={{ textAlign: "center !import" }}>
          تابعة لصندوق الوقف الصحي لتسهيل العلاج الخيري
        </h4>
      </section>
      <Container>
        <Row>
          <Col>
            <article data-aos="fade-up" data-aos-delay="350">
              <GiAmbulance />
              <span>حالات عاجلة</span>
            </article>
          </Col>
          <Col>
            <article data-aos="zoom-in-left" data-aos-delay="350">
              <MdOutlineChildCare />
              <span>أمراض أطفال</span>
            </article>
          </Col>
          <Col>
            <article data-aos="zoom-out" data-aos-delay="350">
              <BsLungsFill />
              <span>أمراض سرطان</span>
            </article>
          </Col>
          <Col>
            <article data-aos="zoom-out-up" data-aos-delay="350">
              <FaRegEye />
              <span>أمراض عيون</span>
            </article>
          </Col>
          <Col>
            <article data-aos="zoom-in-right" data-aos-delay="350">
              <FaChild />
              <span>حالات ولادة</span>
            </article>
          </Col>
          <Col>
            <article data-aos="fade-down" data-aos-delay="350">
              <MdOutlineWaterDrop />
              <span>غسيل كلوي</span>
            </article>
          </Col>
          <div className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65.427"
              height="64.119"
              viewBox="0 0 65.427 64.119"
              className="circle"
            >
              <path
                id="Polygon_Copy_4"
                data-name="Polygon Copy 4"
                d="M20,5.774a20,20,0,0,1,20,0l5.981,3.453a20,20,0,0,1,10,17.321v6.906a20,20,0,0,1-10,17.321L40,54.226a20,20,0,0,1-20,0l-5.981-3.453a20,20,0,0,1-10-17.321V26.547a20,20,0,0,1,10-17.321Z"
                transform="matrix(-0.259, -0.966, 0.966, -0.259, 11.5, 68.802)"
                fill="#86a3b8"
              />
            </svg>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
