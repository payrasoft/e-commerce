import React from "react";
import { NavHashLink } from "react-router-hash-link";

const SingleFlashDeals = ({ singleProduct }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 my-2">
      <NavHashLink
        to={`/view_project_details/${singleProduct?.id}#view_project_details`}
      >
        <div className="inner_single_product">
          <div className="product_img">
            <img src={singleProduct.img1} alt="" />
            <div className="discount_offer">
              <span> - {singleProduct?.discountOffer}%</span>
            </div>
          </div>
          <div className="product_price">
            <p className="">
              <del>${singleProduct?.oldPrice}</del>
              <span className="ms-2 text-danger">
                ${singleProduct?.newPrice}
              </span>
            </p>
            <div className="price_start_area">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p> Sold: {singleProduct?.sold}</p>
            <p className="product_name">{singleProduct?.name.slice(0, 20)}</p>
            <p className="club_point">Club Point</p>
          </div>
        </div>
      </NavHashLink>
    </div>
  );
};

export default SingleFlashDeals;
