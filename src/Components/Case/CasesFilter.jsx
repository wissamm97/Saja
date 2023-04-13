import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FiMapPin } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import { getAllCases } from "../../features/caseSlice";
import { getAllCases } from "../../features/caseSlice";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCartPlus,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function CasesFilter(props) {
  const loction = useLocation();
  const [search, setSearch] = useState("");
  const codeform = loction.state?.code;
  const regionform = loction.state?.region;
  const categoryform = loction.state?.category;
  const charityform = loction.state?.charity;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCases());
  }, [search]);
  const { cases } = useSelector((state) => state.cases);
  const newArray = cases.filter((cas) => {
    return cas.casescompleted == false ? cas : "";
  });
  console.log(search);

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
  return (
    <Container>
      <section className="filter-search">
        <form>
          <div className="grid">
            <div className="input-register">
              <label htmlFor="name"> رقم الحالة</label>
              <input
                type="text"
                name="casecode"
                id="casecode"
                placeholder="  رقم الحالة"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="input-register">
              <label htmlFor="Region">المنطقة</label>
              <select
                name="Region"
                id="Region"
                onChange={(e) => setSearch(e.target.value)}
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
                onChange={(e) => setSearch(e.target.value)}
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
                onChange={(e) => setSearch(e.target.value)}
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
            <Link to="/allcases/sreach">
              <FaSearch /> بحث
            </Link>
          </div>
        </form>
      </section>
      <Row>
        {newArray
          .filter((cas) => {
            return search.toLowerCase() === ""
              ? cas
              : cas.codeCase.toLowerCase().includes(search) ||
                  cas.category.toLowerCase().includes(search) ||
                  cas.charity.toLowerCase().includes(search) ||
                  cas.loction.toLowerCase().includes(search);
          })
          .map((item) => (
            <Col key={item.id}>
              <Card
                style={{ width: "18rem", marginBottom: "4rem !import" }}
                className="p-3 m-auto mb-4"
              >
                <Card.Img
                  variant="top"
                  className="image-card"
                  src={`.${item.image}`}
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
                      />
                    </li>
                    <li>
                      <button>تبرع الأن</button>
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
      </Row>
    </Container>
  );
}

export default CasesFilter;
