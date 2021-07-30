import React from "react";
import { Redirect, Route } from "react-router-dom";

import { MainLayout } from "../../index";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return isAuthenticated ? (
            <MainLayout>
              <Component {...props} />
            </MainLayout>
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }}
      />
    </div>
  );
}
