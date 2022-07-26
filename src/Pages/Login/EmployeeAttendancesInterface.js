import { tr } from "date-fns/locale";
import React from "react";

const EmployeeAttendancesInterface = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July ", "August ", "September ", "October ", "November ", "December "];

  const d = new Date();
  let month = months[d.getMonth()];

  const Attendances = [
    {
      id: 1,
      name: "arif ",
      emploeeId: 555,
    },
    {
      id: 1,
      name: "farabi ",
      emploeeId: 505,
    },
    {
      id: 1,
      name: "arif Rahman ",
      emploeeId: 550,
    },
  ];
  return (
    <div className="px-20 bg-slate-200 min-h-screen ">
      <div className="flex justify-end">
        <button className=" btn btn-primary mt-12 mb-3">Add New Employee</button>
      </div>
      <p className="font-bold py-4 px-2 bg-white">
        {month}
        {d.getDate()}, {d.getFullYear()} Attendance
      </p>
      <div class="overflow-x-auto w-full pb-20">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>EMPLOYEE NAME</th>
              <th>EMPLOYEE ID</th>
              <th>ATTENDANCE</th>
            </tr>
          </thead>
          <tbody>
            {Attendances.map((attendanc) => (
              <tr>
                <td>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </td>
                <td>{attendanc.emploeeId}</td>
                <td>{attendanc.name}</td>
                <td>
                  <button className="btn bg-teal-400 border-0">present</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeAttendancesInterface;
