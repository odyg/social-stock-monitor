// Assume this is within your LandingPage component file

import React from "react";
import SearchBar from "../components/SearchBar";
import PopularStocks from "../components/PopularStocks";

const LandingPage = () => {
  const handleSearch = (searchTerm) => {
    console.log("Search term submitted:", searchTerm);
    // Here you'd call an API to fetch stocks based on the searchTerm
  };

  return (
    <div>
      <h1>Welcome to Our Stock Platform</h1>
      <SearchBar onSearch={handleSearch} />
      <PopularStocks /> {/* Include Popular Stocks here */}
      {/* More components like Popular Stocks will go here */}
    </div>
  );
};

export default LandingPage;
