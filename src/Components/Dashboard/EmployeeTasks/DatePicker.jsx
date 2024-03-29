import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import employee from "../../../img/employee.png";

const DatePicker = ({ date, setDate }) => {
  return (
    <>
      <h1 className="text-center mt-8 mb-10 text-xl md:text-2xl font-semibold">
        Select A Date You Want To See
      </h1>
      <div className="hero">
        <div className="hero-content  w-full gap-16 flex-col justify-between items-center lg:flex-row-reverse">
          <img
            src={employee}
            className="w-400 hidden lg:block max-w-sm rounded-lg shadow-2xl"
            alt="/"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
