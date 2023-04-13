import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdOutlineNoteAlt } from "react-icons/md";
import { useState, useEffect } from "react";
import "./ContactForm.css";
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const { fullName, email, message } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col>
          <div className="title">
            <h4>اتصل بنا</h4>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullname"
                value={fullName}
                id="text"
                placeholder="الأسم بالكامل"
                onChange={onChange}
                required
              />
              <AiOutlineUser />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="text"
                value={email}
                placeholder="البريد الألكتروني"
                onChange={onChange}
                required
              />
              <AiOutlineMail />
            </div>
            <div className="form-group">
              <textarea
                name="textarea"
                id=""
                cols="20"
                rows="8"
                value={message}
                placeholder="رسالتك هنا"
                onChange={onChange}
                required
              ></textarea>
              <MdOutlineNoteAlt />
            </div>
            <div className="submit">
              <button type="submit" className="submit">
                أرسال
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
