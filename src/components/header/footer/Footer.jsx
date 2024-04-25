import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer wrapper pb-4">
      <div className="container p-0 ">
        <div className="row p-0  ">
          <div className="col-3 ">
            <ul>
              <p>Login</p>
              <p>Start therapy </p>
              <p>Plans</p>
            </ul>
          </div>
          <div className="col-3 ">
            <ul>
              <p>Aboutus</p>
              <p>Blog</p>
              <p>FAQ</p>
            </ul>
          </div>
          <div className="col-3 ">
            <ul>
              <p>Mental health tests</p>
              <p>Online-therapy</p>
            </ul>
          </div>
          <div className="col-3 ">
            <ul>
              <p>For counselors</p>
              <p>Contact</p>
            </ul>
          </div>
          <div className="col-12 d-flex  justify-content-between align-items-center mt-5 ">
            <div  className=" d-flex mx-lg-4 mx-md-4 ">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className=" d-flex footer-right ">
              <p>Privacy policy</p>
              <p>Term of service</p>
            </div>
          </div>
            <span className=" last">
              If you are in a life threatening situation - don’t use this site.
              Call +1 (800) 273-8255 or use these resources to get immediate
              help.
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





