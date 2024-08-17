import React from "react";
import { IoClose } from "react-icons/io5";
import ProductFilter from "./ProductFilter";

const FilterMenu = ({ setIsModalOpen }) => {
  return (
    <div>
      <div className="filter-menu-header">
        <h3>Filters</h3>
        <button
          className="filter-menu-close-btn"
          onClick={() => setIsModalOpen(false)}
        >
          <IoClose />
        </button>
      </div>
      <div className="filter-menu-body">
        <span className="clear-all-btn">Clear all</span>
        <div className="filter-div-popup">
          <ProductFilter />
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
