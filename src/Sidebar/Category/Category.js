import React from "react";
import "./Category.css";
import data from "../../db/data";

function Category({ handleChange, value, selectedCompany, selectedModel, data }) {
  const handleCategoryChange = (event) => {
    handleChange(event);
  };

  // Filter categories based on selected company and model
  let filteredData = data;
  if (selectedCompany) {
    filteredData = filteredData.filter(item => item.company === selectedCompany);
  }
  if (selectedModel) {
    filteredData = filteredData.filter(item => item.model === selectedModel);
  }

  const uniqueCategory = [...new Set(filteredData.map(item => item.category))];
  const categoryOptions = uniqueCategory.map(category => (
    <option key={category} value={category}>{category}</option>
  ));

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <select value={value} onChange={handleCategoryChange} className="category-dropdown" name="category">
          <option value="">All</option>
          {categoryOptions}
        </select>
      </div>
    </div>
  );
}

export default Category;
