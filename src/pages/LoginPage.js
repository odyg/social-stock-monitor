// src/pages/LoginPage.js

import React, { useState } from "react";
import { CometChat } from "@cometchat-pro/chat";

const authKey = process.env.REACT_APP_STOCK_AUTH_KEY;

const LoginPage = () => {
  const [userId, setUserId] = useState("");

  const handleLogin = () => {
    // Assuming 'YOUR_AUTH_KEY' is replaced with your actual CometChat Auth Key
    CometChat.login(userId, authKey).then(
      (user) => {
        console.log("Login Successful:", { user });
        // Navigate to the main chat page or dashboard upon successful login
      },
      (error) => {
        console.log("Login failed with exception:", { error });
        // Handle login failure (e.g., display an error message)
      }
    );
  };

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
