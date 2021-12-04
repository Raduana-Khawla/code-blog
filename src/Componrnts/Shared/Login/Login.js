import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/ServiceDetail";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className=" container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 col-sm-12 shadow p-5 design1">
          <h3>Login</h3>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
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
              <span className="text-white">Create Account</span>
            </Link>
          </p>
          <br />
          <button className="btn-primary" onClick={handleGoogleLogin}>
            Google Sign In
          </button>
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
