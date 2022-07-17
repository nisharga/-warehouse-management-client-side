import React from "react";
import CopyRight from "./CopyRight/CopyRight";
import "./Footer.css";
import Address from "./SingleFooterParts/Address";
import LogoArea from "./SingleFooterParts/LogoArea";
import SocialLinks from "./SingleFooterParts/SocialLinks";
import UsefulLinks from "./SingleFooterParts/UsefulLinks";

const Footer = () => {
  return (
    <div className="bottomFooter">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <LogoArea></LogoArea>
            <UsefulLinks></UsefulLinks>
            <SocialLinks></SocialLinks>
            <Address></Address>
          </div>
        </div>
      </footer>
      <CopyRight></CopyRight>
    </div>
  );
};

export default Footer;
