import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Home.scss";

const Home = ({ isAuthenticated }) => {
  let display;
  if (isAuthenticated) {
    display = (
      <React.Fragment>
        <p>View or add new recipes.</p>
        <div>
          <Link className="btn" to="/recipes">
            View Recipes
          </Link>
          <Link className="btn" to="/recipes/new">
            Add Recipe
          </Link>
        </div>
      </React.Fragment>
    );
  } else {
    display = (
      <React.Fragment>
        <p>Login or create an account to start adding recipes.</p>
        <div>
          <Link className="btn" to="/users/login">
            Login
          </Link>
          <Link className="btn" to="/users/register">
            Signup
          </Link>
        </div>
      </React.Fragment>
    );
  }

  return <div className="home-display">{display}</div>;
};

export default Home;
