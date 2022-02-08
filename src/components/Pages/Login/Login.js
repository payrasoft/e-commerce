import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shear/Footer/Footer";
import Menubar from "../../Shear/Menubar/Menubar";

const Login = () => {
  return (
    <>
      <Menubar />
      <div className="user_login_area">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner_login m-5 px-5 ">
                <h3 className="mb-4">Login</h3>
                <div className="login_area mt-2">
                  <form className="login_form">
                    <label htmlFor="email">Username or email address</label>
                    <input type="text" id="email" className="w-100" />
                    <label htmlFor="password" className="pt-3">
                      Password
                    </label>
                    <input type="password" id="password" className="w-100" />
                    <div className="form-check login_check_box">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="login_btn">
                      <button type="submit">Log in</button>
                    </div>
                    <div className="forget_password">
                      <Link to="/">Lost your password?</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner_register">
                <div className="register inner_login m-5 px-5 ">
                  <h3 className="mb-4">Register</h3>

                  <div className="login_area mt-2">
                    <form className="login_form">
                      <label htmlFor="email2">Email address</label>
                      <input type="text" id="email2" className="w-100" />
                      <div className="register_content">
                        <p className="mt-3">
                          A password will be sent to your email address.
                        </p>
                        <p>
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account, and for other purposes described in
                          our <Link to="/">privacy policy</Link> .
                        </p>
                      </div>
                      <div className="register_btn login_btn">
                        <button type="submit">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
