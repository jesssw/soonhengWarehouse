import React, { useState, useEffect } from "react";
import Category from "./Category/Category";
import Model from "./Model/Model";
import Company from "./Company/Company";
import data from "../db/data";

import "./Sidebar.css";

const Sidebar = ({ handleChange, selectedCompany, selectedModel, resetPage, handleClearFilters, data }) => {
  const [companyValue, setCompanyValue] = useState("");

  useEffect(() => {
    // console.log("companyValue:", companyValue);
  }, [companyValue]);

  const handleCompanyChange = (event) => {
    const newValue = event.target.value;
    setCompanyValue(newValue);
    setCategoryValue("");
    handleChange({ target: { name: "model", value: "" } });

    handleChange(event);
    resetPage();
  };

  const [categoryValue, setCategoryValue] = useState("");

  useEffect(() => {
    // console.log("categoryValue:", categoryValue);
  }, [categoryValue]);

  const handleCategoryChange = (event) => {
    const newCatValue = event.target.value;
    setCategoryValue(newCatValue);
    handleChange({ target: { name: "category", value: "" } });

    handleChange(event);
    resetPage();
  };

  const handleModelChange = (event) => {
    handleChange(event);
    resetPage();
  };

  const clearAllFilters = () => {
    setCompanyValue("");
    setCategoryValue("");
    handleChange({ target: { name: "company", value: "" } });
    handleChange({ target: { name: "model", value: "" } });
    handleChange({ target: { name: "category", value: "" } });
    handleClearFilters();
    resetPage();
  };

  return (
    <>
      <section className="sidebar">
        <Company handleChange={handleCompanyChange} value={companyValue} />
        <Model
          handleChange={handleModelChange}
          selectedCompany={selectedCompany}
          selectedModel={selectedModel}
          data={data}
        />
        <Category
          handleChange={handleCategoryChange}
          value={categoryValue}
          selectedCompany={selectedCompany}
          selectedModel={selectedModel}
          data={data}
        />
        <button className="clearfilter" onClick={clearAllFilters}>Clear</button>
      </section>
    </>
  );
};

export default Sidebar;
