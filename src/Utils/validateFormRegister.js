const err = {
  username: "",
  password: "",
  confirmPassword: "",
  isValid: false,
};

const checkExistsUserName = (username) => {
  let user = localStorage.getItem("userInfo");
  user = JSON.parse(user);
  if (user.length > 0) {
    const checkUser = user.find((item) => item.username === username);
    if (checkUser) return checkUser.username;
  }
  return null;
};

const validateFormRegister = ({ name, value }, password) => {
  if (name === "username") {
    const checkUsername = checkExistsUserName(value);
    if (value === "") {
      err.username = "Username is required!";
    }
    if (value === checkUsername) {
      err.username = "Username is exist!";
    } else {
      err.username = "true";
    }
  } else if (name === "password") {
    if (value === "") {
      err.password = "Password is required!";
    } else if (value.length < 5) {
      err.password = "Password must contain at least 5 characters!";
    } else {
      err.password = "true";
    }
  } else {
    if (value === "") {
      err.confirmPassword = "Confirm Password is required!";
    } else if (value !== password) {
      err.confirmPassword = "Password does not match!";
    } else {
      err.confirmPassword = "true";
    }
  }

  if (
    err.username === "true" &&
    err.password === "true" &&
    err.confirmPassword === "true"
  ) {
    err.isValid = true;
  }
  return err;
};

export default validateFormRegister;
