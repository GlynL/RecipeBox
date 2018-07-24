import React from "react";
import { Link } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
  let display;
  if (isAuthenticated) {
    display = (
      <React.Fragment>
        <Link to="/recipes">View Recipes</Link>
      </React.Fragment>
    );
  } else {
    display = (
      <React.Fragment>
        <Link to="/users/login">Login Here</Link>
        <Link to="/users/register">Signup Here</Link>
      </React.Fragment>
    );
  }

  return <div>{display}</div>;
};

export default Home;
