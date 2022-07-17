import React from "react";
import "./CustomerSatisfaction.css";
import Item from "./Item/Item";

const CustomerSatisfaction = () => {
  const itemsALL = [
    { id: 1, icon: "briefcase", counter: 393, itemtext: "Order Completed" },
    { id: 2, icon: "smile", counter: 339, itemtext: "Happy clients" },
    { id: 3, icon: "paper-plane", counter: 6, itemtext: "Pending Order" },
    {
      id: 4,
      icon: "people-arrows-left-right",
      counter: 154,
      itemtext: "recommend this product",
    },
  ];
  return (
    <div className="sectionCustomerSatisfaction">
      <div className="fullWidth">
        <div className="projectFactsWrap ">
          {itemsALL.map((data) => (
            <Item items={data} key={data.id}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
