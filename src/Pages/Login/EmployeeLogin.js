import React from "react";

const EmployeeLogin = () => {
  return (
    <div className="h-screen w-full px-48 bg-gray-200 flex items-center ">
      <div className=" grid grid-cols-1 lg:grid-cols-5 shadow-md rounded border-3 mx-auto  ">
        <div className="bg-blue-500 rounded p-5 text-center text-white col-span-2">
          <h1 className="text-3xl font-bold">Fisheries Management</h1>
          <p className="text-gray-300">
            <small>
              Hello Employee, You Have To Login First. We Give All of Our Employee An Employee ID And Password. Enter Your Employee And Password For
            </small>
          </p>
          <br />
          <h2 className="text-gray-100">Are You Admin? Login here.</h2>
          <h2 className="text-gray-100 underline">
            <a href="#">Admin Login</a>
          </h2>
          <p className="text-gray-300">
            <small>
              Read our <a href="#">terms</a> and <a href="#">conditions</a>
            </small>
          </p>
        </div>
        <div className="p-5 col-span-3 bg-white">
          <div>
            <form class="">
              <h3 className="text-2xl font-semibold text-center mb- ">Employee Login</h3>
              <div class="mb-4">
                <label class="block text-gray-500 text-sm font-bold mb-2" for="username">
                  Employee ID
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter Employee ID"
                />
              </div>
              <div class="mb-6">
                <label class="block text-gray-500 text-sm font-bold mb-2" for="password">
                  Employee Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <label class="md:w-2/3 block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">Remember me</span>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
