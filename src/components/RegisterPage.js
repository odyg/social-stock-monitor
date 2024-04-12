import React, { useState } from "react";
import axios from "axios"; // assuming you've installed axios
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [newUsername, setUsername] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  let navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    try {
      const response = await axios.post("http://localhost:3001/register", {
        newUsername,
        newEmail,
        newPassword,
      });
      if (response.data.success) {
        // Display an alert to the user
        alert(
          "Registration successful. You will be redirected to the login page."
        );

        // Redirect to the login page
        // If you're using React Router, you might use the `useNavigate` hook
        navigate("/login"); // This is assuming you've set up `navigate` using the `useNavigate` hook from 'react-router-dom'
      } else {
        // Handle the case where registration was not successful
        alert(response.data.message);
      }
    } catch (error) {
      // Handle errors, such as displaying a message to the user
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="email"
        value={newEmail}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
