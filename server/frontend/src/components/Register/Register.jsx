
import React, { useState } from "react";
import "./Register.css";
import Header from "../Header/Header";

function Register() {
  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/djangoapp/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setMessage("Registration request completed.");
    } catch (error) {
      setMessage("Registration service unavailable.");
    }
  };

  return (
    <div>
      <Header />
      <div className="register_container">
        <h1 className="header">Sign-up</h1>

        <form className="inputs" onSubmit={handleSubmit}>
          <input
            className="input_field"
            name="userName"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            className="input_field"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            required
          />

          <input
            className="input_field"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />

          <input
            className="input_field"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            className="input_field"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <div className="submit_panel">
            <button className="submit" type="submit">
              Register
            </button>
          </div>
        </form>

        <p role="status">{message}</p>
      </div>
    </div>
  );
}

export default Register;
