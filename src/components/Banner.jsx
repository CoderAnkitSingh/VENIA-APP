import React from "react";
import bannerDetail from "../assets/detail-banner.jpg";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-detail-text">
        Men's <br />
        Outerwear
      </div>
      <div className="banner-detail-image">
        <img
          src="https://images.pexels.com/photos/6238674/pexels-photo-6238674.jpeg"
          alt="banner"
        />
      </div>
    </section>
  );
};

export default Banner;
