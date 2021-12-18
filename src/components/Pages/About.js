import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header.js";
const About = () => {
  const [show, setShow] = useState(1);
  return (
    <section className="about_section sec_padding  relative">
      <Header />
      <div className="container">
        <div className="row">
          <div className="section_title">
            <h2 className=" dark:text-gray-50">About me</h2>
          </div>
        </div>
        <div className="aboutRow">
          <div data-aos="fade-down-right" className="about_img">
            <div className="about_box">
              <img src="./images/mdasifahmmed.png" alt="about_img" />
            </div>
          </div>
          <div data-aos="fade-down-left" className="about_text">
            <p className="dark:text-gray-50">
              I am Md Asif Ahmed. A young entrepreneur (only 20 years old). At
              the age of 19, I started my entrepreneurial journey. With over 1
              year of professional experience, I’m a Front-end developer, mobile
              app developer, and UI/UX, designer. Moreover, I work on a few
              startups aimed at the Italian, Germani, American, and Dutch
              markets. Among the companies and entrepreneurs, I have worked with
              are FN Softwares & institute.
            </p>
            <h3 className="dark:text-gray-50">my skills</h3>
            <div className="skills dark:text-gray-50">
              <div className="skill_item">html</div>
              <div className="skill_item">css</div>
              <div className="skill_item">javascript</div>
              <div className="skill_item">react.js</div>
              <div className="skill_item">next.js</div>
              <div className="skill_item">node.js</div>
              <div className="skill_item">mongodb</div>
              <div className="skill_item">firebase</div>
              <div className="skill_item">redux</div>
              <div className="skill_item">material-ui</div>
              <div className="skill_item">bootstrap</div>
              <div className="skill_item">tailwind</div>
              <div className="skill_item">Sass</div>
            </div>
            <div className="about_tabs my-5">
              <button
                onClick={() => setShow(1)}
                type="button"
                className={
                  show === 1
                    ? "tab_item text-gray-800 dark:text-gray-50 active"
                    : "tab_item text-gray-800 dark:text-gray-50"
                }
              >
                education
              </button>
              <button
                onClick={() => setShow(2)}
                type="button"
                className={
                  show === 2
                    ? "tab_item text-gray-800 dark:text-gray-50 active"
                    : " dark:text-gray-50 text-gray-800 tab_item "
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
                    <h4 className="text-lg capitalize dark:text-gray-50 mb-3">
                      Secondary School Certificate - <span className="font-normal dark:text-gray-50">
                         Azizia Islamia High School
                      </span>
                    </h4>
                    {/* <p className="dark:text-gray-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium dolorum voluptate, porro soluta architecto sed
                      rerum
                    </p> */}
                  </div>
                  <div className="timeline_item relative pt-3 pl-10 mb-8">
                    <span className="date  block dark:text-gray-50 mb-3 font-normal">
                      2016 - 2017
                    </span>
                    <h4 className="text-lg capitalize dark:text-gray-50 mb-3">
                      Junior School Certificate - <span className="font-normal dark:text-gray-50">
                        Azizia Islamia High School
                      </span>
                    </h4>
                    {/* <p className="dark:text-gray-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium dolorum voluptate, porro soluta architecto sed
                      rerum
                    </p> */}
                  </div>
                  <div className="timeline_item relative pt-3 pl-10 ">
                    <span className="date  block mb-3 dark:text-gray-50 font-normal">
                      2013 - 2014
                    </span>
                    <h4 className="text-lg capitalize dark:text-gray-50 mb-3">
                      Primary School Certificate - <span className="font-normal dark:text-gray-50">
                        Azizia Islamia High School
                      </span>
                    </h4>
                    {/* <p className="dark:text-gray-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium dolorum voluptate, porro soluta architecto sed
                      rerum
                    </p> */}
                  </div>
                </div>
              </div>
            ) : undefined}
            {show === 2 ? (
              <div data-aos="fade-left" className="tab_content py-10">
                <div className="timeline ">
                  <div className="timeline_item relative pt-3 pl-10 mb-8">
                    <span className="date block dark:text-gray-50 mb-3 font-normal">
                      2020 - 2021
                    </span>
                    <h4 className="text-lg dark:text-gray-50 capitalize mb-3">
                      front-end developer
                    </h4>
                    <p className="dark:text-gray-50">
                      I finish learning the skills front-end. And I've worked on a number of projects as a front-end developer.
                    </p>
                  </div>
                  <div className="timeline_item relative pt-3 pl-10 mb-8">
                    <span className="date block dark:text-gray-50 mb-3 font-normal">
                      2021
                    </span>
                    <h4 className="text-lg dark:text-gray-50 capitalize mb-3">
                      back-end developer like node.js
                    </h4>
                    <p className="dark:text-gray-50">
                    I started teaching node.js. Now I finish the node.js framework express.js lesson.
                    </p>
                  </div>
                </div>
              </div>
            ) : undefined}
            <a href="cd.pdf" className="btn">
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
