import React from "react";
import { NavLink } from "react-router-dom";

const DesignAdvice = () => {
  return (
    <section className="design-advice-sec">
      <div className="design-advice-container">
        <div className="advice-info-container">
          <h4 className="design-advice-title">
            Don't know how to start decorating the house of your dreams?
          </h4>
          <p className="design-advice-p">
            Don't worry! At Utsukushiki we offer you design advice totally{" "}
            <span>FREE</span>.
          </p>
          <NavLink className="design-advice-link">
            Click here to contact an advisor
          </NavLink>
          <p className="design-advisor-schedule">
            An advisor can assist you from 8:00 to 15:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignAdvice;
