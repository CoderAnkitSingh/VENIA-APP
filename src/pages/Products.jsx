import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import Product from "../components/Product";
import Banner from "../components/Banner";
import Shimmer from "../UI/Shimmer";
import ProductFilter from "../components/ProductFilter";

const Products = () => {
  const [data] = useFetch("https://fakestoreapi.com/products");
  const [sortOption, setSortOption] = useState("all");

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const filterProducts = (products, option) => {
    switch (option) {
      case "price1":
        return products.filter((product) => product.price < 100);
      case "price2":
        return products.filter(
          (product) => product.price >= 100 && product.price < 300
        );
      case "price3":
        return products.filter(
          (product) => product.price >= 300 && product.price < 600
        );
      case "price4":
        return products.filter(
          (product) => product.price >= 600 && product.price < 1000
        );
      case "price5":
        return products.filter((product) => product.price >= 1000);
      default:
        return products;
    }
  };

  const filteredData = filterProducts(data, sortOption);

  return (
    <>
      <Banner />
      <section className="products-section">
        <div className="container">
          <div className="pro-row">
            <div className="filter-div">
              <h2 className="border-bottom">Filters</h2>
              <ProductFilter />
            </div>
            <div className="product-div">
              <div className="product-filter-div">
                <div className="filter-result">
                  {filteredData.length} Results
                </div>
                <div className="filter-result-list">
                  <select onChange={handleSort}>
                    <option value="all">Sort by Price</option>
                    <option value="price1">Below $100</option>
                    <option value="price2">$100 - $300</option>
                    <option value="price3">$300 - $600</option>
                    <option value="price4">$600 - $1000</option>
                    <option value="price5">Over $1000</option>
                  </select>
                </div>
              </div>
              <div className="pro-list-div">
                {data.length === 0 ? (
                  <Shimmer />
                ) : (
                  filteredData.map((product) => (
                    <Product key={product.id} {...product} />
                  ))
                )}
              </div>
              {filteredData.length === 0 ? (
                <h4 className="text-center">No products found</h4>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
