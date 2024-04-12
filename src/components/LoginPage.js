// src/pages/LoginPage.js

import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios with npm or yarn
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response.data.success) {
        // Now you can use the user ID that was returned to navigate to a specific user page
        // Make sure your React Router has a route set up to handle "/success/:userId"
        navigate(`/success/${response.data.userId}`);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred during login.");
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
