import React, { useState, useEffect } from "react";
import "./Model.css";

function Model({ handleChange, selectedCompany }) {
  const [selectedModel, setSelectedModel] = useState("");
  
  useEffect(() => {
    // Reset the selected model when the selected company changes
    setSelectedModel("");
  }, [selectedCompany]);
  

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value); // Update the selected model
    handleChange(event); // Invoke the handleChange function for model changes
  };

  // Define models based on the selected company
  let models = [];
  if (selectedCompany === "Honda") {
    models = ["All","City", "Civic"];
  } else if (selectedCompany === "Toyota") {
    models = ["All","Corolla", "Camry"];
  } else {
    models = ["All"];
  }

  return (
    <div>
      <h2 className="sidebar-title">Model</h2>
      <div>
        <select value={selectedModel} onChange={handleModelChange} className="model-dropdown" name="model">
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
