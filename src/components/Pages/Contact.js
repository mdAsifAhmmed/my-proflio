import React from "react";
import { VscGithub } from "react-icons/vsc";
import { GrLinkedinOption } from "react-icons/gr";
import { SiUpwork } from "react-icons/si";
import Header from "../Header.js";
import emailjs from "emailjs-com";
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kcl62br",
        "template_qjxiwry",
        e.target,
        "user_KBm2XFeNVPsC98FOAFYz9"
      )
      .then((res) => alert(res))
      .catch((err) => console.log(err));
  }
  return (
    <section className="context_section sec_padding py-16 relative">
      <Header />
      <div className="container">
        <div className="row">
          <div className="section_title px-4 w-full text-center mb-10">
            <h2 className="dark:text-gray-50 text-5xl capitalize">
              contact me
            </h2>
          </div>
        </div>
        <div className="row">
          <div
            data-aos="zoom-out-right"
            className="contact_form mb w-6/12 px-4"
          >
            <div className="about_box h-96 w-96 rounded-xl m-auto">
              <img
                className=" w-full h-full object-cover rounded-xl"
                src="./images/mdasifahmmed.png"
                alt="about_img"
              />
            </div>
          </div>
          <div data-aos="zoom-out-left" className="contact_info w-6/12 px-4">
            <div className=" mt-0 ml-0 mr-0 mb-8 pl-5">
              <h3 className="dark:text-gray-50 text-xl capitalize mb-1">
                Email
              </h3>
              <p className="dark:text-gray-50">
                mdasifahmmedofficial@gmail.com
              </p>
            </div>
            <div className=" mt-0 ml-0 mr-0 mb-8 pl-5">
              <h3 className="dark:text-gray-50 text-xl capitalize mb-1">
                Phone
              </h3>
              <p className="dark:text-gray-50">+880 01798892867</p>
            </div>
            <div className=" mt-0 ml-0 mr-0 mb-8 pl-5">
              <h3 className="dark:text-gray-50 text-xl capitalize mb-1">
                Follow Me
              </h3>
              <div className="social_links">
                <a
                  href="https://github.com/mdAsifAhmmed"
                  target="_blank"
                  className="btn inline-block px-5 w-fit"
                >
                  <VscGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-asif-ahmed-68162a200/"
                  target="_blank"
                  className="btn mx-2 inline-block px-5 w-fit"
                >
                  <GrLinkedinOption />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01844d464eed86d1ff"
                  target="_blank"
                  className="btn inline-block px-5 w-fit"
                >
                  <SiUpwork />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
