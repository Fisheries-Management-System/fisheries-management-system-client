import React from "react";
import Review from "../../../Components/HomePage/Testimonial/Review";
import Footer from "../../SharedPages/Footer/Footer";

const Home = () => {
  return (
    <>
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
          Fisheries management is the process of developing and enforcing the policies necessary to prevent overfishing and aid the recovery of
          overfished stocks
        </marquee>
      </div>
      <div className="bg-slate-100">
        <Review />
      </div>
      <Footer />
    </>
  );
};

export default Home;
