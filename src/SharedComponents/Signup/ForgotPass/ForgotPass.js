import React from "react";
import PageTitle from "../../../SharedComponents/PageTitle/PageTitle";
import "./ForgotPass.css";
import { Link } from "react-router-dom";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase_Auth/Auth";
import { toast } from "react-toastify";
const ForgotPass = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    sendPasswordResetEmail(email);
    toast("Check mail for change password");
  };
  return (
    <>
      <PageTitle pagetitle="Forgot password"></PageTitle>
      <div className="forgotpasssection">
        <div className="text-center">
          <h2 className="logo">Forgot Password?</h2>
          <div className="login-form-1">
            <form
              id="forgot-password-form"
              className="text-left"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="etc-login-form">
                <p>
                  When you fill in your registered email address, you will be
                  sent instructions on how to reset your password.
                </p>
              </div>
              <div className="login-form-main-message"></div>
              <div className="main-login-form">
                <div className="login-group">
                  <div className="form-group">
                    <label for="fp_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      {...register("email")}
                      className="form-control"
                      placeholder="email address"
                    />
                  </div>
                </div>
                <input type="submit" className="login-button" value={"Send"} />
              </div>
              <div className="etc-login-form">
                <p>
                  already have an account?
                  <Link to="/login">login here</Link>
                </p>
                <p>
                  new user?
                  <Link to="/signup">create new account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
