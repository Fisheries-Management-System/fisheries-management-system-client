import React, { useState } from "react";

const SellingFishManagement = () => {
  const [soldFish, setSoldFish] = useState([]);
  return (
    <div className="mx-5">
      <h1 className="text-3xl my-3">Selling Fish</h1>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="px-4 py-2">NO</th>
            <th className="w-1/4 px-4 py-2">Fish Name</th>
            <th className="w-1/4 px-4 py-2">Unit Price</th>
            <th className="w-1/4 px-4 py-2">Selling Quantity</th>
            <th className="w-1/4 px-4 py-2">Total Sell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-center">1</td>
            <td className="border px-4 py-2 text-center">Hilsha</td>
            <td className="border px-4 py-2 text-center">85</td>
            <td className="border px-4 py-2 text-center">858</td>
            <td className="border px-4 py-2 text-center">858</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SellingFishManagement;
