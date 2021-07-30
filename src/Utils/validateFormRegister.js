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
  const err = {
    username: "",
    password: "",
    confirmPassword: "",
    isValid: false,
  };
  if (name === "username") {
    const checkUsername = checkExistsUserName(value);
    if (value === "") {
      err.username = "Username is required!";
      err.isValid = false;
    } else if (value === checkUsername) {
      err.username = "Username is exist!";
      err.isValid = false;
    } else {
      err.username = "true";
      err.isValid = true;
    }
  } else if (name === "password") {
    if (value === "") {
      err.password = "Password is required!";
      err.isValid = false;
    } else if (value.length < 5) {
      err.password = "Password must contain at least 5 characters!";
      err.isValid = false;
    } else {
      err.password = "true";
      err.isValid = true;
    }
  } else {
    if (value === "") {
      err.confirmPassword = "Confirm Password is required!";
      err.isValid = false;
    } else if (value !== password) {
      err.confirmPassword = "Password does not match!";
      err.isValid = false;
    } else {
      err.confirmPassword = "true";
      err.isValid = true;
    }
  }
  return err;
};

export default validateFormRegister;
