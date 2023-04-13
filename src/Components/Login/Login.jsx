import { Container } from "react-bootstrap";
import "./Login.css";
import { GrLogin } from "react-icons/gr";
import { BiLock, BiUser, BiMobile } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Contact from "../Contact/Contact";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
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
    <Container className="text-center">
      <section style={{ paddingBottom: "10px" }} className="login-title">
        <h1>
          تسجيل الدخول <GrLogin />
        </h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-login">
            <label htmlFor="email">يرجى أدخال البريد الألكتروني</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="يرجى أدخال البريد الألكتروني"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="form-login">
            <label htmlFor="password">يرجى أدخال كلمة السر</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="يرجى أدخال كلمة السر"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="tool-login">
            <div className="check">
              <input type="checkbox" name="rember" id="" className="check" />{" "}
              تذكرني
            </div>
            <Link className="reset" to="resetpaasword">
              <BiLock /> هل نسيت كلمة المرور
            </Link>
          </div>
          <div className="login-setting">
            <Link to="/register" className="new-user">
              <BiUser /> مستخدم جديد
            </Link>
            <div className="active-mobile">
              <BiMobile /> تفعيل الجوال
            </div>
          </div>
          <div className="submit">
            <button
              style={{ padding: "25px 45px", fontSize: "2rem" }}
              type="submit"
              className="submit"
            >
              تسجيل الدخول{" "}
              <GrLogin style={{ marginRight: "12px", fontSize: "2rem" }} />
            </button>
          </div>
        </form>
      </section>
      <Contact />
    </Container>
  );
}

export default Login;
