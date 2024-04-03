import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Pagination from './Pagination/Pagination';

import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = (value) => {

    setSelectedCompany(value);
  };
  

  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // number of products displayed

  const handleClearFilters = () => {
    // setSelectedCategory(null);
    // setSelectedPriceRange(null);
    setSelectedModel(null); //check why not working
    setSelectedCompany(null); //refer to this
    setQuery("");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      setSelectedCategory(value);
    } 
    // else if (name === "priceRange") {
    //   setSelectedPriceRange(value);
    // }
     else if (name === "model") {
      setSelectedModel(value);
    }
    else if (name === "company") {
    setSelectedCompany(value);
  }
  };

  const resetPage = () => {
    setCurrentPage(1); // Reset the currentPage state variable to 1
  };
  
  function filteredData(products, selectedCategory, selectedModel, selectedCompany, query) {
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
        product.title.toLowerCase().includes(query.toLowerCase())//search by title
       || String(product.barcode_id).toLowerCase().includes(query.toLowerCase()) //search by barcode


      );
    }

    return filteredProducts;
  }

  const result = filteredData(products, selectedCategory, selectedModel, selectedCompany, query);
  const totalItems = result.length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // console.log("Result:", result); // Debugging: Log result before rendering
  // console.log("Total items:", result.length);

  return (
    <>
    <div class="filter-header">
    <Navigation query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} selectedCompany={selectedCompany} resetPage={resetPage} />
    </div>
    

      {/* <Recommended handleClearFilters={handleClearFilters}  handleClick={handleClick} /> */}
      <div class="content-wrapper">
        <Products
          selectedCategory={selectedCategory}
          selectedCompany={selectedCompany}
          selectedModel={selectedModel}
          result={currentItems}
        />

      </div>
      <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={paginate} />



    </>
  );
}


export default App;
