import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../Images/bajaar_logo.png";

const Menubar = () => {
  return (
    <>
      <header>
        <div className="top_header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <div className="welcome_text">
                  <p>Welcome to Bajjar Online Shopping Store!</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <div className="selector_area">
                  <ul>
                    <li className="language">
                      <a href="#">English</a>
                      <i className="fas fa-sort-down"></i>

                      <div className="sub_menu">
                        <ul>
                          <li>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <a href="#">Arabic</a>
                          </li>
                          <li>
                            <a href="#">Polish</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="language">
                      <a href="#">US Dollar</a>
                      <i className="fas fa-sort-down"></i>
                      <div className="sub_menu">
                        <ul>
                          <li>
                            <a href="#">US Dollar</a>
                          </li>
                          <li>
                            <a href="#">UK Euro</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Track your Order</a>
                    </li>
                    <li>
                      <a href="#">Store Location</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_header">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-12 col-md-3 py-1">
                <div className="logo_area">
                  <Link to="/">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 p-0 my-1">
                <div className="top_search_box px-5">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search for Product"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button class="bg-dark" type="button" id="button-addon2">
                      <i className="fas fa-search me-2"></i>
                      search
                    </button>
                  </div>
                </div>

                {/* <div className="top_search_box text-center">
                  <form>
                    <div className="search_box">
                    <input
                      type="text"
                      className="d-inline"
                      placeholder="Search for Product"
                    />
                    </div>
                    <div className="search_btn d-inline">
                      <i className="fas fa-search me-2"></i>
                      <span>search</span>
                    </div>
                  </form>
                </div> */}
              </div>
              <div className="col-lg-3 col-md-3 col-12 py-1">
                <div className="hero_user_area ">
                  <div className="user_img">
                    <Link to="/login">
                      <i className="fas fa-user"></i>
                    </Link>
                    <span>Account</span>
                  </div>
                  <div className="add_to_card">
                    <i className="fas fa-cart-plus"></i>
                    <NavHashLink to="/checkout#checkout_area">
                      <span>Cart</span>
                    </NavHashLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menubar;
