import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
const Navbar = () => {
  return (
    <section className=" sec_padding">
      <Header />
      <div className="container h-4/6">
        <div className="row flex h-full justify-center h_screen">
          <ul className="flex items-center flex-col w-full justify-center">
            <li data-aos="fade-up" data-aos-duration="1400" className=" flex items-center justify-center my w-52 h-12 text-center relative">
              <Link to="/" className=" text-3xl hover_menu_text dark:text-gray-50 btn_bg flex items-center justify-center rounded-xl hover:text-pink-300 font-semibold">Home</Link>
            </li>
           <li data-aos="fade-up" data-aos-duration="13000" className=" flex items-center justify-center w-52 h-12 text-center relative">
              <Link to="/about" className="hover_menu_text text-3xl btn_bg flex items-center justify-center dark:text-gray-50 rounded-xl hover:text-pink-300 font-semibold">About</Link>
            </li>
           <li data-aos="fade-up" data-aos-duration="1200" className=" flex items-center justify-center w-52 h-12 text-center relative">
              <Link to="/protflio" className="hover_menu_text dark:text-gray-50 text-3xl btn_bg flex items-center justify-center rounded-xl hover:text-pink-300 font-semibold">Protflio</Link>
            </li>
           <li data-aos="fade-up" data-aos-duration="1100" className=" flex items-center justify-center w-52 h-12 text-center relative">
              <Link to="/contact" className="hover_menu_text dark:text-gray-50 text-3xl btn_bg flex items-center justify-center rounded-xl hover:text-pink-300 font-semibold">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
