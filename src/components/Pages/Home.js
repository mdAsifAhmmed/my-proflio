import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header.js";
import Aos from "aos";
import "aos/dist/aos.css"
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="home_section flex py-28 items-center relative">
      <Header />
      <div className="container">
        <div className="row items-center">
          <div data-aos="fade-right" className="home_text w-6/12 p-4">
            <p className="dark:text-gray-50 text-2xl">Hello, I'm</p>
            <h1 className="dark:text-gray-50 text-5xl py-5 capitalize font-bold">Md Asif Ahmed</h1>
            <h2 className="dark:text-gray-50 text-3xl text-gray-900 capitalize font-light mt-0 ml-0 mb-8">frontend web developer</h2>
            <Link to="/about" className="btn mb-4">
              more about me
            </Link>
            <Link to="/protflio" className="btn ml-4 mb-4">
              portfolio
            </Link>
          </div>
          <div data-aos="fade-left" className="home_img w-6/12 p-4">
            <div className="img_box rounded-full m-auto">
              <img className=" rounded-full w-full" src="./images/mdasifahmmed.png" alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
