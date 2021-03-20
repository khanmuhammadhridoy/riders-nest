import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "fontsource-roboto";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";

import Destination from "./Components/Destination/Destination";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
