import React from "react";
import Review from "../../../Components/HomePage/Testimonial/Review";
import Banner from "../../../Components/Banner/Banner";
import FAQs from "../../../Components/FAQs/FAQs";
import FeaturedProducts from "../../../Components/FeaturedProduct/FeaturedProduct";
const Home = () => {
  return (
    <>
      <Banner />
      <div
        style={{
          backgroundColor: "green",
          marginTop: "10px",
          height: "40px",
          fontFamily: "Arial",
          fontWeight: "bold",
        }}
      >
        <marquee behavior="" direction="">
          Fisheries management is the process of developing and enforcing the
          policies necessary to prevent overfishing and aid the recovery of
          overfished stocks
        </marquee>
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div className="bg-slate-100">
        <Review />
      </div>
      <div>
        <FAQs />
      </div>
    </>
  );
};

export default Home;
