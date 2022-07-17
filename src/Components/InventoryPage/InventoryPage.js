import React from "react";
import useProduct from "../../Hooks/useProduct/useProduct";
import PageTitle from "../../SharedComponents/PageTitle/PageTitle";
import Spinner from "../../SharedComponents/Spinner/Spinner";
import "./InventoryPage.css";
import TableData from "./TableData.js/TableData";
const InventoryPage = () => {
  const [product] = useProduct();
  return (
    <>
      <PageTitle pagetitle="Inventory-Page"></PageTitle>
      <div className="inventoryArea">
        <h2 className="featureTitle">
          Inventory <span>Product {product?.length}</span>
        </h2>
        <p className="text-center">
          <strong>(Only Admin Or Super User can access this page)</strong>
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-dark">
                <thead className="text-center">
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delet Item</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {product?.map((val) => (
                    <TableData val={val} key={val._id}></TableData>
                  )) || <Spinner></Spinner>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryPage;
