// Example function to fetch stock details
// export const fetchStockDetails = async (symbol) => {
//   const response = await fetch(
//     `https://api.example.com/stock/${symbol}?apikey=${process.env.REACT_APP_STOCK_API_KEY}`
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch stock details.");
//   }
//   return response.json();
// };

// src/services/alphaVantageService.js
const stockApiKey = process.env.REACT_APP_STOCK_API_KEY;

// Function to fetch daily time series data for a given stock symbol
export const fetchDailyTimeSeries = async (symbol) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${stockApiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Alpha Vantage API might return a note about API call limits
    if (data.Note) {
      console.warn(data.Note);
      return null; // Handle as you see fit
    }

    return data["Time Series (Daily)"]; // Adjust based on the exact data you need
  } catch (error) {
    console.error("Couldn't fetch daily time series", error);
    throw error; // Rethrow or handle as needed
  }
};
