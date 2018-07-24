import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Banner.scss";

const Banner = props => {
  let userDisplay;
  if (props.isAuthenticated) {
    userDisplay = (
      <NavLink
        to="/users/logout"
        exact
        activeClassName="nav__item--active"
        className="nav__item"
      >
        Log Out
      </NavLink>
    );
  } else {
    userDisplay = (
      <React.Fragment>
        <NavLink
          to="/users/login"
          exact
          activeClassName="nav__item--active"
          className="nav__item"
        >
          Log In
        </NavLink>
        <NavLink
          to="/users/register"
          exact
          activeClassName="nav__item--active"
          className="nav__item"
        >
          Register
        </NavLink>
      </React.Fragment>
    );
  }

  return (
    <nav className="nav">
      <NavLink
        to="/"
        exact
        activeClassName="nav__item--active"
        className="nav__item nav__item--left"
      >
        Recipe Box
      </NavLink>
      <NavLink
        to="/recipes"
        exact
        activeClassName="nav__item--active"
        className="nav__item"
      >
        All Recipes
      </NavLink>
      <NavLink
        to="/recipes/new"
        exact
        activeClassName="nav__item--active"
        className="nav__item"
      >
        Add Recipe
      </NavLink>
      {userDisplay}
    </nav>
  );
};

export default Banner;
