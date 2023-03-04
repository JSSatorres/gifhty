import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { userSignOut } from '../../firebase/firebase'
import {  FiLogOut } from 'react-icons/fi'
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
  const { user } = useAuth()

  function handelSignOut() {
    userSignOut()
  }

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid border-bottom border-warning ">
        {user ? (
          <div className="d-flex justify-content-around w-100" id="navbarSupportedContent">
            <Link to="/" className="nav-link text-warning ">
              <span style={{fontSize:'20px'}}><AiFillHome /></span>              
            </Link>
            <ul className="navbar-nav w-100 mb-2 mb-lg-0 d-flex flex-row justify-content-center">
              <li className="nav-item mx-2">
                <Link to="/profile" className="nav-link text-warning">
                  Profile
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/upload" className="nav-link text-warning me-auto">
                  Upload
                </Link>
              </li>
              <li className="nav-item  mx-2">
                <Link to="/mygifts" className="nav-link text-warning ">
                  my Gifts
                </Link>
              </li>
            </ul>
            <div className="nav-item ">
              <Link
                onClick={handelSignOut}
                to="/"
                className="nav-link text-warning d-flex flex-row"
              > Exit
                <span className='mx-1'><FiLogOut /></span>                
              </Link>
            </div>
          </div>
        ) : (
          <div className="" id="navbarSupportedContent">
  
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                  />
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/register" className="nav-link text-warning">
                  Register
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/login" className="nav-link text-warning">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
