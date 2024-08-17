import React from "react";
import { FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PriceSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const total = Number(
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(0)
  );

  return (
    <div className="shopping-cart-summary-item">
      <h4>Pricing Summary</h4>
      <div className="ps-row">
        <div className="ps-col-6">Subtotal</div>
        <div className="ps-col-6">$ {total}</div>
      </div>
      <div className="ps-row">
        <div className="ps-col-6">Coupon</div>
        <div className="ps-col-6">$ 0.00</div>
      </div>
      <div className="ps-row">
        <div className="ps-col-6">Gift Card</div>
        <div className="ps-col-6">$ 0.00</div>
      </div>
      <div className="ps-row">
        <div className="ps-col-6">Estimated Tax</div>
        <div className="ps-col-6">$ 0.00</div>
      </div>
      <div className="ps-row">
        <div className="ps-col-6">Estimated Shipping</div>
        <div className="ps-col-6">FREE</div>
      </div>
      <div className="ps-row">
        <div className="ps-col-6">
          <strong>Estimated Toal</strong>
        </div>
        <div className="ps-col-6">
          <strong>
            $
            {cartItems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(0)}
          </strong>
        </div>
      </div>
      <div className="ps-row mt-5">
        <div className="buttons-div">
          <button className="ps-btn bg-primary">
            <FaLock /> Checkout
          </button>
          <Link to="/" className="ps-btn bg-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
