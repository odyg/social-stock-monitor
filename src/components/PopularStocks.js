import React, { useState, useEffect } from "react";
import { fetchPopularStocks } from "../services/alphaVantageService";

const PopularStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPopularStocks()
      .then((data) => {
        setStocks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch popular stocks:", err);
        setError("Failed to load popular stocks");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Popular Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.symbol} - ${stock.price} ({stock.changePercent})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularStocks;
