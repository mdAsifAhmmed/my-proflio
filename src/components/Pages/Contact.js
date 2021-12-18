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
    <section className="context_section sec_padding relative">
      <Header />
      <div className="container">
        <div className="row">
          <div className="section_title">
            <h2 className="dark:text-gray-50">contact me</h2>
          </div>
        </div>
        <div className="row">
          <div data-aos="zoom-out-right" className="contact_form">
            <form action="" onSubmit={sendEmail}>
              <div className="FromRow">
                <div className="input_group">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input_control text-gray-800 dark:text-gray-50"
                    required
                  />
                </div>
                <div className="input_group">
                  <input
                    type="text"
                    name="user_email"
                    placeholder="email"
                    className="input_control text-gray-800 dark:text-gray-50"
                    required
                  />
                </div>
                <div className="input_group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="input_control text-gray-800 dark:text-gray-50"
                    required
                  />
                </div>
                <div className="input_group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="input_control text-gray-800 dark:text-gray-50"
                    required
                  ></textarea>
                </div>
                <div className="submit_btn">
                  <button className="btn">Send Meassage</button>
                </div>
              </div>
            </form>
          </div>
          <div data-aos="zoom-out-left" className="contact_info">
            <div className="contact_info_item">
              <h3 className="dark:text-gray-50">Email</h3>
              <p className="dark:text-gray-50">
                mdasifahmmedofficial@gmail.com
              </p>
            </div>
            <div className="contact_info_item">
              <h3 className="dark:text-gray-50">Phone</h3>
              <p className="dark:text-gray-50">+880 01798892867</p>
            </div>
            <div className="contact_info_item">
              <h3 className="dark:text-gray-50">Follow Me</h3>
              <div className="social_links">
                <a
                  href="https://github.com/mdAsifAhmmed"
                  target="_blank"
                  className="btn"
                >
                  <VscGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-asif-ahmed-68162a200/"
                  target="_blank"
                  className="btn mx-2"
                >
                  <GrLinkedinOption />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01844d464eed86d1ff"
                  target="_blank"
                  className="btn"
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
