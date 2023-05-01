import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import "./NavBar.css";
function NavBar() {
  const navigate = useNavigate();
  const [codeState, setCodeState] = useState("");
  const { cases } = useSelector((state) => state.cart);
  console.log(codeState);
  const handelRout = (value) => {
    if (value.length > 0) {
      navigate(`/allcases/${value}`);
      // navigate("/allcases/" + codeState);
    }
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="pe-3 ps-3 m-3"
        style={{ borderRadius: "16px" }}
      >
        <Navbar.Brand>
          <Link to="/">
            <img
              src="./logotab.jpg"
              alt="logo"
              style={{ height: "100px", borderRadius: "50%" }}
            ></img>
          </Link>
          <Navbar.Toggle
            style={{ marginRight: "10px" }}
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarEight"
            aria-controls="navbarEight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-nav-dropdown" className="nvcollap">
          <Nav className="icons">
            <NavLink to="/" className="navbar-nav nav-link">
              الرئيسية
            </NavLink>
            <NavLink to="/allcases" className="navbar-nav nav-link">
              الحالات
            </NavLink>
            <NavLink to="partners" className="navbar-nav nav-link">
              الشركاء
            </NavLink>
            <NavLink to="aboutme" className="navbar-nav nav-link">
              من نحن
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="icons">
          {/* <div className="search-container">
            <input
              type="text"
              name="search"
              placeholder="رقم الحالة..."
              className="search-input"
              onChange={(e) => {
                setCodeState(e.target.value);
              }}
            />
            <Link to='/allcases/sreach' state={{code:codeState}} href="#" className="search-btn">
              <FaSearch />
            </Link>
          </div> */}
          {/* <Link
            style={{ textDecoration: "none" }}
            className="login"
            to="/Login"
          >
            <FiLogIn /> تسجيل الدخول
          </Link> */}
          <Link to="cart" className="cart">
          <span>{cases && cases.length}</span>
            <FaShoppingCart />
          </Link>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
