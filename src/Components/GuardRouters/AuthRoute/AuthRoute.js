import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return !isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }}
      />
    </div>
  );
};

export default AuthRoute;
