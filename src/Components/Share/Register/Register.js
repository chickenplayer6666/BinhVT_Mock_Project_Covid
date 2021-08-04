import React, { useState } from "react";

import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
  FormStyles,
  Alert,
} from "../../../MaterialUI/ExportComponent";
import validateFormRegister from "../../../Utils/validateFormRegister";
import { useHistory } from "react-router-dom";

function Register(props) {
  const classes = FormStyles();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errMessage, setErrMessage] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    isValid: false,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const history = useHistory();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    const err = validateFormRegister({ name, value }, userInfo.password);
    setErrMessage(err);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    handlePushUserInfo();
  };

  const handlePushUserInfo = () => {
    let users = localStorage.getItem("userInfo");
    users = JSON.parse(users);
    if (!users) {
      users = [];
    }

    if (errMessage.isValid) {
      users.push({
        username: userInfo.username,
        password: userInfo.password,
      });
      setSuccessMessage("Register is Success!");
      localStorage.setItem("userInfo", JSON.stringify(users));
      setTimeout(() => {
        setSuccessMessage("");
        history.push("/login");
      }, 1500);
    }
  };

  const navigationLogin = () => {
    history.push("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {successMessage !== "" && (
                <Alert
                  variant="filled"
                  severity="success"
                  style={{ marginBottom: "1.5em" }}
                >
                  {successMessage}
                </Alert>
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
                error={
                  errMessage.username !== "" && errMessage.username !== "true"
                    ? true
                    : false
                }
                helperText={
                  errMessage.username !== "" && errMessage.username !== "true"
                    ? errMessage.username
                    : ""
                }
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
                error={
                  errMessage.password !== "" && errMessage.password !== "true"
                    ? true
                    : false
                }
                helperText={
                  errMessage.password !== "" && errMessage.password !== "true"
                    ? errMessage.password
                    : ""
                }
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                autoComplete="current-password"
                error={
                  errMessage.confirmPassword !== "" &&
                  errMessage.confirmPassword !== "true"
                    ? true
                    : false
                }
                helperText={
                  errMessage.confirmPassword !== "" &&
                  errMessage.confirmPassword !== "true"
                    ? errMessage.confirmPassword
                    : ""
                }
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
            onClick={handleRegister}
            disabled={errMessage.isValid ? false : true}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2" onClick={navigationLogin}>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Register;
