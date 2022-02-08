import React from "react";
// import { Link } from "react-router-dom";
import Footer from "../../Shear/Footer/Footer";
import Menubar from "../../Shear/Menubar/Menubar";
import paymentImg from "../../Images/payment_icon.jpg";
import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <>
      <div className="checkout_area" id="checkout_area">
        <Menubar />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">
              <div className="inner_checkout_form">
                <h5>BILLING DETAILS</h5>
                <form>
                  <div className="fname">
                    <label htmlhtmlFor="fname">First name</label>
                    <input type="text" id="fname" className="w-100" required />
                  </div>
                  <div className="lname">
                    <label htmlhtmlFor="lname">First name</label>
                    <input type="text" id="lname" className="w-100" required />
                  </div>
                  <div className="cname">
                    <label htmlhtmlFor="cname">Company name (optional)</label>
                    <input type="text" id="cname" className="w-100" />
                  </div>
                  <p className="pt-3 m-0">Country / Region </p>
                  <div className="country_select">
                    <select aria-label="Default select example" required>
                      <option selected>United Kingdom (UK)</option>
                      <option value="1">United States (US)</option>
                      <option value="2">
                        United States (US) Minor Outlying Islands
                      </option>
                      <option value="3">Uruguay</option>
                    </select>
                  </div>
                  <div className="street_address">
                    <label htmlhtmlFor="address">Street address </label>
                    <input
                      type="text"
                      id="address"
                      className="w-100"
                      placeholder="House number and "
                    />
                    <input
                      type="text"
                      className="w-100 mt-3"
                      placeholder="Apartment, suite, unite, etc, (optional)"
                    />
                  </div>
                  <div className="city">
                    <p className="pt-3 m-0">Town / City </p>
                    <input type="text" className="w-100" placeholder="city" />
                  </div>
                  <div className="country">
                    <p className="pt-3 m-0">County (optional) </p>
                    <input type="text" className="w-100" placeholder="CA" />
                  </div>
                  <div className="post_code">
                    <p className="pt-3 m-0">Postcode </p>
                    <input
                      type="text"
                      className="w-100"
                      placeholder="postcode"
                      required
                    />
                  </div>
                  <div className="phone">
                    <p className="pt-3 m-0">Phone </p>
                    <input
                      type="text"
                      className="w-100"
                      placeholder="phone"
                      required
                    />
                  </div>
                  <div className="email_address">
                    <p className="pt-3 m-0">Email Address </p>
                    <input
                      type="text"
                      className="w-100"
                      placeholder="email address"
                      required
                    />
                  </div>
                  <div className="form-check check_out_input">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Create an account?
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="additional_info">
                <h5>ADDITIONAL INFORMATION</h5>
                <form>
                  <p className="m-0 py-2">Order notes (optional)</p>
                  <textarea
                    name=""
                    id=""
                    placeholder="Notes about your order, e.g special notes for delivery."
                  ></textarea>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <h4>YOUR ORDER</h4>
            <table className="table border text-center my-3 bg-light">
              <tbody>
                <tr>
                  <td className="border">Product</td>
                  <td>Subtotal</td>
                </tr>
                <tr>
                  <td className="border">
                    Surya Race High Speed 400mm Table Fan × 1{" "}
                  </td>
                  <td>$137.00</td>
                </tr>
                <tr>
                  <td className="border">Subtotal </td>
                  <td>$137.00</td>
                </tr>
                <tr>
                  <td className="border">Total </td>
                  <td>$137.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="bank_transfer">
              <div className="payment_list">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Direct bank transfer
                          </label>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="check_box_info">
                          <div className="check_text_inner">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Check payments
                          </label>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="check_box_info">
                          <div className="check_text_inner">
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Cash on delivery
                          </label>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="check_box_info">
                          <div className="check_text_inner">
                            <p>Pay with cash upon delivery.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            <div className="payment_icon d-flex justify-content-center align-items-center">
                              <span>PayPal</span>{" "}
                              <img src={paymentImg} alt="" />
                              <Link to="/">What is PayPal?</Link>
                            </div>
                          </label>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="check_box_info">
                          <div className="check_text_inner">
                            <p>
                              Pay via PayPal; you can pay with your credit card
                              if you don’t have a PayPal account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="privacy_policy pt-4">
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our <Link to="/">privacy policy</Link> .
                </p>
                <button className="place_order_btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
