

// import React from "react";
// import "./Category.css";

// function Category({ handleChange }) {
//   return (
//     <div>
//       <h2 className="sidebar-title">Category</h2>
//       <div>
//         <select onChange={handleChange} value={value} className="category-dropdown" name="category">
//           <option value="">All</option>
//           <option value="Oil Filter">Oil Filter</option>
//           <option value="sneakers">Sneakers</option>
//           <option value="flats">Flats</option>
//           <option value="sandals">Sandals</option>
//           <option value="heels">Heels</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Category;


import React from "react";
import "./Category.css";

function Category({ handleChange,value }) {
  const handleCategoryChange = (event) => {
    handleChange(event); // Invoke the handleChange function for company changes
  };

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
      <select  value={value} onChange={handleCategoryChange} className="category-dropdown" name="category">
      <option value="">All</option>
           <option value="Oil Filter">Oil Filter</option>
           <option value="sneakers">Sneakers</option>
           <option value="flats">Flats</option>
           <option value="sandals">Sandals</option>
           <option value="heels">Heels</option>
        </select>
      </div>
    </div>
  );
}

export default Category;

