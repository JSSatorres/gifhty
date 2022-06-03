import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { userSignOut } from "../../firebae/firebase";

const Navbar = () => {
  const { user } = useAuth();

  function handelSignOut() {
    userSignOut();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid border-bottom border-warning">
        {user ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="nav-link">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/profile" className="nav-link text-warning">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/upload" className="nav-link text-warning me-auto">
                  Upload
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/mygifts" className="nav-link text-warning ">
                  my Gifts
                </Link>
              </li>
            </ul>
            <div className="nav-item ms-auto">
              <Link
                onClick={handelSignOut}
                to="/"
                className="nav-link text-warning"
              >
                Sign out
              </Link>
            </div>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="nav-link">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/register" className="nav-link text-warning">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-warning">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
