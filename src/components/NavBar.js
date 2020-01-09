import React, { useContext, Fragment } from 'react';
import AuthContext from '../context/auth/authContext';

import { Link } from 'react-router-dom';

const NavBar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const LoggedOut = (
    <Fragment>
      <Link to="/register" className="button btn-primary">
        <strong>Sign up</strong>
      </Link>
      <Link to="/login" className="button is-light">
        Log in
      </Link>
    </Fragment>
  );

  const LoggedIn = (
    <Fragment>
      <Link to="/login" onClick={onLogout} className="button is-light">
        Logout
      </Link>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/about" className="navbar-item">
        About
      </Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">App</a>
        <div className="navbar-dropdown">
          <Link className="navbar-item" to="/meals">
            My Calorie Tracker
          </Link>
          <a className="navbar-item">My Personal Coach</a>
          <a className="navbar-item">Food Recipes</a>
          <hr className="navbar-divider" />
          <a className="navbar-item">Report an issue</a>
        </div>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/about" className="navbar-item">
        About
      </Link>
    </Fragment>
  );

  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {isAuthenticated ? LoggedIn : LoggedOut}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
