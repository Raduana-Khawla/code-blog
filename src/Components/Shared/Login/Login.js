import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    user,
    loginUser,
    signInWithGoogle,
    FacebookSign,
    isLoading,
    signInWithGithub,
    authError,
  } = useAuth();

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
  // const handlefacebook = () => {
  //   FacebookSign(location, history);
  // };
  const handleGithub = () => {
    signInWithGithub(location, history);
    console.log("hello");
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>------------------------</p>
          <div className="d-flex justify-content-evenly">
            <Button onClick={handleGoogleSignIn} variant="contained">
              <i className="fab fa-google"></i>
            </Button>
            {/* <Button onClick={handlefacebook} variant="contained">
              <i className="fab fa-facebook"></i>
            </Button> */}
            <Button onClick={handleGithub} variant="contained">
              <i className="fab fa-github"></i>
            </Button>
          </div>
        </Grid>
        <Grid item sx={{ my: 2 }} xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/56LpdQw/login-page.gif"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
