import React from "react";

const TrendingProducts = ({ singleProduct }) => {
  // console.log(singleProduct);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="inner_single_product m-2 mx-0 p-2">
        <div className="product_img">
          <img src={singleProduct?.img1} alt="" />
          <div className="discount_offer">
            <span> - {singleProduct?.discountOffer}%</span>
          </div>
        </div>
        <div className="product_info">
          <p className="m-0 pb-1 pt-3">{singleProduct?.name}</p>
          <div className="price p-0 m-0">
            <span className="fs-4 me-2 text-danger fw-bold">
              $ {singleProduct?.newPrice}
            </span>
            <del>$ {singleProduct?.oldPrice}</del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
