import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {
  AuthRoute,
  PrivateRoute,
  News,
  Error,
  Loading,
  Login,
  NotFound,
  Register,
  Countries,
  DetailCountry,
  Overview,
} from "./Components/index";
import "./App.css";

function App() {
  const isLoading = useSelector(
    (state) => state.BooleansOfPageReducer.isLoading
  );
  const isError = useSelector((state) => state.BooleansOfPageReducer.isError);
  
  useEffect(() => {
    handleSetUserInfo();
  }, []);

  const handleSetUserInfo = () => {
    let user = localStorage.getItem("userInfo");
    user = JSON.parse(user);
    if (!user)
      return localStorage.setItem(
        "userInfo",
        JSON.stringify([
          {
            username: "admin",
            password: "admin",
          },
        ])
      );
    return user;
  };
  return (
    <>
      <div className="App">{isLoading && <Loading />}</div>
      {isError && <Error />}
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/news" />
          </Route>
          <Route path="/news" component={News} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/overview" component={Overview} />
          <PrivateRoute path="/countries" component={Countries} />
          <AuthRoute exact path="/login" component={Login} />
          <PrivateRoute path="/:country" component={DetailCountry} />
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
