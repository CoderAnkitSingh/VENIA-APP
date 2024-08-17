import React from "react";
import { quantityDecrease, quantityIncrease } from "../features/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Quantity = ({ id }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.id === id)
  );
  const handleItemIncrement = (id) => {
    dispatch(quantityIncrease({ id }));
  };
  const handleItemDecrement = (id) => {
    dispatch(quantityDecrease({ id }));
  };
  return (
    <div className="cart-quantity">
      <button onClick={() => handleItemDecrement(id)}>
        <FaMinus />
      </button>
      <input type="text" value={item.quantity} readOnly />
      <button onClick={() => handleItemIncrement(id)}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Quantity;
