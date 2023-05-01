import "./CardCase.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaWhatsapp, FaCartPlus } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addToCart, setDonation, updateObject } from "../../features/cartSlice";

function CardCase({ cases }) {
  const [amountnew, setAmountNew] = useState(0);
  const dispatch = useDispatch();
  const handelAmount = (ele, value) => {
    console.log(Object.isExtensible(ele));
    // ele.city = "New York";
    // console.log(ele);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  const [amount, SetAmount] = useState(0);
  return (
    <>
      <Row>
        {cases.slice(1, 7).map((item) => (
          <Col key={item.id}>
            <Card
              style={{ width: "18rem", marginBottom: "4rem !import" }}
              className="p-3 m-auto mb-4"
            >
              <Card.Img
                variant="top"
                className="image-card"
                src={item.image}
                style={{ borderRadius: "10px" }}
              />
              <div className="progressbar">
                <span> المتبقي{item.maxamount}</span>
                <ProgressBar
                  animated
                  now={item.maxamount}
                  style={{ backgroundColor: "#205375" }}
                />
              </div>
              <Card.Body style={{ marginTop: "-37px" }}>
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
                    <form
                      onSubmit={handelSubmit}
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <li>
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          placeholder="أضف مبلغ للتبرع"
                          onChange={(e) => SetAmount(e.target.value)}
                          onKeyUp={() => dispatch(setDonation(amount))}
                          required
                        />
                      </li>
                      <li>
                        <button onClick={() => dispatch(addToCart(item))}>
                          تبرع الأن
                        </button>
                      </li>
                      <li>
                        <FaCartPlus />
                      </li>
                    </form>
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
        <Link className="allcases" to="allcases">
          عرض كل الحالات
        </Link>
      </Row>
    </>
  );
}

export default CardCase;
