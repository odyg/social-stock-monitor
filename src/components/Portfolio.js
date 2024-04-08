// src/components/Portfolio.js

import React from "react";

const Portfolio = ({ portfolio, onRemove }) => {
  if (!portfolio.length) return <p>Your portfolio is empty.</p>;

  return (
    <div>
      <h2>Your Portfolio</h2>
      <ul>
        {portfolio.map((holding) => (
          <li key={holding.symbol}>
            {holding.symbol} - Quantity: {holding.quantity}
            <button onClick={() => onRemove(holding.symbol)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
