import React from "react";
import Brands from "../../Data/Brands/Brands";
import SingleBrandItems from "./SingleBrandItems";

const BrandItems = () => {
  return (
    <div>
      <div className="container">
        <div className="inner_brands">
          <div className="product_title_area">
            <div className="left_site_heading">
              <h6>Top Brands</h6>
            </div>
            <div className="right_site_link">
              <span>SEE ALL BRANDS</span>
              <i className="fas fa-chevron-circle-right text-danger ms-2"></i>
            </div>
          </div>
          <div className="row">
            {Brands.map((singleBrand) => (
              <SingleBrandItems
                key={singleBrand?.id}
                singleBrand={singleBrand}
              ></SingleBrandItems>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandItems;
