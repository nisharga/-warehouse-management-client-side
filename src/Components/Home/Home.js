import React from "react";
import Slider from "./Slider/Slider";
import FeatureProduct from "./FeatureProduct/FeatureProduct";

import CustomerSatisfaction from "./CustomerSatisfaction/CustomerSatisfaction";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeatureProduct></FeatureProduct>
      <CustomerSatisfaction></CustomerSatisfaction>
      <Services></Services>
    </div>
  );
};

export default Home;
