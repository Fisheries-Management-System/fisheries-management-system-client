import React, { useEffect, useState } from "react";
import "./SellingFish.css";

const SellingFish = () => {
  const [fishes, setFishes] = useState([]);

  const handleDetails = () => {
    
  };

  useEffect(() => {
    fetch("sellingFishData.json")
      .then((res) => res.json())
      .then((data) => {
        setFishes(data);
      });
  }, []);
  return (
    <div className="bg-slate-100 py-10">
      <h2 className="text-center text-4xl my-5">Selling Fish</h2>
      <div className="selling-fish-card-container">
        {fishes.map((fish) => (
          <div key={fish.id} className="selling-fish-card">
            <div className="fish-img-wrapper">
              <img className="fish-img" src={fish.img} alt="" />
            </div>
            <div className="fish-details-wrapper">
              <div className="fish-name-price">
                <div className="fish-name">
                  <p>{fish.name}</p>
                </div>
                <div className="fish-price">
                  <small>
                    $ <span className="fish-price-text">{fish.price}</span>
                    <br />
                    <span>Unit Price</span>
                  </small>
                </div>
              </div>
              <div className="fish-description-wrapper">
                <p className="fish-des-text">
                  {fish.description.slice(0, 150) + " ..."}
                </p>
              </div>
              <div className="fish-button-container">
                <button onClick={() => handleDetails()} className="fish-button">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>{" "}
                  <p>Details</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingFish;
