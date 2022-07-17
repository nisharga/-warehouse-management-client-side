import React from "react";
import "./Signup.css";
import Logo from "../../img/logo.png";
import PageTitle from "../../SharedComponents/PageTitle/PageTitle";
import GoogleSignIn from "../Signin/GoogleSignIn/GoogleSignIn";
import SignupForm from "./SignupForm/SignupForm";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <PageTitle pagetitle="SignUp"></PageTitle>
      <div className="signupsection">
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container brand_logo">
                  <img src={Logo} className="brand_logo_img" alt="Logo" />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <SignupForm></SignupForm>
              </div>

              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Don't have an account?
                  <Link to="/login" className="ml-2">
                    Sign In
                  </Link>
                </div>
                <div className="d-flex justify-content-center links">
                  <Link to="/forgotpass">Forgot your password?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </>
  );
};

export default Signup;
