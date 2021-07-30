const CheckToken = () => {
    if (localStorage.getItem("isAuthenticated").token) {
      return true;
    } else {
      return null;
    }
}

export default CheckToken;