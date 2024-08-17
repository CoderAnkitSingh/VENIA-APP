import React, { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import Modal from "../UI/Modal";
import FilterMenu from "./FilterMenu";
import Logo from "../assets/logo.svg";
import Footer from "./Footer";
// import cartSlice from "../features/cartSlice";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <header
        className={`header-section bg-primary ${isSticky ? "sticky" : ""}`}
      >
        <div className="container">
          <div className="app-row">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="VENIA" />
              </Link>
            </div>
            <div className="mobile-toggle" onClick={() => setIsModalOpen(true)}>
              <FiMenu />
            </div>
            <nav className="header-nav">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/women">Women</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Men</NavLink>
                </li>
                <li>
                  <NavLink to="/electronics">Electronics</NavLink>
                </li>
                <li>
                  <NavLink to="/jewellery">Jewellery</NavLink>
                </li>
              </ul>
            </nav>
            <div className="cart-icon">
              <Link to="/shopping-cart">
                <FiShoppingBag />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <FilterMenu setIsModalOpen={setIsModalOpen} />
          </Modal>
        )}
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
