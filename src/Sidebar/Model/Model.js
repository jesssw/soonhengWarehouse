import React, { useState, useEffect } from "react";
import "./Model.css";

function Model({ handleChange, selectedCompany, selectedModel, data }) {
  const [selectedModelValue, setSelectedModelValue] = useState("");

  useEffect(() => {
    // Reset the selected model when the selected company changes
    setSelectedModelValue("");
  }, [selectedCompany]);

  useEffect(() => {
    console.log("Selected company:", selectedCompany);
    console.log("Data:", data);
  }, [selectedCompany, data]);

  const handleModelChange = (event) => {
    setSelectedModelValue(event.target.value);
    handleChange(event);
  };

  // Extract unique models based on the selected company from the provided data
  let models = ["All"];
  if (data && Array.isArray(data)) {
    const uniqueModels = [...new Set(data.filter(item => item.company === selectedCompany).map(item => item.model))];
    models = models.concat(uniqueModels);
  }

  return (
    <div>
      <h2 className="sidebar-title">Model</h2>
      <div>
        <select value={selectedModelValue} onChange={handleModelChange} className="model-dropdown" name="model">
          {models.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Model;
