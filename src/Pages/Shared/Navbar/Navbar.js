import React from "react";
import { Link } from "react-router-dom";
import UseFirebase from "../../../hooks/UseFirebase";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = UseFirebase();
  return (
    <div>
      <nav className="navbar design1 navbar-expand-lg navbar-light">
        <div className="container-fluid">
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
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <span className="spanTag">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allPosts">
                  <span className="spanTag">Posts</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fileDownloader">
                  <span className="spanTag">File Download</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <span className="spanTag">Contact Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <span className="spanTag">Dashboard</span>
                </Link>
              </li>
              {user?.email ? (
                <button onClick={logOut} variant="light">
                  Logout
                </button>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <span className="spanTag">Login</span>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/notFound">
                  <span className="spanTag">NotFound</span>
                </Link>
              </li>
              <span className="spanTag">Signed in as:</span>{" "}
              <a className="text-warning" href="#login">
                {user?.displayName}
              </a>{" "}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
