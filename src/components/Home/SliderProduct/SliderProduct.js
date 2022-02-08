import React from "react";
// import sliderData from "../../Data/Slider/Slider";
import singleSlider1 from "../../Images/singleSlider/designer.png";
import singleSlider2 from "../../Images/singleSlider/hero_banner_2.jpg";
import singleSlider3 from "../../Images/singleSlider/hero_banner_3.jpg";
import "animate.css";
import TodaysFlashData from "../../Data/TodaysFlashData/TodaysFlashData";
import TrendingProducts from "./TrendingProducts";
import qr_code_img from "../../Images/logo/qrcode.png";
const SliderProduct = () => {
  return (
    <>
      <div className="slider_product">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 my-1">
              <div className="side_menu_items">
                <h5>Hot Categories​</h5>
                <div className="top_slider_menu_area">
                  <ul>
                    <li>
                      <i className="far fa-sun"></i>
                      All Deals
                    </li>
                    <li className="women_menu_item">
                      <i className="fas fa-female women_icon"></i>
                      Women’s Gadgets
                      <i className="fas fa-angle-right text-end"></i>
                      <div className="women_sub_menu">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="corporate_menu_area m-3">
                              <h5>CORPORATE</h5>
                              <ul>
                                <li>Consumer Electronics</li>
                                <li>Phone & Telecom</li>
                                <li>Mobile Accessories</li>
                                <li>Sports & Outdoor</li>
                              </ul>
                            </div>
                            <div className="lightings_menu_area corporate_menu_area m-3">
                              <h5>LIGHTINGS</h5>
                              <ul>
                                <li>Phone & Telecom</li>
                                <li>Ladies Watches</li>
                                <li>Computer & Office</li>
                                <li>Remote Control</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="accessories_menu_area corporate_menu_area m-3">
                              <h5>ACCESSORIES</h5>
                              <ul>
                                <li>Electronic Gadgets</li>
                                <li>Hot Categories</li>
                                <li>Google Glass</li>
                                <li>DSLR Camera</li>
                              </ul>
                            </div>
                            <div className="texture_menu_area corporate_menu_area m-3">
                              <h5>TEXTURE LAB</h5>

                              <ul>
                                <li>Samsung TV</li>
                                <li>Headphone</li>
                                <li>Outdoor Activities</li>
                                <li>RC Helicopters</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="whats_menu_area corporate_menu_area m-3">
                              <h5>WHAT’S NEW</h5>
                              <ul>
                                <li>Computer & Office</li>
                                <li>Computer Accessories</li>
                                <li>Consumer Electronics</li>
                                <li>Deals of the Day</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-tv computer"></i>
                      Computer & Office
                    </li>
                    <li>
                      <i className="fas fa-gamepad sports"></i>
                      Sports & Outdoor
                    </li>
                    <li>
                      <i className="fas fa-tshirt cloth "></i>
                      Men’s Gadgets
                      <i className="fas fa-angle-right text-end"></i>
                    </li>
                  </ul>
                </div>
                <div className="bottom_slider_menu_area">
                  <ul>
                    <li>Totally New Arrival</li>
                    <li>Most Popular Products</li>
                    <li>Deals of the Day</li>
                    <li>Phone & Telecom</li>
                    <li>Computer Accessories</li>
                    <li>Consumer Electronics</li>
                    <li>Electronic Gadgets</li>
                  </ul>
                </div>
              </div>
              <div className="qr_code my-2">
                <div className="qr_code_img">
                  <img src={qr_code_img} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="row">
                <div className="col-lg-9 my-1">
                  <div className="main_slider">
                    <div
                      id="carouselExampleDark"
                      className="carousel carousel-fade"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="10000"
                        >
                          <p>More than 25% OFF</p>
                          <h3 className="animate__backOutRight">
                            Weekly Promotions <br /> on SmartPhone
                          </h3>
                          <p className="purchase_btn">Purchase Now</p>
                        </div>
                        <div data-bs-interval="2000" className="carousel-item">
                          <p>Time has changed</p>
                          <h3>
                            Waterproof <br /> Adventure Ready
                          </h3>
                          <p className="purchase_btn">Purchase Now</p>
                        </div>
                        <div className="carousel-item">
                          <p>More than 25% OFF</p>
                          <h3>
                            Weekly Promotions <br /> on SmartPhone
                          </h3>
                          <p className="purchase_btn">Purchase Now</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-1">
                  <div className="single_slider">
                    <div
                      id="carouselExampleDark"
                      className="carousel carousel-dark slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="10000"
                        >
                          <img
                            src={singleSlider1}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                          <img
                            src={singleSlider2}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={singleSlider3}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trending_product my-2">
                <div className="product_title_area">
                  <div className="left_site_heading">
                    <p>Trending Products</p>
                  </div>
                  <div className="right_site_link">
                    <span>MORE SEALS </span>
                    <i className="fas fa-chevron-circle-right text-danger ms-2"></i>
                  </div>
                </div>
                <div className="row">
                  {TodaysFlashData.slice(0, 4).map((singleProduct) => (
                    <TrendingProducts
                      key={singleProduct.id}
                      singleProduct={singleProduct}
                    ></TrendingProducts>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderProduct;
