import React from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick, handleClearFilters }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
        <Button onClickHandler={handleClearFilters} title="Clear Filters" />

          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Honda" title="Honda" />
          <Button onClickHandler={handleClick} value="Toyota" title="Toyota" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
