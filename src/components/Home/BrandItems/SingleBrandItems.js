import React from "react";

const SingleBrandItems = ({ singleBrand }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-4">
      <div className="inner_single_brands text-center border p-3 my-2">
        <img src={singleBrand?.branImg} alt="" />
        <p className="pt-4">{singleBrand?.brandName}</p>
      </div>
    </div>
  );
};

export default SingleBrandItems;
