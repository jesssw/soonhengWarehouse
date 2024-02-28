import React from "react";
import "./Price.css";

const Price = ({ handleChange }) => {
  const handleSelectChange = (event) => {
    handleChange(event); // Invoke the handleChange function for dropdown changes
  };

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <select onChange={handleSelectChange} className="price-dropdown" name="priceRange">
        <option value="">All</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-150">$100 - $150</option>
        <option value="150">Over $150</option>
      </select>
    </div>
  );
};

export default Price;
