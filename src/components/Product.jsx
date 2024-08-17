import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className="product-item">
      <div className="pro-img-div">
        <Link
          to={`/products/${id}/${title
            .trim()
            .toLowerCase()
            .replace(/[^A-Z0-9]/gi, "-")}`}
        >
          <img src={image} alt={title} className="pro-img" />
        </Link>
      </div>
      <h3 className="pro-title">{title}</h3>
      <div className="pro-price">${price.toFixed(0)}</div>
      <div className="wishlist-icon">
        <FaRegHeart />
      </div>
    </div>
  );
};

export default Product;
