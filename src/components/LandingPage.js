import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import SearchBar from "../components/SearchBar";
import PopularStocks from "../components/PopularStocks";

const LandingPage = () => {
  let navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearch = (searchTerm) => {
    console.log("Search term submitted:", searchTerm);
    navigate(`/stock/${searchTerm}`); // Navigate to StockDetailsPage with searchTerm
  };

  return (
    <div>
      <h1>Welcome to Our Stock Platform</h1>
      <SearchBar onSearch={handleSearch} />
      <PopularStocks /> {/* Include Popular Stocks here */}
    </div>
  );
};

export default LandingPage;
