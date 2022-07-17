import React from "react";
import { useForm } from "react-hook-form";

import Delivered from "./Delivered/Delivered";
const ProductImage = ({ data }) => {
  const id = data._id;
  const oldQuantity = parseInt(data.quantity);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newQuantity = oldQuantity + parseInt(data.quantity);
    fetch(`https://quiet-temple-29937.herokuapp.com/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        quantity: newQuantity.toString(),
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    alert("New Quantity added successfully");
    window.location.reload();
  };
  return (
    <div className="col-md-6">
      <div className="preview">
        <img src={data.image} alt="img" />
      </div>
      <div className="">
        <Delivered id={id} quantity={oldQuantity}></Delivered>
        <div className="incrise_quqntity d-flex justify-content-between">
          <h3>Incrise quantity:</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex justify-content-between"
          >
            <input
              {...register("quantity", { required: true })}
              className="form-control"
              placeholder="Add New Quantity"
            />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
