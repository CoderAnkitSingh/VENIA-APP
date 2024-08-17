import React from "react";

const ProductFilter = () => {
  return (
    <>
      <label className="cat-label">Categories</label>
      <div className="border-bottom pb-5">
        <div className="filter-check">
          <input type="checkbox" id="jewellery" />
          <label htmlFor="jewellery">Jewellery</label>
        </div>
        <div className="filter-check">
          <input type="checkbox" id="electronics" />
          <label htmlFor="electronics">Electronics</label>
        </div>
        <div className="filter-check">
          <input type="checkbox" id="men-cloth" />
          <label htmlFor="men-cloth">Men's Clothing</label>
        </div>
        <div className="filter-check">
          <input type="checkbox" id="women-cloth" />
          <label htmlFor="women-cloth">Women's Clothing</label>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
