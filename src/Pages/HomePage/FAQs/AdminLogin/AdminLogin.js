import React from 'react';

const AdminLogin = () => {
    return (
      <div className="w-full py-12 px-48 bg-gray-200">
        <div className="grid grid-cols-2 shadow-md rounded border-3">
          <div className="bg-blue-500 rounded p-5 text-center text-white">
            <h1 className="text-3xl font-bold">Fisheries Management</h1>
            <p className="text-gray-300">
              <small>
                Hello Admin, Login For Manage All Employee. If You Are An Admin
                We Give You An Login ID And Password. Enter Your Adimin ID And
                Password For Login.
              </small>
            </p>
            <br />
            <h2 className="text-gray-100">Are You Employee? Login here.</h2>
            <h2 className="text-gray-100 underline">
              <a href="#">Employee Login</a>
            </h2>
            <p className="text-gray-300">
              <small>
                Read our <a href="#">terms</a> and <a href="#">conditions</a>
              </small>
            </p>
          </div>
          <div className="p-5">
            <div>
              <form class="">
                <div class="mb-4">
                  <label
                    class="block text-gray-500 text-sm font-bold mb-2"
                    for="username"
                  >
                    Admin Username
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter Admin Username"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-500 text-sm font-bold mb-2"
                    for="password"
                  >
                    Admin Password
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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

export default AdminLogin;