import React from "react";
import { Link } from "react-router-dom";
import UseFirebase from "../../../hooks/UseFirebase";
import "./Navbar.css";

const Navbar = () => {
  const { admin, user, logOut } = UseFirebase();
  // console.log("hello user from ", user);
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
                <Link className="nav-link" to="/postLink">
                  <span className="spanTag">Posts</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fileDownloader">
                  <span className="spanTag">Download</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/exploreProjects">
                  <span className="spanTag">Explore Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <span className="spanTag">Contact Me</span>
                </Link>
              </li>
              {admin && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <span className="spanTag">Dashboard</span>
                  </Link>
                </li>
              )}
              {user?.displayName ? (
                <div className="d-flex">
                  <button
                    className="bg-success text-light"
                    onClick={logOut}
                    variant="light"
                  >
                    Logout
                  </button>
                  <li className="pic">
                    <img
                      className="w-75 h-100 rounded-circle"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Profile Pic"
                      src={user?.photoURL}
                      alt="photo"
                    />
                  </li>
                </div>
              ) : (
                <div className="d-flex">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      <span className="spanTag bg-success p-3">Login</span>
                    </Link>
                  </li>
                  <br />
                  <li className="pic">
                    <img
                      className="w-75 h-100 rounded-circle"
                      src="https://i.ibb.co/FWQmPZr/pngtree-beautiful-admin-roles-line-vector-icon-png-image-5256998.jpg"
                      alt="photo"
                    />
                  </li>
                </div>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/notFound">
                  <span className="spanTag">NotFound</span>
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
