import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useAuth } from "../context/AuthContext";
import { singInWithEmailAndPassword } from "../firebae/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      await singInWithEmailAndPassword(user.email, user.password);
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

        <button type="submit" className="btn btn-warning"> Enviar</button>
        {errorMessage &&<div className="text-danger"> {errorMessage.message}</div>}
      </form>
    </div>
  );
};

export default Login;
