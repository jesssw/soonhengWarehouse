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

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = (event) => {
    console.log("handleClick called with event:", event); // Log the event object
    const { name, value } = event.target;
    if (name === "company") {
      console.log("Selected company:", value); // Log the selected company
      setSelectedCompany(value);
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      setSelectedCategory(value);
    } else if (name === "priceRange") {
      setSelectedPriceRange(value);
    } else if (name === "color") {
      setSelectedColor(value);
    }
    else if (name === "company") {
    setSelectedCompany(value);
  }
  };

  function filteredData(products, selectedCategory, selectedPriceRange, selectedColor, selectedCompany, query) {
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
  
    if (selectedColor) {
      filteredProducts = filteredProducts.filter(product =>
        product.color === selectedColor
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
  
    return filteredProducts.map(({ img, title, star, location, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        location={location}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }
  

  const result = filteredData(products, selectedCategory, selectedPriceRange, selectedColor,selectedCompany, query);

  console.log("Result:", result); // Debugging: Log result before rendering

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      {/* <Recommended handleClick={handleChange} /> */}
      <Recommended handleClick={handleClick} /> {/* Pass the handleClick function */}

      <Products result={result} />
    </>
  );
}


export default App;
