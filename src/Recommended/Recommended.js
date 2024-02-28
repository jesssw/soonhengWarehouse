// import Button from "../components/Button";
// import "./Recommended.css";

// const Recommended = ({ handleClick }) => {
//   return (
//     <>
//       <div>
//         <h2 className="recommended-title">Recommended</h2>
//         <div className="recommended-flex">
//           <Button onClickHandler={handleClick} value="" title="All Products" />
//           <Button onClickHandler={handleClick} value="Honda" title="Honda" />
//           <Button onClickHandler={handleClick} value="Toyota" title="Toyota" />
//           <Button onClickHandler={handleClick} value="Puma" title="Puma" />
//           <Button onClickHandler={handleClick} value="Vans" title="Vans" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Recommended;


import React from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  const handleButtonClick = (value) => {
    console.log("Button clicked with value:", value); // Add this log statement
    handleClick({ target: { name: "company", value } });
  };
  

  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClick={() => handleButtonClick("")} title="All Products" />
        <Button onClick={() => handleButtonClick("Honda")} title="Honda" />
        <Button onClick={() => handleButtonClick("Toyota")} title="Toyota" />
        <Button onClick={() => handleButtonClick("Puma")} title="Puma" />
        <Button onClick={() => handleButtonClick("Vans")} title="Vans" />
      </div>
    </div>
  );
};


export default Recommended;

