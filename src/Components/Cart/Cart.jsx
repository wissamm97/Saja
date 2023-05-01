import { Button, Col, Container, Row } from "react-bootstrap";
import "./Cart.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../../features/cartSlice";
import PayPalCheckoutButton from "./../PayPalCheckoutButton/PayPalCheckoutButton";
import {
  FaShoppingCart,
  FaCcMastercard,
  FaPaypal,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Cart() {
  const dispatch = useDispatch();
  const { cases } = useSelector((state) => state.cart);
  const check = useRef();
  const show = useRef();
  const handelChange = (e) => {
    e.current.classList.toggle("show");
  };
  const TotalAmount =
    cases &&
    cases.reduce((acc, cases) => {
      acc += +cases.amount;
      return acc;
    }, 0);
  const handleDelete = (itemId) => {
    dispatch(deleteFromCart(itemId));
  };
  return (
    <Container className="text-center">
      <section
        style={{ paddingBottom: "10px", color: "#777" }}
        className="login-title"
      >
        <h1>
          <FaShoppingCart /> سلة تبرعاتك
        </h1>
      </section>
      <Row>
        <Col>
          <div className="donat">
            <div className="donat-title">
              <h4>مجموع التبرع</h4>
              <span>{TotalAmount} ر.س</span>
            </div>

            {cases &&
              cases.map((el) => (
                <div className="cart-item" key={el.id}>
                  <p className="title">{el.category}</p>
                  <div className="details">
                    <p>{el.details}</p>
                    <span onClick={() => handleDelete(el.id)} className="close">
                      <IoIosClose />
                    </span>
                  </div>
                </div>
              ))}

            <div className="donat-check">
              <form>
                <input
                  ref={check}
                  type="checkbox"
                  name="donat-check"
                  id="donat-check"
                  onChange={() => {
                    handelChange(show);
                  }}
                />
                <label htmlFor="donat-check">تبرع للوقف الصحى</label>
                <InputGroup className="mb-3 ">
                  <Form.Control
                    className="donat-count"
                    ref={show}
                    aria-label="Amount (to the nearest dollar)"
                  />
                </InputGroup>
              </form>
            </div>
          </div>
        </Col>
        <Col className="pt-3 pb-3">
          <div className="input-register">
            <label htmlFor="name"> ألاسم</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="  ألاسم"
              //   onChange={onChange}
              //   value={name}
            />
          </div>
          <div className="input-register">
            <label htmlFor="phonenumber">رقم الجوال</label>
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="رقم الجوال"
              //   onChange={onChange}
              //   value={phonenumber}
            />
          </div>
          <div
            className="input-register"
            style={{ width: "50%", border: "none" }}
          >
            <PayPalCheckoutButton TotalAmount={TotalAmount} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
