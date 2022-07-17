import React from "react";

const SingleBlogs = ({ blogs }) => {
  return (
    <div className="singleBlogs col-md-4 mt-2 mb-2 p-3">
      <div className="card">
        <div className="card-body p-4">
          <h5 className="card-title">{blogs.title}</h5>
          <p className="card-text">{blogs.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogs;
