import React from "react";
import { useEffect, useState } from "react";
// import useSingleProduct from "../../Hooks/useSingleProduct/useSingleProduct";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails/ProductDetails";
import Spinner from "../../SharedComponents/Spinner/Spinner";
import ProductImage from "./ProductImage/ProductImage";
const ProductPage = () => {
  let { id } = useParams();
  const [singleProduct, setsingleProduct] = useState();
  useEffect(() => {
    const url = `https://quiet-temple-29937.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setsingleProduct(data));
  }, [singleProduct]);
  return (
    <div className="productPage">
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              {singleProduct?.map((data) => (
                <ProductImage data={data} key={data._id} />
              )) || <Spinner></Spinner>}
              {singleProduct?.map((data) => (
                <ProductDetails data={data} key={data._id} />
              )) || <Spinner></Spinner>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
