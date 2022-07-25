import React from 'react';
import { BiBookmark } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineConfirmationNumber } from "react-icons/md";
const AddEmployee = () => {
    return (
        <div>
            <div className="container">
                <h1 class="bg-slate-900 w-40 mx-auto py-1 rounded  text-center text-white my-8 font-bold">ADD EMPLOYEE</h1>
            <ul class="steps w-full">
               <li data-content="1" class="step step-neutral text-slate-900 text-sm font-bold"><span className=" text-green-400 text-2xl">< BiBookmark/> </span>EMPLOYEE</li>
               <li data-content="2" class="step step-neutral text-slate-900 text-sm font-bold"><span className=" text-green-400 text-2xl">< FiUserPlus/> </span> ACCOUNT</li>
               <li data-content="3" class="step step-neutral text-slate-900 text-sm font-bold"><span className=" text-green-400 text-2xl">< MdOutlineConfirmationNumber/> </span>CONFIRM</li>
 
           </ul>
             <div className="my-8 mx-44">
                <form>
                    <div className="grid grid-cols-2">
                <div>
                <label class="label">
                 <span class="text-slate-900 text-xs font-bold">EMPLOYEE ID</span></label>
                <input type="text" placeholder="Employee Id" class="input input-bordered input-accent  w-full max-w-xs" />
                    </div>
                <div>
                <label class="label">
                 <span class="text-slate-900 text-xs font-bold">EMPLOYEE NAME</span></label>
                <input type="text" placeholder="Employee Name" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                <div>
                <label class="label">
                 <span class="text-slate-900 text-xs font-bold">EMPLOYEE PASSWORD</span></label>
                <input type="text" placeholder="Employee Password" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                <div>
                <label class="label">
                 <span class="text-slate-900 text-xs font-bold">EMPLOYEE DEGINATION</span></label>
                <input type="text" placeholder="Employee Degination" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                <div>
                <label class="label">
                 <span class="text-slate-900 text-xs font-bold">EMPLOYEE PHONE NUMBER</span></label>
                <input type="text" placeholder="Employee Phone Number" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                <div>
                <label class="label">
                 <span class="text-slate-900 text-xs font-bold">EMPLOYEE ADDRESS</span></label>
                <input type="text" placeholder="Employee Address" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
               
                    </div>  
                    <div className="my-8 grid grid-cols-2 gap-96">
                    <button class="btn mr-36 btn-outline">Previous</button>
                    <button class="btn ml-36 btn-outline btn-primary ">Confirm</button>
                        
                    </div>
                </form>
            </div>

            </div>
            
        </div>
    );
};

export default AddEmployee;