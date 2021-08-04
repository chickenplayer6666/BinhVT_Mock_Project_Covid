import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  Button,
  CssBaseline,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  FormStyles,
} from "../../../MaterialUI/ExportComponent";
import { BooleansOfPageActions } from "../../../redux/slices/setBooleansOfPage";
import "./Login.css";

function Login(props) {
  const classes = FormStyles();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigationToPage = useSelector(
    (state) => state.NavigationToPageReducer.path
  );
  const [errMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkExistsUser = (users) => {
    let checkUser = localStorage.getItem("userInfo");
    checkUser = JSON.parse(checkUser);
    if (checkUser.length > 0) {
      const findUser = checkUser.find(
        (item) => item.username === users.username
      );
      if (findUser) return findUser;
    }
    return null;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const checkUser = checkExistsUser(user);
    if (
      user.username === checkUser?.username &&
      user.password === checkUser?.password
    ) {
      dispatch(BooleansOfPageActions.toggleLoadingPage(true));
      localStorage.setItem(
        "isAuthenticated",
        JSON.stringify({ name: user.username, token: true })
      );
      setTimeout(() => {
        dispatch(BooleansOfPageActions.toggleLoadingPage(false));
      }, 3000);
      history.push(`/${navigationToPage}`);
    } else if (user.username === "" || user.password === "") {
      setErrorMessage("Please enter Username and Password");
    } else {
      setErrorMessage("Username and Password is wrong");
    }
  };

  const navigationToRegister = () => {
    history.push("/register");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {errMessage !== "" && (
                  <>
                    <p className="message-error">{errMessage}</p>
                  </>
                )}
                <TextField
                  autoComplete="username"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                  error={errMessage !== "" ? true : false}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={errMessage !== "" ? true : false}
                  onChange={handleChangeInput}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" onClick={navigationToRegister}>
                  Register Now
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;
