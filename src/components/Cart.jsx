import { FaRegEdit, FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cartSlice";
import Quantity from "./Quantity";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useState } from "react";

const Cart = ({ id, title, image, price }) => {
  const [showAction, setShowAction] = useState(false);
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.id === id)
  );

  const handleDeleteItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="shop-item-row">
      <div className="cart-img-detail">
        <div className="cart-img">
          <img src={image} alt={title} className="img-fluid" />
        </div>
        <div className="cart-info-list">
          <h5>{title}</h5>
          <p>Size : Medium</p>
          <p>Color : Black</p>
          <p>
            ${price.toFixed(0) * item.quantity} X {item.quantity}
          </p>
        </div>
      </div>
      <Quantity id={id} />
      <div className="cart-actions">
        <div
          className="cart-action-mobile"
          onClick={() => setShowAction(!showAction)}
        >
          <IoEllipsisHorizontal />
        </div>
        <div className={`cart-action-container ${showAction ? "active" : ""}`}>
          <button className="edit-cart-item">
            <FaRegEdit /> Edit item
          </button>
          <button
            className="delete-cart-item"
            onClick={() => handleDeleteItem(id)}
          >
            <FaRegTrashCan /> Remove
          </button>
          <button className="save-cart-item">
            <FaRegHeart /> Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
