import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home/Home";
import Login from "./components/Pages/Login/Login";
import ViewProjectDetails from "./components/ViewProjectDetails/ViewProjectDetails";
import Checkout from "./components/Pages/Checkout/Checkout";
import FAQsection from "./components/Pages/FAQsection/FAQsection";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/view_project_details/:id"
            element={<ViewProjectDetails />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq_section" element={<FAQsection />} />
          <Route path="/contactUs_area" element={<ContactUs />} />
          <Route path="/about_us_area" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
