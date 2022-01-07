import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-info text-center p-3">
      <h6>Copyright © 2022 | Md. Ismail Hosen</h6>
      <h6>Freelance VBA Developer</h6>
      <h6>Software Engineer, XYZ Cloud BD Ltd.</h6>
      <div className="px-3">
        <a
          href="https://github.com/1504168"
          style={{ textDecoration: "none" }}
          className="text-secondary p-3"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/mdismail.hosen.7"
          style={{ textDecoration: "none" }}
          className="text-secondary p-3"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/md-ismail-hosen-b77500135/?fbclid=IwAR3Zpx8PIP45ilwSjcKq8KkUYa1RgldeXl-w8ukyqTgZepfHV_BHlNPsLdM"
          style={{ textDecoration: "none" }}
          className="text-secondary p-3"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href=""
          style={{ textDecoration: "none" }}
          className="text-secondary p-3"
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
