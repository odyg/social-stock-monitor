import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CometChat } from "@cometchat-pro/chat";
import LandingPage from "./components/LandingPage";
import StockDetailsPage from "./components/StockDetailsPage";
import Watchlist from "./components/Watchlist";
import LoginPage from "./components/LoginPage";
import Portfolio from "./components/Portfolio";
import RegisterPage from "./components/RegisterPage";
// import { fetchDailyTimeSeries } from "./services/alphaVantageService";

// const appId = process.env.REACT_APP_STOCK_APP_ID;
// // CometChat initialization settings
// const appSetting = new CometChat.AppSettingsBuilder()
//   .subscribePresenceForAllUsers()
//   .setRegion("US")
//   .build();

// CometChat.init(appId, appSetting).then(
//   () => {
//     console.log("Initialization completed successfully");
//     // CometChat is now initialized and ready to use in your application
//   },
//   (error) => {
//     console.log("Initialization failed with error:", error);
//     // Handle potential initialization errors here
//   }
// );

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  const addToWatchlist = (stock) => {
    if (!watchlist.some((item) => item.symbol === stock.symbol)) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, stock]);
    }
  };

  const removeFromWatchlist = (symbol) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((stock) => stock.symbol !== symbol)
    );
  };

  const addToPortfolio = (holding) => {
    const existingHolding = portfolio.find(
      (item) => item.symbol === holding.symbol
    );
    if (existingHolding) {
      setPortfolio(
        portfolio.map((item) =>
          item.symbol === holding.symbol
            ? { ...item, quantity: item.quantity + holding.quantity }
            : item
        )
      );
    } else {
      setPortfolio([...portfolio, holding]);
    }
  };

  const removeFromPortfolio = (symbol) => {
    setPortfolio(portfolio.filter((holding) => holding.symbol !== symbol));
  };

  // return (
  //   <Router>
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={<LandingPage addToWatchlist={addToWatchlist} />}
  //       />
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route
  //         path="/stock/:id"
  //         element={<StockDetailsPage addToWatchlist={addToWatchlist} />}
  //       />
  //       <Route
  //         path="/watchlist"
  //         element={
  //           <Watchlist watchlist={watchlist} onRemove={removeFromWatchlist} />
  //         }
  //       />
  //       <Route
  //         path="/portfolio"
  //         element={
  //           <Portfolio portfolio={portfolio} onRemove={removeFromPortfolio} />
  //         }
  //       />
  //       <Route
  //         path="/stock/:id"
  //         element={
  //           <StockDetailsPage
  //             addToWatchlist={addToWatchlist}
  //             addToPortfolio={addToPortfolio}
  //           />
  //         }
  //       />

  //       {/* Add more routes as needed */}
  //     </Routes>
  //   </Router>
  // );
  return (
    <Router>
      <Routes>
        {/*<Route
          path="/"
          element={<LandingPage addToWatchlist={addToWatchlist} />}
        />*/}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/stock/:id"
          element={<StockDetailsPage addToWatchlist={addToWatchlist} />}
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist watchlist={watchlist} onRemove={removeFromWatchlist} />
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio portfolio={portfolio} onRemove={removeFromPortfolio} />
          }
        />
        <Route
          path="/stock/:id"
          element={
            <StockDetailsPage
              addToWatchlist={addToWatchlist}
              addToPortfolio={addToPortfolio}
            />
          }
        />
        <Route
          path="/success/:userId"
          element={<LandingPage addToWatchlist={addToWatchlist} />}
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
