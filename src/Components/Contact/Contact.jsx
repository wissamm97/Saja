import { Col, Container, Row } from "react-bootstrap";
import { AiFillBank, AiOutlineBank } from "react-icons/ai";
import { GiBank } from "react-icons/gi";
import { RiBankLine } from "react-icons/ri";
import "./Contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="title">
            <h4>المزيد</h4>
          </div>
          <ul className="links more">
            <div className="right">
              <li>
                <a href="">طلب شراكة</a>
              </li>
              <li>
                <a href="">سياسة الاستخدام والخصوصية</a>
              </li>
            </div>
            <div className="left">
              <li>
                <a href="">الأسئلة المتكررة</a>
              </li>
              <li>
                <a href="">تواصل مع الجمعية</a>
              </li>
            </div>
          </ul>
          <div className="icon" style={{ marginTop: "60px" }}>
            <div className="title">
              <h4>شركاؤنا</h4>
            </div>
            <div className="iconsbank">
              <AiFillBank />
              <AiOutlineBank />
              <GiBank />
              <RiBankLine />
            </div>
          </div>
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
