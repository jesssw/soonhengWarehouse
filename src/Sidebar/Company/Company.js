
import React from "react";
import "./Company.css";

function Company({ handleChange,value }) {
  const handleCompanyChange = (event) => {
    handleChange(event); // Invoke the handleChange function for company changes
  };

  return (
    <div>
      <h2 className="sidebar-title">Company</h2>
      <div>
      <select  value={value} onChange={handleCompanyChange} className="company-dropdown" name="company">
          <option value="">All</option>
          <option value="Honda">Honda</option>
          <option value="Toyota">Toyota</option>
        </select>
      </div>
    </div>
  );
}

export default Company;
