import React, { useEffect, useState } from "react";
import recentwork from "../json/recentwork.json";
import Header from "../Header.js";
import { FidAnimation } from "../Animation";
export default function Projects() {
  const [animation, setAnimation] = useState(false);
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    setProjectData(recentwork.main);
    setTimeout(() => {
      setAnimation(true);
    }, 1000);
  }, []);
  return (
    <section className="home_section sec_padding py-16 relative">
      <Header />
      <div className="container">
        <div className="row">
          <div className="section_title px-4 w-full text-center mb-10">
            <h2 className="dark:text-gray-50 text-5xl capitalize">recent work</h2>
          </div>
        </div>
        <div className="projectRow">
          {animation ? (
            <>
              {projectData.map(({ thumbnail, title, id, linkVisit }) => {
                return (
                  <>
                    <div
                      data-aos="zoom-in-up"
                      className="portfolio_item"
                      key={id}
                    >
                      <div className="portfolio_item_thumbnail p-2 rounded-xl w-full h-36">
                        <img
                          src={thumbnail}
                          className="h-full w-full object-cover rounded-xl"
                          alt="portfolio_thumbnail"
                        />
                      </div>
                      <h3 className="dark:text-gray-50 text-xl capitalize my-5 ">
                        {title}
                      </h3>
                      <a
                        href={linkVisit}
                        target="_blank"
                        type="button"
                        className="btn"
                      >
                        view project
                      </a>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <FidAnimation />
          )}
        </div>
      </div>
    </section>
  );
}
