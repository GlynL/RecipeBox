import React from "react";
import { Link } from "react-router-dom";

const Home = ({ loggedIn }) => {
  let display;
  if (loggedIn) {
    display = (
      <React.Fragment>
        <Link to="/users/login">Login Here</Link>
        <Link to="/users/register">Signup Here</Link>
      </React.Fragment>
    );
  } else {
    display = (
      <React.Fragment>
        <Link to="/recipes">View Recipes</Link>
      </React.Fragment>
    );
  }

  return <div>{display}</div>;
};

export default Home;
