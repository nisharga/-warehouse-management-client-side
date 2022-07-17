import React from "react";
import PageTitle from "../../SharedComponents/PageTitle/PageTitle";
import "./AddInventory.css";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../SharedComponents/Firebase_Auth/Auth";
const AddInventory = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const name = data.product_name;
    const image = data.product_img_url;
    const shortDescription = data.short_description;
    const price = parseInt(data.price);
    const quantity = parseInt(data.quantity);
    const supplier = data.supplier;
    const description = data.description;
    const email = data.email;
    (async () => {
      const rawResponse = await fetch(
        "https://quiet-temple-29937.herokuapp.com/addinventory",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            image: image,
            shortDescription: shortDescription,
            price: price,
            quantity: quantity,
            supplier: supplier,
            description: description,
            email: email,
          }),
        }
      );
      const content = await rawResponse.json();
      console.log(content);
    })();
    e.target.reset();
  };
  return (
    <>
      <PageTitle pagetitle="Add-Inventory"></PageTitle>
      <div className="AddInventory">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 ">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                  <legend>ADD PRODUCTS</legend>
                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="product_id"
                    >
                      PRODUCT NAME
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("product_name")}
                        name="product_name"
                        placeholder="Product Name"
                        className="form-control input-md"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="product_img_url"
                    >
                      PRODUCT IMAGE URL
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("product_img_url")}
                        name="product_img_url"
                        placeholder="Product Image Url"
                        className="form-control input-md"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="short_description"
                    >
                      PRODUCT SHORT DESCRIPTION
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("short_description")}
                        name="short_description"
                        placeholder="Product Short Description"
                        className="form-control input-md"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label className="col-md-4 control-label" htmlFor="price">
                      Price
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("price")}
                        name="price"
                        placeholder="Price"
                        className="form-control input-md"
                        type="number"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("quantity")}
                        name="quantity"
                        placeholder="Quantity"
                        className="form-control input-md"
                        type="number"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="supplier"
                    >
                      Supplier
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("supplier")}
                        name="supplier"
                        placeholder="Supplier"
                        className="form-control input-md"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="supplier"
                    >
                      Email
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("email")}
                        name="supplier"
                        placeholder="Supplier Email"
                        className="form-control input-md"
                        value={user?.email || ""}
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="description"
                    >
                      Product Description
                    </label>
                    <div className="col-md-4">
                      <textarea
                        {...register("description")}
                        name="description"
                        placeholder="Product Description"
                        className="form-control input-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-4">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInventory;
