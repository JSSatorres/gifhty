import React, { useState } from "react";
import Navbar from "../components/navbar";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const hadleSubmit = () => {

  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value});
  };

  return (
    <div>
      <Navbar />
      <form className="mt-5 pt-5">
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
      </form>
    </div>
  );
}

export default Register;
