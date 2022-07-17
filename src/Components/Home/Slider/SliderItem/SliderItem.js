import React from "react";
import "./SliderItem.css";
const SliderItem = ({ data }) => {
  return (
    <div className={`carousel-item ${data.isActive ? "active" : ""}`}>
      {/* ${data.isActive ? "active" : ""} */}
      <div className="cardcontainer ">
        <img
          src={data.img}
          className="d-block w-100 center-block sliderimg galleryImg"
          alt="sliderImage"
        />
      </div>
      <div className="carousel-caption d-md-block d-flex align-items-center">
        <h1>{data.heading}</h1>
        <p className="d-none d-md-block">{data.post}</p>
      </div>
    </div>
  );
};

export default SliderItem;
