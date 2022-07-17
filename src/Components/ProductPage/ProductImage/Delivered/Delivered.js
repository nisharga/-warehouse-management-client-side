import React from "react";
const Delivered = ({ id, quantity }) => {
  const handleDeliverd = (id, quantity) => {
    const newQuantity = quantity - 1;
    fetch(
      `https://quiet-temple-29937.herokuapp.com/product/minusquantity/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          quantity: newQuantity.toString(),
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
    alert("Delived one Successfull");
    window.location.reload();
  };
  return (
    <div className="deliverd d-flex justify-content-between mt-2 mb-2">
      <h3>Delivery Complete?</h3>
      <button
        onClick={() => handleDeliverd(id, quantity)}
        className="btn btn-primary"
      >
        Delivered
      </button>
    </div>
  );
};

export default Delivered;
