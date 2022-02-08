import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Shear/Footer/Footer";
import Menubar from "../Shear/Menubar/Menubar";
import TodaysFlashData from "../Data/TodaysFlashData/TodaysFlashData";
import User1 from "../Images/users/user1.jpeg";
import User2 from "../Images/users/user2.png";
import User3 from "../Images/users/user3.png";
const ViewProjectDetails = () => {
  const { id } = useParams();
  const [productItem, setProductItem] = useState({});
  useEffect(() => {
    const singleProduct = TodaysFlashData.find((product) => product.id == id);
    setProductItem(singleProduct);
  }, [id]);
  const [addCount, setAddCount] = useState(1);
  const addItem = () => {
    setAddCount(addCount + 1);
  };
  const decItem = () => {
    if (addCount > 0) {
      setAddCount(addCount - 1);
    }
  };
  // const [selectedImg, setSelectedImg] = useState(productItem.img[0]);
  return (
    <>
      <div id="view_project_details">
        <Menubar />
        <div className="view_project_details_area">
          <div className="container py-5">
            <div className="product_details_inner">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single_product_img">
                    <img src={productItem?.img1} alt="" />
                  </div>
                  {/* <div className="product_bottom_img">
                    <img src={productItem?.img1} alt="" />
                    <img src={productItem?.img2} alt="" />
                    <img src={productItem?.img3} alt="" />
                    <img src={productItem?.img4} alt="" />
                  </div> */}
                </div>
                <div className="col-lg-6">
                  <div className="product_info">
                    <p>{productItem?.sku}</p>
                    <h3>{productItem?.name}</h3>
                    <div className="review_product py-3">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <Link to="/">(3 Customer Reviews)</Link>
                    </div>
                    <div className="stock border-bottom py-3">
                      <p className="text-danger fw-bold">
                        <i className="fas fa-check-circle me-2"></i>
                        {productItem?.stock} IN STOCK
                      </p>
                    </div>
                    <div className="product_description py-3">
                      <p>{productItem?.description}</p>
                    </div>
                    <div className="product_price">
                      <h3>
                        <del className="fs-2 fw-bold me-4">
                          ${productItem?.oldPrice}
                        </del>
                        <span className="fs-2 fw-bold">
                          ${productItem?.newPrice}
                        </span>
                      </h3>
                    </div>
                    <div className="product_count_area">
                      <div className="add_btn d-flex">
                        <p className="m-2" onClick={decItem}>
                          <i className="fas fa-minus"></i>
                        </p>
                        <input
                          className="m-2"
                          type="number"
                          placeholder={addCount}
                        />
                        <p className="m-2" onClick={addItem}>
                          <i className="fas fa-plus"></i>
                        </p>
                        <div className="add_to_cart_btn m-2">
                          <button>ADD TO CART</button>
                        </div>
                        <p className="select_list text-center m-2">
                          <i className="far fa-heart"></i>
                        </p>
                        <p className="select_list text-center m-2">
                          <i className="fas fa-compress-alt"></i>
                        </p>
                      </div>
                    </div>
                    <div className="categories py-3">
                      <p>
                        categories <Link to="/">{productItem?.categories}</Link>{" "}
                      </p>
                    </div>
                    <div className="share_btn">
                      <span className="me-3">SHARE:</span>
                      <i className="fab fa-facebook-f"></i>
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-youtube"></i>
                      <i className="fab fa-instagram"></i>
                      <i className="fab fa-linkedin-in"></i>
                      <i className="fab fa-pinterest-p"></i>
                      <i className="far fa-envelope"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 bg-light p-5 ">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    DESCRIPTION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    ADDITIONAL INFORMATION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    REVIEWS ( 3 )
                  </button>
                </li>
              </ul>
              <div
                className="tab-content mt-3 p-0  single_book_details"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade show active "
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="inner_left_product_details">
                        <h3>{productItem?.fullDescriptionHeader1}</h3>
                        <p>{productItem?.fullDescription1}</p>
                        <h3>{productItem?.fullDescriptionHeader2}</h3>
                        <p>{productItem?.fullDescription2}</p>
                        <h3>{productItem?.fullDescriptionHeader3}</h3>
                        <p>{productItem?.fullDescription3}</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="inner_right_product_details">
                        <img
                          className="w-50 text-center d-block m-auto"
                          src={productItem?.describeImg1}
                          alt=""
                        />
                        <p>{productItem?.fullDescription4}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="">
                        <div className="product_img_bottom">
                          <img
                            className="h-25"
                            src={productItem?.describeImg2}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Color</td>
                        <td>{productItem?.color}</td>
                      </tr>
                      <tr>
                        <td>Size</td>
                        <td>{productItem?.Size}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 py-2">
                      <div className="review_left_site">
                        <h4>AVERAGE RATING</h4>
                        <h2 className="pb-4">5.00</h2>
                        <div className="rating_box">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                        </div>
                        <h4 className="py-2">3 Review</h4>
                        <div className="review_par_box">
                          <div className="five_start">
                            <span className="start">5 start</span>
                            <p>100%</p>
                          </div>
                          <div className="four_start five_start">
                            <span className="start">4 start</span>
                            <p>0%</p>
                          </div>
                          <div className="four_start five_start">
                            <span className="start">3 start</span>
                            <p>0%</p>
                          </div>
                          <div className="four_start five_start">
                            <span className="start">2 start</span>
                            <p>0%</p>
                          </div>
                          <div className="four_start five_start">
                            <span className="start">1 start</span>
                            <p>0%</p>
                          </div>
                        </div>
                        <div className="user_review_area">
                          <div className="inner_review_box py-4">
                            <img src={User1} alt="" />
                            <div className="user_comment">
                              <div>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                              </div>
                              <h3>
                                Andrew
                                <span>– September 19, 2021</span>
                              </h3>
                              <p>
                                The most influential album of the last 25 years?
                                This just might be it.
                              </p>
                            </div>
                          </div>
                          <div className="inner_review_box py-4">
                            <img src={User2} alt="" />
                            <div className="user_comment">
                              <div>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                              </div>
                              <h3>
                                Maria
                                <span>– September 19, 2021</span>
                              </h3>
                              <p>
                                Love this shirt! The ninja near and dear to my
                                heart.
                              </p>
                            </div>
                          </div>
                          <div className="inner_review_box py-4">
                            <img src={User3} alt="" />
                            <div className="user_comment">
                              <div>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                              </div>
                              <h3>
                                Coen Jacobs
                                <span>– September 19, 2021</span>
                              </h3>
                              <p>
                                One morning, when Gregor Samsa woke from
                                troubled dreams, he found himself transformed in
                                his.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 py-2">
                      <div className="reviews_right_site">
                        <p>
                          Your email address will not be published. Required
                          fields are marked
                        </p>
                        <form className="reviews_form login_form">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" className="w-100" />
                          <label htmlFor="email" className="pt-3">
                            Email
                          </label>
                          <input type="email" id="email" className="w-100" />
                          <div className="form-check reviews_check_box login_check_box">
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
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                          <div className="user_rating_area py-3">
                            <p className="m-0">Your rating</p>
                            <i className="far fa-star text-warning"></i>
                            <i className="far fa-star text-warning"></i>
                            <i className="far fa-star text-warning"></i>
                            <i className="far fa-star text-warning"></i>
                            <i className="far fa-star text-warning"></i>
                          </div>
                          <div className="user_review">
                            <p>Your review</p>
                            <textarea name="" id=""></textarea>
                          </div>
                          <div className="review_rating_btn login_btn">
                            <button type="submit">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default ViewProjectDetails;
