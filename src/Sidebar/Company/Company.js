
import React from "react";
import "./Company.css";
import data from "../../db/data";

function Company({ handleChange,value }) {
  const handleCompanyChange = (event) => {
    handleChange(event); // Invoke the handleChange function for company changes
  };
  const uniqueCompanies = [...new Set(data.map(item => item.company))];
  const companyOptions = uniqueCompanies.map(company => (
    <option key={company} value={company}>{company}</option>
  ));
  return (
    <div>
      <h2 className="sidebar-title">Company</h2>
      <div>
      <select  value={value} onChange={handleCompanyChange} className="company-dropdown" name="company">
          <option value="">All</option>
          {companyOptions}
          {/* <option value="Honda">Honda</option>
          <option value="Toyota">Toyota</option> */}
          
        </select>
      </div>
    </div>
  );
}

export default Company;
