import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header.js";
const About = () => {
  const [show, setShow] = useState(1);
  return (
    <section className="about_section py-16  relative">
      <Header />
      <div className="container">
        <div className="row">
          <div className="section_title px-4 w-full text-center mb-10">
            <h2 className=" dark:text-gray-50 text-5xl capitalize">About me</h2>
          </div>
        </div>
        <div className="aboutRow">
          <div data-aos="fade-down-right" className="about_img w-5/12 px-4">
            <div className="about_box rounded-xl m-auto">
              <img className=" w-full h-full rounded-xl" src="./images/mdasifahmmed.png" alt="about_img" />
            </div>
          </div>
          <div data-aos="fade-down-left" className="about_text w-7/12 px-4">
            <p className="dark:text-gray-50">
            I am Md Asif Ahmed. A Full-Stack Developer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance. With over 3 years of professional experience, I’m a  Full-Stack Developer, mobile app developer, and UI/UX, designer. Moreover, I work on a few startups aimed at the Italian, Germani, American, and Dutch markets. Among the companies and entrepreneurs, I have worked with are KS Devware.
            </p>
            <h3 className="dark:text-gray-50 capitalize text-xl my-5">my skills</h3>
            <div className="skills flex flex-wrap dark:text-gray-50">
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">html</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">css</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">javascript</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">react.js</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">next.js</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">React-Native</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">node.js</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">mongodb</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">firebase</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">redux</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">material-ui</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">bootstrap</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">tailwind</div>
              <div className="skill_item py-1 px-4 capitalize mr-3 mb-3 rounded-full">Sass</div>
            </div>
            <div className="about_tabs my-5">
              <button
                onClick={() => setShow(1)}
                type="button"
                className={
                  show === 1
                    ? "tab_item p-1 bg-transparent border-none capitalize inline-block text-xl font-medium relative transition-all delay-300 ease-in-out text-gray-800 dark:text-gray-50 active"
                    : "tab_item p-1 bg-transparent border-none capitalize inline-block text-xl font-medium relative transition-all delay-300 ease-in-out text-gray-800 dark:text-gray-50"
                }
              >
                education
              </button>
              <button
                onClick={() => setShow(2)}
                type="button"
                className={
                  show === 2
                    ? "tab_item p-1 bg-transparent border-none capitalize inline-block text-xl font-medium relative transition-all delay-300 ease-in-out text-gray-800 dark:text-gray-50 active"
                    : " dark:text-gray-50 text-gray-800 tab_item p-1 bg-transparent border-none capitalize inline-block text-xl font-medium relative transition-all delay-300 ease-in-out "
                }
              >
                experience
              </button>
            </div>
            {show === 1 ? (
              <div data-aos="fade-left" className="tab_content py-10">
                <div className="timeline ">
                  <div className="timeline_item relative pt-3 pl-10 mb-8">
                    <span className="date block mb-3 dark:text-gray-50 font-normal">
                      2017 - 2019
                    </span>
                    <h4 className="text-lg font-semibold capitalize dark:text-gray-50 mb-3">
                      Secondary School Certificate - <span className="font-normal dark:text-gray-50">
                         Azizia Islamia High School
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            ) : undefined}
            {show === 2 ? (
              <div data-aos="fade-left" className="tab_content py-10">
                <div className="timeline ">
                  <div className="timeline_item relative pt-3 pl-10 mb-8">
                    <span className="date block dark:text-gray-50 mb-3 font-normal">
                      2020 - 2022
                    </span>
                    <h4 className=" text-2xl dark:text-gray-50 capitalize mb-3">
                    full-stack developer
                    </h4>
                    <p className="dark:text-gray-50">
                    A Full-Stack Developer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance.
                    </p>
                  </div>
                </div>
              </div>
            ) : undefined}
            <a href="/images/Md-Asif-Ahmed-Resume.pdf" className="btn mb-3" download>
              download cv
            </a>
            <Link to="/contact" className="btn ml-3">
              contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
