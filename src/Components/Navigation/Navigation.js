import React, { useContext } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
const Navigation = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className="navigation">
      <Link to="/">
        <h4 className="brand">Riders Nest</h4>
      </Link>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">
          {loggedInUser.displayName === undefined
            ? "Login"
            : loggedInUser.displayName}
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
