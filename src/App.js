const stockApiKey = process.env.REACT_APP_STOCK_API_KEY;
const chatApiKey = process.env.REACT_APP_CHAT_API_KEY;

//App ID: 255568800def2d89
//Auth Key: feb58f9a4503e118b536885e8a46d68957eff6ba
//API Endpoint: https://255568800def2d89.api-us.cometchat.io/v3
//Region US

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";
import LandingPage from "./pages/LandingPage";
import StockDetailsPage from "./pages/StockDetailsPage";
import { fetchDailyTimeSeries } from "./services/alphaVantageService";
// Import LoginPage and other components/pages you've created
const appId = process.env.REACT_APP_STOCK_APP_ID;
// CometChat initialization settings
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion("US") // Ensure to replace 'US' with your actual CometChat app region
  .build();

CometChat.init(appId, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // CometChat is now initialized and ready to use in your application
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Handle potential initialization errors here
  }
);

function App() {
  useEffect(() => {
    // Replace 'IBM' with the stock symbol you want to test
    fetchDailyTimeSeries("IBM")
      .then((data) => {
        console.log("Stock Data:", data);
      })
      .catch((error) => {
        console.error("Failed to fetch stock data", error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />{" "}
        {/* Assume you have a LoginPage */}
        <Route path="/stock/:id" element={<StockDetailsPage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
