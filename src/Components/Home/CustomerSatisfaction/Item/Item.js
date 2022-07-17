import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = (props) => {
  const { icon, counter, itemtext } = props.items;
  return (
    <div className="item">
      <div className="itemicon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className="number">
        <CountUp delay={2} end={counter} />
      </p>
      <span></span>
      <p>{itemtext}</p>
    </div>
  );
};

export default Item;
