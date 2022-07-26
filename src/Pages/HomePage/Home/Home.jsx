import React from "react";
import AdminPannel from "../../../Components/AdminPannel/AdminPannel";
import Review from "../../../Components/HomePage/Testimonial/Review";
import Banner from "../Banner/Banner";



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
      <div className="bg-slate-100">
        <Review />
        <AdminPannel />
      </div>
    </>
  );
};

export default Home;
