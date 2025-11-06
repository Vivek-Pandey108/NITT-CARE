import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-20 h-22" src={assets.logo} alt="" />
          <div className="w-full md:w-2/3 text-gray-600 leading-6 space-y-1 text-lg">
            <div className="font-semibold">NITT-CARE</div>
            <div>
              National Institute of Technology, Tiruchirappalli (NIT- Trichy)
            </div>
            <div>Tiruchirappalli, Tamil Nadu</div>
            <div>620015</div>
          </div>
        </div>

        <div>
          <p className="text-xl font-medium mb-2 text-lg" >COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-lg">
            <li > <a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            <li>Feedback</li>
            <li>Terms and Condition</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-0000000000</li>
            <li>nittcare@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------------ Copyright Text ------------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Made with ❤️ Vivek Pandey</p>
      </div>
    </div>
  );
};

export default Footer;
