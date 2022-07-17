import React from "react";
import useProduct from "../../../Hooks/useProduct/useProduct";
import Spinner from "../../../SharedComponents/Spinner/Spinner";
import "./FeatureProduct.css";
import SingleItem from "./SingleItem/SingleItem";
const FeatureProduct = () => {
  const [product] = useProduct();
  return (
    <div className="featureProduct">
      <h2 className="featureTitle">
        Feature <span>Product</span>
      </h2>
      <div className="container">
        <div className="row">
          {product
            ?.slice(0, 6)
            .map((data) => (
              <SingleItem key={data._key} data={data}></SingleItem>
            )) || <Spinner></Spinner>}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
