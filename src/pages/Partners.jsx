import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Partners() {
  return (
    <Container className="text-center">
      <section
        style={{ paddingBottom: "10px", color: "#777" }}
        className="login-title"
      >
        <h1>نقدم لكم</h1>
      </section>
      <div className="partners-logo">
        <Row>
          <Col>
            <div className="partners">
              <a href="/partner/">
                <span>الداعم التقنى</span>
                <img
                  data-toggle="tooltip"
                  src="./gomaih.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك التشغيلي</span>
                <img
                  data-toggle="tooltip"
                  src="./daman_new.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك التقنى</span>
                <img
                  data-toggle="tooltip"
                  src="./lean_logo.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك المصرفي</span>
                <img
                  data-toggle="tooltip"
                  src="./alinma.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      {/*  */}
      <section
        style={{ paddingBottom: "10px", color: "#777" }}
        className="login-title"
      >
        <h1>بالتعاون مع</h1>
      </section>
      <div className="partners-all">
        <Row>
          <Col xs={3}>
            <div className="partners">
              <a href="/partner/">
                <span>الداعم التقنى</span>
                <img
                  data-toggle="tooltip"
                  src="./gomaih.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                  className="icon"
                />
              </a>
            </div>
          </Col>
          <Col xs={3}>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك التشغيلي</span>
                <img
                  data-toggle="tooltip"
                  src="./daman_new.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
          <Col xs={3}>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك التقنى</span>
                <img
                  data-toggle="tooltip"
                  src="./lean_logo.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
          <Col xs={3}>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك المصرفي</span>
                <img
                  data-toggle="tooltip"
                  src="./alinma.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
          <Col xs={3}>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك المصرفي</span>
                <img
                  data-toggle="tooltip"
                  src="./alinma.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
          <Col xs={3}>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك المصرفي</span>
                <img
                  data-toggle="tooltip"
                  src="./alinma.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
          <Col xs={3}>
            <div className="partners">
              <a href="/partner/">
                <span>الشريك المصرفي</span>
                <img
                  data-toggle="tooltip"
                  src="./alinma.png"
                  title=""
                  alt="الجميح"
                  data-original-title="الجميح"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Partners;
