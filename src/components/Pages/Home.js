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
    <section className="home_section items-center relative">
      <Header />
      <div className="container">
        <div className="row items-center">
          <div data-aos="fade-right" className="home_text">
            <p className="dark:text-gray-50">Hello, I'm</p>
            <h1 className="dark:text-gray-50 font-bold">Md Asif Ahmed</h1>
            <h2 className="dark:text-gray-50">frontend web developer</h2>
            <Link to="/about" className="btn">
              more about me
            </Link>
            <Link to="/protflio" className="btn">
              portfolio
            </Link>
          </div>
          <div data-aos="fade-left" className="home_img">
            <div className="img_box">
              <img src="./images/mdasifahmmed.png" alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
