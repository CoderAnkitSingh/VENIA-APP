import React from "react";
import Header from "./components/Header";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import appStore from "./utils/appStore";
import ShoppingCart from "./pages/ShoppingCart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/products/:productId/:productTitle"
        element={<ProductDetail />}
      />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
};

export default App;
