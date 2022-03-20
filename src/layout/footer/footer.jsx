import React from "react";
import "./footer.css";
import Logo from "../../images/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-background w-100 py-3 text-white position-fixed bottom-0">
      <div className="container">
        <div className="d-flex justify-content-start">
          <div className="d-flex flex-column">
            <div className="mb-3">
              <img className="logo" src={Logo} alt="logo" />
            </div>
            <div>
              <p>Address, Tirana, Albania</p>
              <p>Email: online@example.com</p>
              <p>Phone: xxx xxx xxx xxx</p>
            </div>
          </div>
          <div className="mx-5">
            <h2>Supporto</h2>
            <div className="d-flex">
              <div>Faq</div>
              <div className="mx-4">Privacy</div>
              <div>Termini e condizicioni</div>
            </div>
          </div>
        </div>
        <div className="mt-5">{year} © Created by New Media Communications</div>
      </div>
    </div>
  );
};

export default Footer;
