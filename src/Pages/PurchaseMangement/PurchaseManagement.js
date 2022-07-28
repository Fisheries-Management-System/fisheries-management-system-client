import React, { useState } from "react";
import { useEffect } from "react";

const PurchaseManagement = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div className="mx-5">
      <h1 className="text-3xl my-3">Purchase Management</h1>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="px-4 py-2">NO</th>
            <th className="w-3/4 px-4 py-2">Product Name</th>
            <th className="w-2/4 px-4 py-2">Price</th>
            <th className="w-2/4 px-4 py-2">Product ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <>
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 text-center">Adam</td>
                <td className="border px-4 py-2 text-center">
                  858 <span>TK</span>
                </td>
                <td className="border px-4 py-2 text-center">858</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseManagement;
