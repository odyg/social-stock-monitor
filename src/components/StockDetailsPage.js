import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDailyTimeSeries } from "../services/alphaVantageService";
import { Line } from "react-chartjs-2";

const StockDetailsPage = ({ addToPortfolio }) => {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState([]);
  const [quantity, setQuantity] = useState(1); // Default quantity to 1
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchDailyTimeSeries(symbol)
      .then((data) => {
        // Assuming 'data' is an object with a property that contains historical stock data
        const formattedData = Object.entries(data["Time Series (Daily)"]).map(
          ([date, info]) => ({
            date,
            close: info["4. close"],
            volume: info["5. volume"],
          })
        );
        setStockData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch stock data:", err);
        setError("Failed to load stock data");
        setLoading(false);
      });
  }, [symbol]);

  // Prepare chart data
  const chartData = {
    labels: stockData.map((entry) => entry.date),
    datasets: [
      {
        label: "Stock Price",
        data: stockData.map((entry) => entry.close),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const handleAddToPortfolio = () => {
    if (quantity > 0) {
      addToPortfolio({ symbol, quantity });
      alert("Stock added to portfolio!");
    } else {
      alert("Please enter a valid quantity");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!stockData.length) return <div>No data found for {symbol}</div>;

  return (
    <div>
      <h2>Stock Details for {symbol}</h2>
      {/* Display the latest close and volume using the last entry in stockData */}
      <div>
        <p>Latest Close: {stockData[stockData.length - 1]?.close}</p>
        <p>Volume: {stockData[stockData.length - 1]?.volume}</p>
      </div>
      {/* Quantity input and Add to Portfolio button */}
      <div>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
        <button onClick={handleAddToPortfolio}>Add to Portfolio</button>
      </div>
      {/* Conditionally render the Line chart only if stockData has entries */}
      {stockData.length > 0 && <Line data={chartData} />}
    </div>
  );
};

export default StockDetailsPage;
