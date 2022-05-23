import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
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
                <Link to="/upload" className="nav-link text-warning">
                  Upload
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mygifts" className="nav-link text-warning">
                  my Gifts
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/mygifts" className="nav-link text-warning">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mygifts" className="nav-link text-warning">
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
