import React, { useState } from "react";
import Menubar from "../../Shear/Menubar/Menubar";
import Footer from "../../Shear/Footer/Footer";
import accordion from "../../Data/TodaysFlashData/TodaysFlashData";
import { Link } from "react-router-dom";
import man from "../../Images/man_setting_image.png";

const FAQsection = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div className="faq_section" id="faq_section">
        <Menubar />
        <div className="container py-5">
          <h2 className="py-4">Frequently Asked Questions</h2>
          <div className="wrapper">
            <div className="accordion_area">
              {accordion.map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggle(i)}>
                    <p>{item?.fullDescriptionHeader2}</p>
                    <span> {selected === i ? "-" : "+"} </span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    {item?.fullDescription2}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container py-2">
          <h2 className="py-4">Account & settings</h2>
          <div className="wrapper">
            <div className="accordion_area">
              {accordion.map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggle(i)}>
                    <p>{item?.fullDescriptionHeader2}</p>
                    <span> {selected === i ? "-" : "+"} </span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    {item?.fullDescription2}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="shop_now">
            <div className="inner_shop_now">
              <div className="row">
                <div className="col-lg-6">
                  <div className="inner_left_site">
                    <div className="left_site">
                      <h2>
                        Let's Work <br /> Together!
                      </h2>
                      <p>
                        You looking for <br /> something to buy.
                      </p>
                      <Link to="/">
                        Shop Now{" "}
                        <i className="fas fa-arrow-right ms-2 py-3"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right_site">
                    <img src={man} alt="" />
                  </div>
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

export default FAQsection;
