

import React from "react";
import "./Model.css";

function Model({ handleChange }) {
  const handleModelChange = (event) => {
    handleChange(event); // Invoke the handleChange function for company changes
  };

  return (
    <div>
      <h2 className="sidebar-title">Company</h2>
      <div>
        <select onChange={handleModelChange} className="model-dropdown" name="model">
          <option value="">All</option>
          <option value="Vios">Vios</option>
          <option value="City">City</option>
          <option value="Civic">Civic</option>

        </select>
      </div>
    </div>
  );
}

export default Model;
