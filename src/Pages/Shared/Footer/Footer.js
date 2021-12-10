import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light text-center py-5">
      <h6>Copyright © 2021 | Raduana Khawla</h6>
      <h6>Jagannatn University,Dhaka.</h6>
      <div className="p-3">
        <a
          href="https://github.com/Raduana-Khawla"
          style={{ textDecoration: "none" }}
          className="text-primary p-3"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100013956430364"
          style={{ textDecoration: "none" }}
          className="text-primary p-3"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/raduana-khawla-279873182/"
          style={{ textDecoration: "none" }}
          className="text-primary p-3"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href=""
          style={{ textDecoration: "none" }}
          className="text-primary p-3"
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
