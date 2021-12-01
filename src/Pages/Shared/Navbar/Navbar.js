import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <nav class="navbar design1 navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            <img
              className=""
              src="https://i.ibb.co/st6gf8W/img-Of-i-removebg-preview.png"
              alt=""
              width="70"
              height="60"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  <span>Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/attributions">
                  <span>Attributions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
