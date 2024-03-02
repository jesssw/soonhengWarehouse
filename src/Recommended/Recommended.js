import React, { useState } from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick, handleClearFilters }) => {
  const [activeButton, setActiveButton] = useState(""); // State to track the active button

  const handleButtonClick = (value) => {
    handleClick(value); // Call the handleClick function passed from parent component
    setActiveButton(value); // Set the active button based on the clicked value
  };

  const handleClear = () => {
    setActiveButton(""); // Clear the active button state
    handleClearFilters(); // Call the handleClearFilters function passed from parent component
  };

  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClear} title="Clear Filters" />
        <Button
          onClickHandler={() => handleButtonClick("")}
          title="All Products"
          isActive={activeButton === ""}
        />
        <Button
          onClickHandler={() => handleButtonClick("Honda")}
          title="Honda"
          isActive={activeButton === "Honda"}
        />
        <Button
          onClickHandler={() => handleButtonClick("Toyota")}
          title="Toyota"
          isActive={activeButton === "Toyota"}
        />
        <Button
          onClickHandler={() => handleButtonClick("Puma")}
          title="Puma"
          isActive={activeButton === "Puma"}
        />
        <Button
          onClickHandler={() => handleButtonClick("Vans")}
          title="Vans"
          isActive={activeButton === "Vans"}
        />
      </div>
    </div>
  );
};

export default Recommended;
