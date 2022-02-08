import React from "react";
import { NavHashLink } from "react-router-hash-link";
import FooterLogo from "../../Images/logo/logo_4.png";
import Secured from "../../Images/logo/secured-img.png";
import Payment from "../../Images/logo/payment.png";
import GooglePlayStor from "../../Images/logo/google_playstor.png";
import ApplePlayStor from "../../Images/logo/apple_playstor.png";
import { Link } from "react-router-dom";
import develope_by from "../../Images/developer_by_payra_soft.png";
const Footer = () => {
  return (
    <div className="footer_area pt-5">
      <div className="top_footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="top_footer_inner ">
                <i className="fas fa-truck"></i>
                <div className="details">
                  <h5>
                    Free <br /> Shipping
                  </h5>
                  <p> Free Shipping Worldwide</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="top_footer_inner ">
                <i className="far fa-question-circle"></i>
                <div className="details">
                  <h5>
                    24/7 Online <br /> Support
                  </h5>
                  <p>Dedicated Support Team</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="top_footer_inner ">
                <i className="fab fa-buffer"></i>
                <div className="details">
                  <h5>
                    Festival <br /> Offer <br />
                  </h5>
                  <p>Special Offers Happens</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="top_footer_inner ">
                <i className="fas fa-gift"></i>
                <div className="details">
                  <h5>
                    Online Payment <br /> System
                  </h5>
                  <p>It’s Supper Cool with Fun!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="meddle_footer">
        <div className="container py-3">
          <div className="popular_searches d-flex align-items-center">
            <i className="fab fa-searchengin"></i>
            <h5>Popular Searches</h5>
          </div>
          <div className="search_tag">
            <ul>
              <li> Corporate</li>
              <li> New Arrival</li>
              <li>Sports & Outdoor</li>
              <li> Baby Toys</li>
              <li> Household Items</li>
              <li> Accessories</li>
              <li> Computer & Office</li>
              <li> Indoor Chair</li>
              <li> Hot Categories</li>
              <li> Bluetooth</li>
              <li> Watches</li>
              <li> Ladies Watches</li>
              <li> Headphones</li>
              <li> Most Popular Products</li>
              <li> Men’s Fashion</li>
              <li> Kitchen Appliance</li>
              <li> Women’s Fashion</li>
              <li> Mobile Accessories</li>
              <li> Electronic Gadgets</li>
              <li> Men’s Gadgets</li>
              <li> Women’s Gadgets</li>
              <li> Outdoor Activities</li>
              <li> Totally New Arrival</li>
              <li> Computer Accessories</li>
              <li> Consumer Electronics</li>
              <li> Watches & Eyewear</li>
              <li> Phone & Telecom</li>
              <li> Toy Vehicles</li>
              <li> Toys & Dolls</li>
              <li> Deals of the Day</li>
              <li> All Deals</li>
              <li> Nike</li>
              <li> Smart Watches</li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="main_footer">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 py-4">
              <div className="office_info">
                <div className="footer_title">
                  <h5>REGISTERED OFFICE</h5>
                </div>
                <p>Got Questions? Call us</p>
                <h4>(212) 228-7888</h4>
                <p>help@example.com</p>
                <p>Shop: 239 E 5th St, New York</p>
                <p>NY 10003, United States</p>
                <div className="social_icons">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-4">
              <div className="secured">
                <div className="footer_title">
                  <h5>SECURED BY</h5>
                </div>
                <div className="secured_link">
                  <ul>
                    <li>Home</li>
                    <li> Today’s Deal</li>
                    <li>New Arrival</li>
                    <li>Best Sellers</li>
                    <li>Hot</li>
                    <NavHashLink to="/about_us_area#about_us_area">
                      <li>About Us</li>
                    </NavHashLink>
                    <li>Latest News</li>
                    <NavHashLink to="/contactUs_area#contactUs_area">
                      <li>Contact us</li>
                    </NavHashLink>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-4">
              <div className="quick_area">
                <div className="footer_title">
                  <h5>QUICK LINKS</h5>
                </div>
                <div className="quick_link">
                  <ul>
                    <NavHashLink to="/faq_section#faq_section">
                      <li>FAQs</li>
                    </NavHashLink>
                    <li>Support Center</li>
                    <li>Term & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Order Tracking</li>
                    <li>Coming Soon</li>
                    <li>Under Construction</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-4">
              <div className="store_location">
                <div className="footer_title">
                  <h5>STORE LOCATION</h5>
                </div>
                <div className="store_location_link">
                  <ul>
                    <li>New York</li>
                    <li>London SF</li>
                    <li>Cockfosters BP</li>
                    <li>Los Angeles</li>
                    <li>Chicago</li>
                    <li>Las Vegas</li>
                    <li>Albarto</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 py-4">
              <div className="secured_area">
                <div className="footer_title">
                  <h5>SECURED BY</h5>
                </div>
                <div className="secured_area_link">
                  <ul>
                    <li>My Account</li>
                    <li>Track your Order</li>
                    <li>Customer Service</li>
                    <li>Returns Policy</li>
                    <li>FAQs</li>
                    <li>Product Support</li>
                    <li>Fast Shipping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6 py-3">
              <div className="footer_logo">
                <Link to="/">
                  <img src={FooterLogo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 py-3">
              <div className="footer_shopping">
                <p>Online Shopping Made easy with</p>
                <p>Bajaar Online Shop.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 py-3">
              <div className="secured_ing">
                <h5 className="pb-2">SECURED BY</h5>
                <img src={Secured} alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 py-3">
              <div className="payment_img">
                <h5 className="pb-2">WE ACCEPT:</h5>
                <img src={Payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy_right_footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-md-center text-sm-center">
              <div className="copy_right">
                <p>© 2021, Bajaar. All Rights Reserved by XpeedStudio.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="download_by_play_stor text-lg-end text-md-center text-sm-center">
                <span>Download Mobile App:</span>
                <img src={GooglePlayStor} alt="" />
                <img src={ApplePlayStor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="developer_by_payra_soft">
        <div className="container">
          <div className="develop">
            <span className="me-2 fw-bold">Develop By:</span>
            <img src={develope_by} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
