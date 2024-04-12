import React from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import both hooks
import SearchBar from "../components/SearchBar";
import PopularStocks from "../components/PopularStocks";

const LandingPage = () => {
  let navigate = useNavigate(); // Initialize useNavigate hook
  let { userId } = useParams(); // Extract the userId from the route parameters

  // You can now use the userId in your component, for example to fetch user-specific data

  const handleSearch = (searchTerm) => {
    console.log("Search term submitted:", searchTerm);
    navigate(`/stock/${searchTerm}`); // Navigate to StockDetailsPage with searchTerm
  };

  return (
    <div>
      <h1>Welcome to Our Stock Platform</h1>
      {userId && <div>Hello, User {userId}</div>} {/* Display the userId */}
      <SearchBar onSearch={handleSearch} />
      <PopularStocks /> {/* Include Popular Stocks here */}
    </div>
  );
};

export default LandingPage;
