import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <footer class="footer p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl justify-items-center">
        <div className="text-white">
          <span class="footer-title">Services</span>
          <a class="link link-hover">Product</a>
          <a class="link link-hover">Tools</a>
          <a class="link link-hover">Employer</a>
          <a class="link link-hover">Custom Tools</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span class="footer-title">Newsletter</span>
          <div class="form-control w-80">
            <div class="relative">
              <input type="text" placeholder="username@site.com" class="input input-bordered w-full bg-white text-black pr-16" />
              <button class="btn bg-teal-600 text-white absolute top-0 right-0 bordered-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div class="grid max-w-7xl mx-auto h-1 card bg-slate-800 rounded-box place-items-center"></div>
      <div className=" flex justify-between max-w-7xl mx-auto pt-6  ">
        <div className=""> &copy; 2022 Fisheries Management</div>
        <div className="">
          <a href=""> Terms of Service</a>
          <a href=""> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;