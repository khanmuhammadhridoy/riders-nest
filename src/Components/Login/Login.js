import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import {
  handleFbSignIn,
  handleGoogleSignIn,
  handleSignOut,
  initializeLoginFramework,
} from "./LoginManage";
import "./Login.css";
import GLogo from "../../images/google.png";
import FBLogo from "../../images/fb.png";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

// isSignedIn: false,
// name: "",
// email: "",
// photo: "",
// error: "",
const Login = () => {
  const [newUser, setNewUser] = useState(false);
  // const [user, setUser] = useState({});
  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleBlur = (event) => {
    let isFiledValid = true;

    if (event.target.name === "email") {
      isFiledValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFiledValid = isPasswordValid && passwordHasNumber;
    }
    if (isFiledValid) {
      const newUserInfo = { ...loggedInUser };
      newUserInfo[event.target.name] = event.target.value;
      setLoggedInUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    // if (newUser && loggedInUser.email && loggedInUser.password) {
    // }
  };
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      setLoggedInUser(res);
      let location = history.replace(from);
      {
        location === undefined
          ? history.push("/destination")
          : history.replace(from);
      }
    });
  };

  return (
    <div>
      <Navigation></Navigation>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          {newUser ? (
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Login
            </Typography>
          )}

          <form onSubmit={handleSubmit} className="form">
            <input
              type="checkbox"
              onChange={() => setNewUser(!newUser)}
              name="newUser"
              id=""
            />{" "}
            <label htmlFor="newUser"> Don't have an account? Sign Up</label>
            {newUser && (
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onBlur={handleBlur}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              onBlur={handleBlur}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {newUser && (
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                onBlur={handleBlur}
                label="Re-Type Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            )}
            {newUser ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign Up
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Login
              </Button>
            )}
            {/* <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/signUp">
                  {
                    <span className="signUp">
                      Don't have an account? Sign Up
                    </span>
                  }
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
        <div className="otherLogin">
          <br />
          <h3>or</h3>
          <br />
          <div className="signInButton" onClick={fbSignIn}>
            <img src={FBLogo} alt="" />
            <p>Continue with Facebook</p>
          </div>
          <br />
          <div className="signInButton" onClick={googleSignIn}>
            <img src={GLogo} alt="" />
            <p>Continue with Google</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Login;
