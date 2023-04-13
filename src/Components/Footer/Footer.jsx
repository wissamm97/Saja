import "./Footer.css";
import {
  FaArrowUp,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaMoneyBillAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  const handelgotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer id="footer" className="footer-area">
      <Container>
        <div className="to-top" onClick={() => handelgotop()}>
          <FaArrowUp />
        </div>
        <Row className="footer">
          <Col>
            <span className="text-footer" style={{ padding: "0px" }}>
              جميع الحقوق محفوظة لمنصة سجى © 2023
            </span>
          </Col>
          <Col>
            <div className="bank-icon">
              <div className="icons">
                <a className="link" href="/#">
                  <FaCcVisa style={{ fontSize: "2rem" }} />
                </a>
                <a className="link" href="/#">
                  <FaCcMastercard style={{ fontSize: "2rem" }} />
                </a>
                <a className="link" href="/">
                  <FaPaypal style={{ fontSize: "2rem" }} />
                </a>
                <a className="link" href="/">
                  <FaMoneyBillAlt style={{ fontSize: "2rem" }} />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="social-icon">
              <div className="icons">
                <a className="link" href="/#">
                  <FaFacebook style={{ fontSize: "2rem" }} />
                </a>
                <a className="link" href="/#">
                  <FaInstagram style={{ fontSize: "2rem" }} />
                </a>
                <a className="link" href="/">
                  <FaTwitter style={{ fontSize: "2rem" }} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
