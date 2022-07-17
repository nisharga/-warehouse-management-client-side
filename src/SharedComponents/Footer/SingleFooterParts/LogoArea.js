import React from "react";
import Logo from "../../../img/logo.png";
const LogoArea = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <a href="index.html">
        <img src={Logo} alt="" className="img-fluid logo-footer" />
      </a>
      <div className="footer-about">
        <p>
          inventory management combines varying software packages to track stock
          levels and stock movements. The solution can integrate with
          multichannel sales systems or shipping systems.
        </p>
      </div>
    </div>
  );
};

export default LogoArea;
