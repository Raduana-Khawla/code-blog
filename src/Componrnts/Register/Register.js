import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-12 shadow p-5  bg-warning">
          <h2>Register: Create Account</h2>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              //Is it possible to keep this things in a html file and load
              that??
              <input
                type="name"
                name=""
                id=""
                placeholder="Your Name"
                onBlur={handleOnBlur}
              />
              <br />
              <br />
              <input
                type="email"
                name=""
                id=""
                placeholder="Your Email"
                onBlur={handleOnBlur}
              />
              <br />
              <br />
              <input
                type="password"
                name=""
                id=""
                placeholder="Your Password"
                onBlur={handleOnBlur}
              />
              <br />
              <br />
              <input
                type="password"
                name=""
                id=""
                placeholder="Re-enter Password"
                onBlur={handleOnBlur}
              />
              <br />
              <br />
              <input className="btn-primary" type="submit" value="submit" />
              <p>
                Already Registered? Please Login{" "}
                <Link to="/login">
                  <span className="text-white">Login</span>
                </Link>
              </p>
            </form>
          )}
          {isLoading}
          {user?.email}
          {authError && alert("error") > { authError }}
        </div>
      </div>
    </div>
  );
};

export default Register;
