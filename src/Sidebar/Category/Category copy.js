import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <select onChange={handleChange} className="category-dropdown">
          <option value="">All</option>
          <option value="Oil Filter">Oil Filter</option>
          <option value="sneakers">Sneakers</option>
          <option value="flats">Flats</option>
          <option value="sandals">Sandals</option>
          <option value="heels">Heels</option>
        </select>
      </div>
      {/* <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Oil Filter"
          title="Oil Filter"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div> */}
    </div>
  );
}

export default Category;
