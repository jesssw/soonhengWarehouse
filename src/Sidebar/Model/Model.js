// import React, { useState, useEffect } from "react";
// import "./Model.css";
// import data from "../../db/data";

// const uniqueModel = [...new Set(data.map(item => item.model))];
// const modelOptions = uniqueModel.map(model => (
//   <option key={model} value={model}>{model}</option>
// ));
// function Model({ handleChange, selectedCompany }) {
//   const [selectedModel, setSelectedModel] = useState("");
  
//   useEffect(() => {
//     // Reset the selected model when the selected company changes
//     setSelectedModel("");
//   }, [selectedCompany]);
  

//   const handleModelChange = (event) => {
//     setSelectedModel(event.target.value); // Update the selected model
//     handleChange(event); // Invoke the handleChange function for model changes
//   };

//   // Define models based on the selected company
//   let models = [];
//   if (selectedCompany === "Honda") {
//     models = ["All","City", "Civic"];
//   } else if (selectedCompany === "Toyota") {
//     models = ["All","Corolla", "Camry"];
//   } else {
//     models = ["All"];
//   }

//   return (
//     <div>
//       <h2 className="sidebar-title">Model</h2>
//       <div>
//         <select value={selectedModel} onChange={handleModelChange} className="model-dropdown" name="model">
//           {models.map((model, index) => (
//             <option key={index} value={model}>
//               {model}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Model;


import React, { useState, useEffect } from "react";
import "./Model.css";

function Model({ handleChange, selectedCompany, data }) {
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    // Reset the selected model when the selected company changes
    setSelectedModel("");
  }, [selectedCompany]);

  useEffect(() => {
    console.log("Selected company:", selectedCompany);
    console.log("Data:", data);
  }, [selectedCompany, data]); // Log selectedCompany and data whenever they change

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value); // Update the selected model
    handleChange(event); // Invoke the handleChange function for model changes
  };

  // Extract unique models based on the selected company from the provided data
  let models = ["All"]; // Initialize with "All" option
  if (data && Array.isArray(data)) {
    const uniqueModels = [...new Set(data.filter(item => item.company === selectedCompany).map(item => item.model))];
    models = models.concat(uniqueModels);
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
