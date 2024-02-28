// import Category from "./Category/Category";
// import Price from "./Price/Price";
// import Colors from "./Colors/Colors";
// import "./Sidebar.css";

// const Sidebar = ({ handleChange }) => {
//   return (
//     <>
//       <section className="sidebar">
//         <div className="logo-container">
//           <h1>🛒</h1>
//         </div>
//         <Category handleChange={handleChange} />
//         <Price handleChange={handleChange} />
//         <Colors handleChange={handleChange} />
//       </section>
//     </>
//   );
// };

// export default Sidebar;
import Category from "./Category/Category";
import Price from "./Price/Price";
import Model from "./Model/Model";
import Company from "./Company/Company";

import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const handleCategoryChange = (event) => {
    handleChange(event);
  };

  const handlePriceChange = (event) => {
    handleChange(event);
  };

  const handleModelChange = (event) => {
    handleChange(event);
  };

  const handleCompanyChange = (event) => {
    handleChange(event);
  };

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleCategoryChange} />
        <Price handleChange={handlePriceChange} />
        <Model handleChange={handleModelChange} />
        <Company handleChange={handleCompanyChange}/>
      </section>
    </>
  );
};

export default Sidebar;
