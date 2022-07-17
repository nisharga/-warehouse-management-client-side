import React from "react";
import SliderItem from "./SliderItem/SliderItem";

const Slider = () => {
  const sliderItem = [
    {
      id: 1,
      isActive: true,
      img: "https://i.ibb.co/q7RdrPj/apolo.jpg",
      heading: "How does IPS power supply work?",
      post: " The principle role of an Isolated Power Supply (IPS) is to protect electrical loads from high voltage exposure. This is achieved by transferring power from one circuit to another without directly linking the two",
    },
    {
      id: 2,
      isActive: false,
      img: "https://i.ibb.co/JFrqfc9/Eastern.jpg",

      heading: "How does instant power supply work?",
      post: " The charger circuit charges the battery properly by using the main supply when it is ON. When the main supply is not available then the battery supplies the power..",
    },
    {
      id: 3,
      isActive: false,
      img: "https://i.ibb.co/h9M4zRq/hamco.jpg",
      heading: "Why IPS is needed?",
      post: "IPS is mainly used to get rid of the pain of load shedding. It mainly stores power from AC power to batteries in DC form through chargers and supplies electricity in AC form in case of power outage or load shedding for any reason.",
    },
  ];
  return (
    <div className="carouselHeader">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {sliderItem?.map((data) => (
            <SliderItem key={data.id} data={data}></SliderItem>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
