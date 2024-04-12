// src/pages/LoginPage.js

import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios with npm or yarn
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log("Login successful", response.data);
      // Redirect to the dashboard or home page on successful login
    } catch (error) {
      console.error("Login failed:", error.response);
      // Handle login failure (e.g., display an error message)
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <button type="submit">Login</button>
        {/* Register Button */}
        <p>
          Don't have an account?
          <Link to="/register">Register Here</Link>{" "}
          {/* Update the path as necessary for your app */}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
