

import React from "react";
import "./Category.css";
import data from "../../db/data";

function Category({ handleChange,value }) {
  const handleCategoryChange = (event) => {
    handleChange(event); // Invoke the handleChange function for company changes
  };

  const uniqueCategory = [...new Set(data.map(item => item.category))];
  const categoryOptions = uniqueCategory.map(category => (
    <option key={category} value={category}>{category}</option>
  ));
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
      <select  value={value} onChange={handleCategoryChange} className="category-dropdown" name="category">
      <option value="">All</option>
      {categoryOptions}

        </select>
      </div>
    </div>
  );
}

export default Category;

