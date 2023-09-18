import { useContext } from "react";
import { Context } from "../../context/Context";
import "../../styles/filters.css";
import { AiOutlineDown } from "react-icons/ai";
const Filters = ({ setFilters, filters }) => {
  const { darkMode } = useContext(Context);
  const minPriceChange = (e) => {
    setFilters({ ...filters, minPrice: e.target.value });
  };
  const maxPriceChange = (e) => {
    setFilters({ ...filters, maxPrice: e.target.value });
  };

  const categoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };
  return (
    <div className="filters">
      <div className="category-filter">
        <label className="category-label" htmlFor="category">
          Filter by category
        </label>
        <div className="select-container">
          <select
            className={
              darkMode ? "category-select darkInputs" : "category-select"
            }
            name="category"
            id="category"
            onChange={categoryChange}
            value={filters.category}
          >
            <option value="all">All</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Cleaning Appliances">Cleaning Appliances</option>
            <option value="Living Room">Living Room</option>
            <option value="Technology">Technology</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Bedroom">Bedroom</option>
          </select>
          <AiOutlineDown className="select-arrow" />
        </div>
      </div>
      <div className="price-filter">
        <label className="price-label" htmlFor="price">
          Filter by price
        </label>
        <div name="price" id="price" className="price-inputs">
          <div className="minPrice-container">
            <label className="minPrice-title" htmlFor="minPrice">
              Min Price $
            </label>
            <input
              name="minPrice"
              id="minPrice"
              type="number"
              min="0"
              max="1500"
              className={
                darkMode ? "minPrice-input darkInputs" : "minPrice-input"
              }
              value={filters.minPrice}
              onChange={minPriceChange}
            />
          </div>
          <div className="maxPrice-container">
            <label className="maxPrice-title" htmlFor="maxPrice">
              Max Price $
            </label>
            <input
              name="maxPrice"
              id="maxPrice"
              type="number"
              min="20"
              max="2500"
              className={
                darkMode ? "maxPrice-input darkInputs" : "maxPrice-input"
              }
              value={filters.maxPrice}
              onChange={maxPriceChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
