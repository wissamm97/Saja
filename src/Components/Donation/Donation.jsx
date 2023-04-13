import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import "./Donation.css";
function Donation() {
  const [donation, setDonation] = useState(0);
  useEffect(() => {
  }, [donation]);
  const box = useRef();
  const parent = useRef();
  const handelClick = (e) => {
    e.current.classList.toggle("show");
  };
  return (
    <div className="donation" ref={parent} onClick={() => handelClick(box)}>
      <span className="title">
        <BiDonateHeart />
        التبرعات
      </span>
      <div className="donation-info" ref={box}>
        <p>لأعمال صحية خيرية يتضاعف فيها أثرك و لا ينقطع أجرك</p>
        <div className="vis-icon">
          <div>
            <FaCcVisa />
          </div>
          <div>
            <FaCcMastercard />
          </div>
          <div>
            <FaPaypal />
          </div>
        </div>
        <div className="text">
          <span>قيمة التبرع</span>
          <div className="form-group ">
            <input
              type="number"
              className="form-control form-control-lg col-8"
              id="number"
              name="number"
              value={donation}
              onChange={(e) => setDonation(e.target.value)}
            />
            <span className="col-2">ر.س</span>
          </div>
        </div>
        <div className="m-2">
          <div className="pb-3">
            <button
              className="btn btn w-100 gift"
            >
              <span className="pl-3">
                <FaMoneyBillAlt />
              </span>
              تبرع الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
