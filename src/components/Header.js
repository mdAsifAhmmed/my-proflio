import React from "react";
import { Link } from "react-router-dom";
import Toggole from "../themes/Toggole";

export default function Blogs() {
  return (
    <div className="header absolute right-0 top-7">
      <div className="container">
        <div className="row">
          <div className="items-center flex">
            <div className="w-12 h-12 btn toggle-theme mr-3 rounded-full cursor-pointer p-0 ">
              <Link to="/" className=" w-full h-full flex items-center justify-center hover:text-white">
                <svg
                  className="h-full w-full p-3 text-pink-700 hover:text-gray-50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
                </svg>
              </Link>
            </div>
            <Toggole />
            <Link to="/navbar">
            
                <button
                  type="button"
                  className="nav_toggle w-12 h-12 ml-3 border-none cursor-pointer rounded-full relative"
                >
                  <span></span>
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
