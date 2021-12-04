import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-12 shadow p-5  bg-warning">
          <h2>Register: Create Account</h2>
          <form>
            <input type="email" name="" id="" placeholder="Your Email" />
            <br />
            <br />
            <input type="password" name="" id="" placeholder="Your Password" />
            <br />
            <br />
            <input
              type="password"
              name=""
              id=""
              placeholder="Re-enter Password"
            />
            <br />
            <br />
            <input className="btn-primary" type="submit" value="submit" />
          </form>
          <p>
            Already have an Account?{" "}
            <Link to="/login">
              <span className="text-white">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
