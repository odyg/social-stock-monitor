// src/components/Watchlist.js

import React from "react";

const Watchlist = ({ watchlist, onRemove }) => {
  if (!watchlist.length) return <p>Your watchlist is empty.</p>;

  return (
    <div>
      <h2>Your Watchlist</h2>
      <ul>
        {watchlist.map((stock) => (
          <li key={stock.symbol}>
            {stock.name} ({stock.symbol})
            <button onClick={() => onRemove(stock.symbol)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
