import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { FaRegStar, FaStar } from "react-icons/fa";
import loaderImg from "../assets/loader.gif";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cartSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { productId } = useParams();

  const [data] = useFetch(`https://fakestoreapi.com/products/${productId}`);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [btnText, setBtnText] = useState("add to cart");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddItem = (product) => {
    const itemExists = cartItems.some((item) => item.id === product.id);
    if (!itemExists) {
      dispatch(addItem(product));
      setBtnText("Item Added");
      setTimeout(() => {
        setBtnText(btnText);
      }, 1000);
      toast.success("Item Added Successfully", {
        theme: "dark",
        hideProgressBar: true,
        autoClose: 1000,
        position: "top-right",
      });
    } else {
      // alert("You can't add the same product to the cart");
      toast.error("You can't add the same product to the cart", {
        theme: "dark",
        hideProgressBar: true,
        autoClose: 1000,
      });
    }
  };

  return (
    <section className="pro-detail-section">
      <div className="container">
        {data.length === 0 ? (
          <div className="loader-img">
            <img src={loaderImg} alt="loader" />
          </div>
        ) : (
          <div className="pro-detail-row">
            <div className="pro-detail-image">
              <div className="pro-detail-img">
                <img src={data.image} alt={data.title} className="img-fluid" />
              </div>
            </div>
            <div className="pro-detail-information">
              <div className="breadcrumb">
                Home / Products /
                {data.category.toLowerCase().charAt(0).toUpperCase() +
                  data.category.slice(1)}
              </div>
              <h2>{data.title}</h2>
              <h3>${data.price.toFixed(0)}</h3>
              <div className="review-rating">
                {data.rating.rate < 1.5 ? (
                  <>
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </>
                ) : data.rating.rate < 2.5 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </>
                ) : data.rating.rate < 3.5 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </>
                ) : data.rating.rate < 4.5 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </>
                ) : data.rating.rate < 5.5 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                ) : (
                  ""
                )}
                <span className="review-count">({data.rating.count})</span>
              </div>
              <p>
                {showFullDescription
                  ? data.description
                  : data.description.slice(0, 135)}

                {data.description.length > 135 && (
                  <>
                    ...
                    <span
                      className="read-more-desc-btn"
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                    >
                      {showFullDescription ? "Read Less" : "Read More"}
                    </span>
                  </>
                )}
              </p>

              <div className="add-to-cart-btn">
                <button
                  className="cart-btn"
                  onClick={() => handleAddItem(data)}
                >
                  {btnText}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="product-detail-content">
          <h3>{data.title}</h3>
          <h5>Description</h5>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
