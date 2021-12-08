import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className=" container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 col-sm-12 shadow p-5 design1">
          <h3>Login</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="">User Email</label>
              <input
                type="email"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <div className="mt-3">
              <input className="bg-danger" type="submit" value="submit" />
            </div>
            <p className="mt-3">
              new to dental-clinic?
              <Link to="/register">
                <span className="text-white">New User? Please Register</span>
              </Link>
            </p>
            {/* {isLoading}
            {user?.email > alert("Login successfully!")}
            {authError && alert("error") > { authError }} */}
            <br />
            <button className="btn-primary" onClick={handleGoogleSignIn}>
              Google Sign In
            </button>
          </form>
        </div>
        <div className="col-md-6 col-sm-12 d-none d-md-block">
          <img
            className="img-fluid"
            src="https://i.ibb.co/56LpdQw/login-page.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
