import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Banner.scss";

const Banner = props => (
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
    <NavLink
      to="/user/login"
      exact
      activeClassName="nav__item--active"
      className="nav__item"
    >
      Log In
    </NavLink>
    <NavLink
      to="/user/register"
      exact
      activeClassName="nav__item--active"
      className="nav__item"
    >
      Register
    </NavLink>
  </nav>
);

export default Banner;
