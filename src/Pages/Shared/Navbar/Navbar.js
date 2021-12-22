import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UseFirebase from "../../../hooks/UseFirebase";
import "./Navbar.css";

const Navbar = () => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { user, logOut } = UseFirebase();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/allPosts`)
      .then(function (response) {
        // handle success
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSearchBtn = () => {
    if (searchValue) {
      const result = posts.filter((post) =>
        post.date.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResult(result);
      setSearchValue("");
    } else {
      setSearchValue("");
    }
  };
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
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item d-flex">
                <input
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  placeholder="Search Post"
                />
                <Link className="nav-link" to="/allPosts">
                  <button onClick={handleSearchBtn}>Search</button>
                </Link>
              </li>
              <li className="nav-item">
                {searchResult.map((item) => (
                  <Link to={`/services/${item._id}`}>
                    <h6 className="text-light">{item.date}</h6>
                  </Link>
                ))}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/attributions">
                  <span>Attributions</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fileDownloader">
                  <span>File Download</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <span>Dashboard</span>
                </Link>
              </li>
              {user?.email ? (
                <button onClick={logOut} variant="light">
                  Logout
                </button>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <span>Login</span>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/notFound">
                  <span>NotFound</span>
                </Link>
              </li>
              <span>Signed in as:</span>{" "}
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
