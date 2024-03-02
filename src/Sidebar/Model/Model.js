import React, { useState, useEffect } from "react";
import "./Model.css";

function Model({ handleChange, selectedCompany }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    // Define models based on the selected company
    if (selectedCompany === "Honda") {
      setModels(["City", "Civic"]);
    } else if (selectedCompany === "Toyota") {
      setModels(["Vios", "Corolla"]);
    } else {
      // If no company is selected, show all models
      setModels(["City", "Civic", "Vios", "Corolla"]);
    }
  }, [selectedCompany]);

  const handleModelChange = (event) => {
    handleChange(event); // Invoke the handleChange function for model changes
  };

  return (
    <div>
      <h2 className="sidebar-title">Model</h2>
      <div>
        <select onChange={handleModelChange} className="model-dropdown" name="model">
          <option value="">All</option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Model;
