import React from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import PriceSummary from "../components/PriceSummary";

const ShoppingCart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <section className="cart-section">
      <div className="container">
        <h3 className="text-center mb-2 heading">
          {cartItems.length > 0 ? "Your Shopping Bag" : "Your Cart is Empty"}
        </h3>
        {cartItems.length > 0 ? (
          <div className="cart-row">
            <div className="shopping-cart-items-div">
              <div className="shopping-cart-item-container">
                {cartItems.map((cartItem) => (
                  <Cart key={cartItem.id} {...cartItem} />
                ))}
              </div>
            </div>
            <div className="shopping-cart-summary">
              <PriceSummary />
            </div>
          </div>
        ) : (
          <>
            <div className="text-center">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
                alt="Empty Cart"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="text-center">
              <Link className="cart-btn" to="/">
                continue shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
