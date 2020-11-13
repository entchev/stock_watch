import React from 'react';
import { Link } from 'react-router-dom';

const StockIndexItem = ({ stock }) => (
  <li className="stock-index-item">
    <Link to={`/stock/${stock.id}`}>
      <span>{stock.symbol}</span>
      <img src={stock.image_url} alt={stock.name} />
      <span>{stock.name}</span>
    </Link>
  </li>
);

export default StockIndexItem;
