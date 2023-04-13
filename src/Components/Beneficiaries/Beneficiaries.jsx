import { Container, Row } from "react-bootstrap";
import { MdPeopleAlt } from "react-icons/md";
import "./Beneficiaries.css";
function Cases() {
  return (
    <section className="beneficiaries">
      <Container>
        <Row className="other">
          <div className="benbox">
            <div className="icon">
              <MdPeopleAlt />
              <p className="text">المستفيدون من شفاء</p>
              <p>6255</p>
              <p>مستفيد</p>
            </div>
          </div>
          <div className="benbox">
            <div className="icon">
              <MdPeopleAlt />
              <p className="text">إجمالي مبلغ المساهمات</p>
              <p>172,435,551</p>
              <p>ريال سعودي</p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Cases;
