import React, { useState } from "react";
import Navbar from "../components/navbar";
import { singUpWithEmailAndPassword } from "../firebae/firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const isUserLogin = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [errorMessage, setErrorMessage] = useState()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("")
    try {
      await singUpWithEmailAndPassword(user.email, user.password);
      navigate("/");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <form className="mt-5 pt-5" onSubmit={handleSubmit}>
        <label htmlFor="email">User mame</label>
        <input
          type="userName"
          name="userName"
          placeholder="Enter user mame"
          onChange={handleChange}
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />

        <label htmlFor="email">password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />

        <button type="submit"> Enviar</button>
        {errorMessage &&<div className="text-danger"> {errorMessage.message}</div>}
      </form>
    </div>
  );
}

export default Register;
