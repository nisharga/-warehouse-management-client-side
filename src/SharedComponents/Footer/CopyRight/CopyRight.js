import React from "react";
import { Link } from "react-router-dom";
const CopyRight = () => {
  return (
    <div id="copy-right">
      <div className="copy-right-sec">
        <i className="fa-solid fa-copyright"></i>
        All rights reserved 2022 Powerd By <Link to="/">iPower</Link>
      </div>
    </div>
  );
};

export default CopyRight;
