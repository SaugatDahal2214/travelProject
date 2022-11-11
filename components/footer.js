import { FaFacebook, FaTwitter, FaInstagram, FaCcMastercard, FaCcPaypal,FaCcVisa } from "react-icons/fa";
import Link from "next/link";

export default function footer() {
  return (
<>
  <div className="bg-sky-100 h-2/5 w-full flex md:flex-row flex-col justify-around items-start p-20">
    <div className="p-5">
      <ul>
        <Link
            href={"/"}
            className=" font-bold uppercase text-2xl text-blue-900"
          >
            Horizon Expedition
          </Link>
          <div className="flex gap-6 py-5 ">
            <FaFacebook  className="text-blue-900 text-2xl cursor-pointer hover:text-sky-500"/>
            <FaInstagram  className="text-blue-900 text-2xl cursor-pointer hover:text-sky-500"/>
            <FaTwitter  className="text-blue-900 text-2xl cursor-pointer hover:text-sky-500"/>


          </div>
      </ul>

    </div>
    <div className="p-5">
      <ul>
        <p className="text-blue-900 font-bold text-xl pb-4">Contact Us</p>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer">Sifal-7, Kathmandu, Nepal</li>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer">Phone: +977-9844444444</li>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer">Email: info@horizon.com</li>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer">Email: horizon.expen@gmail.com</li>
      </ul>

    </div>
    <div className="p-5">
      <ul>
        <p className="text-blue-900 font-bold text-xl pb-4">Overview</p>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer">
          Home
        </li>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer" >
          About
        </li>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer">
          Galley
        </li>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer">
          Services
        </li>
        <li className="text-blue-900 font-semibold text-l hover:text-sky-500 cursor-pointer">
          Contact
        </li>
      </ul>

    </div>
    <div class="p-5">
      <ul className="text-blue-900 font-bold text-xl pb-4">
        We accept
        <li>
          
          <div className="flex gap-6 py-5 ">
            <FaCcMastercard  className="text-blue-900 text-3xl cursor-pointer hover:text-sky-500"/>
            <FaCcPaypal  className="text-blue-900 text-3xl cursor-pointer hover:text-sky-500"/>
            <FaCcVisa className="text-blue-900 text-3xl cursor-pointer hover:text-sky-500"/>

          </div>
        </li>
      </ul>
    </div>
    <div>
    </div>
  </div>
  <div className="flex flex-col justify-center items-cents text-center p-5 bg-sky-200 h-2">
    <p className="text-gray-800 font-semibold text-sm">Copyright ©2022. All rights reserved</p>
  </div>
  </>
  )
}
