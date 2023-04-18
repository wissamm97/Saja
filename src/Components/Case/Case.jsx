import { Col, Container, Row } from "react-bootstrap";
import "./Case.css";
import { useEffect, useRef } from "react";
import { getAllCases } from "../../features/caseSlice";
import CardCase from "./CardCase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Case() {
  // const btn = useRef();
  // const full = useRef();
  // const handelClick = (e, el) => {
  //   e.current.classList.toggle("disabled");
  //   el.current.classList.toggle("disabled");
  // };
  const dispatch = useDispatch();
  const { cases } = useSelector((state) => state.cases);
  useEffect(() => {
    dispatch(getAllCases());
  }, []);
  // const navigate = useNavigate();
  return (
    <Container className="text-center p-4">
      {/* <div className="btn-case">
        <button
          onClick={() => {
            handelClick(btn, full);
            navigate("/allcases");
          }}
          ref={btn}
          className="case disabled"
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
          className="case "
          style={{textDecoration:"none"}}
        >
          الحالات المكتملة
        </button>
      </div> */}
      <CardCase cases={cases} />
    </Container>
  );
}

export default Case;
