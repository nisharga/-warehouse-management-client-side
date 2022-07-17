import React from "react";
import { Link } from "react-router-dom";
import "./SingleItem.css";
const SingleItem = (props) => {
  const { _id, name, image, short_description, price, quantity, supplier } =
    props.data;
  return (
    <div className="col-md-4 col-sm-6 mt-3 mb-4">
      <div className="thumb-wrapper">
        <div className="img-box">
          <img src={image} alt="d" />
        </div>
        <div className="thumb-content">
          <h4>{name}</h4>
          <p className="short_des">{short_description}</p>
          <div className="d-flex justify-content-center">
            <p className="quantity">Quantity: {quantity}</p>
            <p className="supplier">Supplier: {supplier}</p>
          </div>
          <p className="item-price">
            <strike>${(price / 100) * 120}.00</strike> <b>${price}.00</b>
          </p>
          <Link to={`/product/${_id}`} className="btn btn-primary">
            Updated
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
