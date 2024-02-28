import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCompany(event.target.value);
  };
  // const handleModelClick = (event) => {
  //   setSelectedModel(event.target.value);
  // };
  

  
  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedPriceRange(null);
    setSelectedModel(null);
    setSelectedCompany(null);
    setQuery("");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      setSelectedCategory(value);
    } else if (name === "priceRange") {
      setSelectedPriceRange(value);
    } else if (name === "model") {
      setSelectedModel(value);
    }
    else if (name === "company") {
    setSelectedCompany(value);
  }
  };
  
  function filteredData(products, selectedCategory, selectedPriceRange, selectedModel, selectedCompany, query) {
    let filteredProducts = [...products]; // Make a copy of the original products array
  
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product =>
        product.category === selectedCategory
      );
    }
  
    if (selectedPriceRange) {
      filteredProducts = filteredProducts.filter(product =>
        product.priceRange === selectedPriceRange
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
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    console.log("Filtered Products:", filteredProducts); // Debugging: Log filtered products
  
    return filteredProducts.map(({ img, title, company, model, year, category, stock_brand, location, prevPrice, newPrice, update_date }) => {
      // Split the date string at "T" and get the first part (date part)
      const formattedDate = update_date.split("T")[0];
    
      return (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          company={company}
          model={model}
          year={year}
          category={category}
          stock_brand={stock_brand}
          location={location}
          prevPrice={prevPrice}
          update_date={formattedDate} // Pass the formatted date to the Card component
          newPrice={newPrice}

        />
      );
    });
    
  }
  

  const result = filteredData(products, selectedCategory, selectedPriceRange, selectedModel,selectedCompany, query);

  console.log("Result:", result); // Debugging: Log result before rendering

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended
        handleClick={handleClick}
        handleClearFilters={handleClearFilters}
      />
      <Products result={result} />
    </>
  );
}


export default App;
