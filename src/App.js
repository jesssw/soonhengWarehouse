import React, { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Pagination from './Pagination/Pagination';
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [query, setQuery] = useState("");
  const [isLowStockFilter, setIsLowStockFilter] = useState(false);
  const [showLowStockButton, setShowLowStockButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // number of products displayed

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = (value) => {
    setSelectedCompany(value);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedCompany(null);
    setSelectedModel(null);
    setQuery("");
    setIsLowStockFilter(false); // Clear the low stock filter
    setShowLowStockButton(false); // Hide the low stock "x" button
    resetPage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      setSelectedCategory(value);
    } else if (name === "model") {
      setSelectedModel(value);
    } else if (name === "company") {
      setSelectedCompany(value);
    }
  };

  const resetPage = () => {
    setCurrentPage(1); // Reset the currentPage state variable to 1
  };

  const filterLowStock = () => {
    setIsLowStockFilter(true);
    setShowLowStockButton(true); // Show the low stock "x" button
    resetPage();
  };

  const clearLowStockFilter = () => {
    setIsLowStockFilter(false);
    setShowLowStockButton(false); // Hide the low stock "x" button
    resetPage();
  };

  const filteredData = (products, selectedCategory, selectedModel, selectedCompany, query, isLowStockFilter) => {
    let filteredProducts = [...products]; // Make a copy of the original products array

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product =>
        product.category === selectedCategory
      );
    }

    if (selectedModel) {
      filteredProducts = filteredProducts.filter(product =>
        product.model === selectedModel
      );
    }

    if (selectedCompany) {
      filteredProducts = filteredProducts.filter(product =>
        product.company === selectedCompany
      );
    }

    if (query) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        String(product.barcode_id).toLowerCase().includes(query.toLowerCase())
      );
    }

    if (isLowStockFilter) {
      filteredProducts = filteredProducts.filter(product =>
        product.stock_quantity <= 3
      );
    }

    return filteredProducts;
  };

  const result = filteredData(products, selectedCategory, selectedModel, selectedCompany, query, isLowStockFilter);
  const totalItems = result.length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="filter-header">
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Sidebar 
          handleChange={handleChange}
          selectedCompany={selectedCompany}
          resetPage={resetPage}
          handleClearFilters={handleClearFilters} // Pass handleClearFilters to Sidebar
        />
        <button onClick={filterLowStock}>Show Low Stock</button>
        {showLowStockButton && <button onClick={clearLowStockFilter}>x</button>}
      </div>

      <div className="content-wrapper">
        <Products
          selectedCategory={selectedCategory}
          selectedCompany={selectedCompany}
          selectedModel={selectedModel}
          result={currentItems}
        />
      </div>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
      />
    </>
  );
}

export default App;
