import React from "react";
import "./PageTitle.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PageTitle = ({ pagetitle }) => {
  return (
    <section className="page-title-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="page-title">
              <h1 className="textShadow">{pagetitle}</h1>
              <div className="breadcrumb-list">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li>{pagetitle}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
