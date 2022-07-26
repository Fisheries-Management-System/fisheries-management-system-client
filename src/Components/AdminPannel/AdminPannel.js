import React from 'react';

const AdminPannel = () => {
    return (
        <div className='m-7 flex'>
            <div class="card w-96 glass rounded-xl">
                <figure><img src="https://placeimg.com/400/225/arch " alt="car!" className='rounded-xl' /></figure>
                <div class="flex justify-between  p-3 ">
                    <h2 className='pt-2'>Status</h2>
                    <button class="btn btn-success">Active</button>
                </div>
            </div>
            <div>
                <div class="overflow-x-auto ml-3 w-full">
                    <table class="table bg-white text-green-500 w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Contact No</th>
                                <th>Degignation</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPannel;