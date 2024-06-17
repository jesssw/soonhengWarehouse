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
  const [itemsPerPage] = useState(20);

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
    setIsLowStockFilter(false);
    setShowLowStockButton(false);
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
      setSelectedModel(null);
      setSelectedCategory(null);
    }
    resetPage();
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  const filterLowStock = () => {
    setIsLowStockFilter(true);
    setShowLowStockButton(true);
    resetPage();
  };

  const clearLowStockFilter = () => {
    setIsLowStockFilter(false);
    setShowLowStockButton(false);
    resetPage();
  };

  const filteredData = (products, selectedCategory, selectedModel, selectedCompany, query, isLowStockFilter) => {
    let filteredProducts = [...products];

    if (selectedCompany) {
      filteredProducts = filteredProducts.filter(product => product.company === selectedCompany);
    }

    if (selectedModel) {
      filteredProducts = filteredProducts.filter(product => product.model === selectedModel);
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (query) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        String(product.barcode_id).toLowerCase().includes(query.toLowerCase())
      );
    }

    if (isLowStockFilter) {
      filteredProducts = filteredProducts.filter(product => product.stock_quantity <= 3);
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
          selectedModel={selectedModel}
          resetPage={resetPage}
          handleClearFilters={handleClearFilters}
          data={products}
        />
        <div className="show-low-stock-row">
        <button
          onClick={filterLowStock}
          className={isLowStockFilter ? "low-stock-button active" : "low-stock-button"}
        >
          Show Low Stock
        </button>
        {showLowStockButton && (
          <button onClick={clearLowStockFilter} className="clear-low-stock-button">
            x
          </button>
        )}
        {/* <button  onClick={filterLowStock}>Show Low Stock</button>
        {showLowStockButton && <button onClick={clearLowStockFilter} className="clear-low-stock-filter">x</button>} */}
        </div>
       
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
