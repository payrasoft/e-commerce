import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shear/Footer/Footer";
import Menubar from "../../Shear/Menubar/Menubar";
import MyGoogleMap from "./MyGoogleMap";

const ContactUs = () => {
  return (
    <>
      <div className="contactUs_area" id="contactUs_area">
        <Menubar />
        <div className="contact_us_inner_area">
          <div className="container py-5">
            <div className="contact_us_top_area">
              <h2>Our Global Locations</h2>
              <p>
                We're a Creative Design Agency That Gets Excited About Globally.
              </p>
            </div>
            <div className="contact_us_form pt-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="location_info_text border-bottom py-4">
                    <h2>
                      We love to hear <br /> from you
                    </h2>
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart.
                    </p>
                  </div>
                  <div className="location_info pt-4">
                    <div className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="details_info">
                        <Link to="/">
                          121 King St, Melbourne <br />
                          VIC 3000, Australia
                        </Link>
                      </div>
                    </div>
                    <div className="email_address">
                      <i className="fas fa-envelope-open-text"></i>
                      <div className="email_info">
                        <Link to="/">
                          support@example.com <br />
                          info@example.com
                        </Link>
                      </div>
                    </div>
                    <div className="contact_number">
                      <i className="fas fa-phone"></i>
                      <div className="phone_info">
                        <p>
                          + 900 (654) 815 <br /> + 900 (475) 599
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact_form_inner">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea name="" id="message"></textarea>
                    <div className="send_btn">
                      <button>Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="google_map_area my-5">
                <div className="row">
                  <MyGoogleMap />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
