import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCases } from "../../features/caseSlice";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FiMapPin } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import { Link ,useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCartPlus,
  FaSearch,
} from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
function Casecompleted() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const btn = useRef();
  const full = useRef();
  const handelClick = (e, el) => {
    e.current.classList.toggle("disabled");
    el.current.classList.toggle("disabled");
  };
  const { cases } = useSelector((state) => state.cases);
  useEffect(() => {
    dispatch(getAllCases());
  }, []);
  return (
    <Container className="text-center">
      <div className="btn-case">
        <button
          onClick={() => {
            handelClick(btn, full);
            navigate('/allcases')
          }}
          ref={btn}
          className="case "
        >
          الحالات المتوفر
        </button>
        <button
          to="casecompleted"
          ref={full}
          onClick={() => {
            handelClick(full, btn);
            navigate("/casecompleted");
          }}
          className="case disabled"
        >
          الحالات المكتملة
        </button>
      </div>
      <Row>
        {cases
          .filter((cas) => {
            return cas.casescompleted == true ? cas : "";
          })
          .map((item) => (
            <Col key={item.id}>
              <Card
                style={{
                  width: "18rem",
                  marginBottom: "4rem !import",
                }}
                className="p-3 m-auto mb-4"
              >
                <Card.Img
                  variant="top"
                  className="image-card"
                  src={`.${item.image}`}
                  style={{ borderRadius: "10px", filter: "grayscale(1)" }}
                />
                <div className="progressbar">
                  <span> المتبقي</span>
                  <ProgressBar animated now={45} />
                </div>
                <Card.Body style={{ marginTop: "-37px" }}>
                  <Card.Text>
                    {" "}
                    <MdDoneOutline
                      style={{
                        color: "#86A3B8",
                        fontSize: "1.5rem",
                        marginLeft: "10px",
                      }}
                    />
                    هذه الحالة مكتملة{" "}
                  </Card.Text>
                  <Card.Text>{item.details}</Card.Text>
                  <ul className="card-case">
                    <li>{item.category}</li>
                    <li>
                      <span>
                        <FiMapPin />
                      </span>
                      <span style={{ fontSize: "10px", padding: "0 !import" }}>
                        {item.loction}
                      </span>
                    </li>
                    <span className="code-case">{item.codeCase}</span>
                  </ul>
                  <ul className="donta-card-cse">
                    <li>
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="أضف مبلغ للتبرع"
                        disabled
                      />
                    </li>
                    <li>
                      <button disabled>تبرع الأن</button>
                    </li>
                    <li disabled>
                      <FaCartPlus />
                    </li>
                  </ul>
                  <div className="card-case-ic">
                    <span>شارك</span>
                    <FaFacebook />
                    <FaWhatsapp />
                    <FaTwitter />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Casecompleted;
