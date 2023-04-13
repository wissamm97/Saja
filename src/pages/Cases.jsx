import { useDispatch, useSelector } from "react-redux";
import { getAllCases, replce, setValue } from "../features/caseSlice";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCartPlus,
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import { useParams, useNavigate, Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FiMapPin } from "react-icons/fi";
import { addToCart } from "../features/cartSlice";
function Cases() {
  const [currentPage, setCurrentPage] = useState(1);
  const [code, setCode] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");
  const [charity, setCharity] = useState("");
  useEffect(() => {
    dispatch(getAllCases());
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const btn = useRef();
  const full = useRef();
  const handelClick = (e, el) => {
    e.current.classList.toggle("disabled");
    el.current.classList.toggle("disabled");
  };
  const { cases } = useSelector((state) => state.cases);
  const newArray = cases.filter((cas) => {
    return cas.casescompleted == false ? cas : "";
  });
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  // get loction
  const getLoction = cases.map((item) => {
    return item.loction;
  });
  const arrayloction = getLoction.filter((value, index) => {
    return getLoction.indexOf(value) === index;
  });
  // get category
  const getcategory = cases.map((item) => {
    return item.category;
  });
  const arraycategory = getcategory.filter((value, index) => {
    return getcategory.indexOf(value) === index;
  });
  // get charity
  const getcharity = cases.map((item) => {
    return item.charity;
  });
  const arraycharity = getcharity.filter((value, index) => {
    return getcharity.indexOf(value) === index;
  });

  // Pagination
  const product_page = 3;
  const page = Math.ceil(newArray.length / product_page);
  const generatePages = [];
  for (let i = 1; i <= page; i++) {
    generatePages.push(i);
  }
  const startIndex = (currentPage - 1) * product_page;
  const lastIndex = currentPage * product_page;
  const orderedProduct = newArray.slice(startIndex, lastIndex);
  Object.preventExtensions(cases);
  const handelAmount = (ele, value) => {
    // console.log(ele.amount + +value , 'ele');
    // console.log(+value , 'value');
    // console.log(ele , 'newEle');
    const newValue = +value;
    console.log(ele);
    console.log(Object.preventExtensions(ele));
    console.log(ele.amount + +value);
    console.log(ele.amount + newValue);
    console.log(ele);
    // ele.newamount = "5000";
    // console.log(ele);
  };
  return (
    <>
      <Container>
        <section className="filter-search">
          <form onSubmit={handelSubmit}>
            <div className="grid">
              <div className="input-register">
                <label htmlFor="name"> رقم الحالة</label>
                <input
                  type="text"
                  name="casecode"
                  id="casecode"
                  placeholder="  رقم الحالة"
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="input-register">
                <label htmlFor="Region">المنطقة</label>
                <select
                  name="Region"
                  id="Region"
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option selected value="">
                    عرض الكل
                  </option>
                  {arrayloction.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="input-register">
                <label htmlFor="charity">الجمعية</label>
                <select
                  name="charity"
                  id="charity"
                  onChange={(e) => setCharity(e.target.value)}
                >
                  <option selected value="">
                    عرض الكل
                  </option>
                  {arraycharity.map((cat) => (
                    <option value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="input-register">
                <label htmlFor="Specialization">التخصص</label>
                <select
                  name="Specialization"
                  id="Specialization"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option selected value="">
                    عرض الكل
                  </option>
                  {arraycategory.map((cat) => (
                    <option value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="search m-auto text-center">
              <Link
                to="/allcases/sreach"
                state={{
                  code: code,
                  region: region,
                  category: category,
                  charity: charity,
                }}
              >
                <FaSearch /> بحث
              </Link>
            </div>
            <div className="btn-case">
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
                ref={full}
                onClick={() => {
                  handelClick(full, btn);
                  navigate("/casecompleted");
                }}
                className="case "
                // style={{ textDecoration: "none" }}
              >
                الحالات المكتملة
              </button>
            </div>
          </form>
        </section>
        <Row>
          {orderedProduct.map((item) => (
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
                  <ProgressBar animated now={item.maxamount} />
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
                    <li>
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="أضف مبلغ للتبرع"
                        onChange={(e) => {
                          dispatch(setValue(e.target.value));
                          dispatch(replce(item));
                          console.log(item);
                        }}
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
          <div className="pagination">
            <Button
              disabled={currentPage === 1}
              className="page prev"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <FaArrowRight />
            </Button>
            {generatePages.map((el) => (
              <div
                onClick={() => setCurrentPage(el)}
                className={currentPage === el ? "page active" : "page"}
                key={el}
              >
                {el}
              </div>
            ))}
            <Button
              disabled={currentPage === page}
              className="page next"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <FaArrowLeft />
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Cases;
