import React from "react";

const SingleService = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-3 col-sm-6 equal-height">
      <div className="item">
        <i className={`fas fa-${data.icon}`}></i>
        <h4>{data.heading}</h4>
        <p>{data.post}</p>
      </div>
    </div>
  );
};

export default SingleService;
