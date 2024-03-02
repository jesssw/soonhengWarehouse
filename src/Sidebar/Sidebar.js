import React, { useState, useEffect } from "react";
import Category from "./Category/Category";
import Model from "./Model/Model";
import Company from "./Company/Company";


import "./Sidebar.css";

const Sidebar = ({ handleChange, selectedCompany, resetPage }) => {
  const [companyValue, setCompanyValue] = useState("");

  useEffect(() => {
    console.log("companyValue:", companyValue);
  }, [companyValue]); // Log companyValue whenever it changes

  const handleCompanyChange = (event) => {
    const newValue = event.target.value;
    setCompanyValue(newValue); // Update the companyValue state
    handleChange(event);
    resetPage();
  };
  

  const handleModelChange = (event) => {
    handleChange(event);
    resetPage();
  };

  const handleCategoryChange = (event) => {
    handleChange(event);
    resetPage();
  };

  const clearAllFilters = () => {
    setCompanyValue("");
    handleChange({ target: { name: "company", value: "" } });
    handleChange({ target: { name: "model", value: "" } });
    handleChange({ target: { name: "category", value: "" } });
    resetPage();
  };

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        
        <Company handleChange={handleCompanyChange} value={companyValue} />
        <Model
          handleChange={handleModelChange}
          selectedCompany={selectedCompany}
        />
        <Category handleChange={handleCategoryChange} />
        <button onClick={clearAllFilters}>Clear All Filters</button>
      </section>
    </>
  );
};

export default Sidebar;