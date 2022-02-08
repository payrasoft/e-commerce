import React from "react";
import Menubar from "../../Shear/Menubar/Menubar";
import PurchaseOne from "../Purchase/PurchaseOne/PurchaseOne";
import PurchaseTwo from "../Purchase/PurchaseOne/PurchaseTwo";
import SliderProduct from "../SliderProduct/SliderProduct";
import Footer from "../../Shear/Footer/Footer";
import FlashDeals from "../FlashDeals/FlashDeals";
import BrandItems from "../BrandItems/BrandItems";
const Home = () => {
  return (
    <>
      <Menubar />
      <SliderProduct />
      <FlashDeals />
      <FlashDeals />
      <PurchaseOne />
      <FlashDeals />
      <PurchaseTwo />
      <BrandItems />
      <FlashDeals />
      <Footer />
    </>
  );
};

export default Home;
