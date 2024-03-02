// import "./Category.css";
// import Input from "../../components/Input";

// function Category({ handleChange }) {
//   return (
//     <div>
//       <h2 className="sidebar-title">Category</h2>

//       <div>
//         <select onChange={handleChange} className="category-dropdown">
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

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <select onChange={handleChange}  className="category-dropdown" name="category">
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
