import React from "react";
import MyProfile from "../../../Components/HomePage/MyProfile";
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
        <MyProfile />
      </div>
    </>
  );
};

export default Home;
