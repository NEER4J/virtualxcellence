"use client";

import React, { useState, ReactElement } from "react";

interface Solution {
  title: string;
  items: string[];
}

interface OurSolutionsProps {
  title: string;
  description?: string;
  solutions: Solution[];
}

const OurSolutions = ({ title, description, solutions }: OurSolutionsProps): ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="process-area-2">
      <div className="container">
        <div className="process-area-2-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="title-wrapper">
                <h2 className="section-title">{title}</h2>
              </div>
              {description && (
                <div className="text-wrapper">
                  <p className="text">{description}</p>
                </div>
              )}
            </div>
          </div>

          <div className="process-wrapper-box">
            <div className="process-wrapper process-hover-active fade-anim" suppressHydrationWarning={true}>
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`process-box-2 ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onMouseOver={() => setActiveIndex(index)}
                >
                  <div className="content">
                    <h3 className="title">{solution.title}</h3>
                    <div className="process-list">
                      <ul>
                        {solution.items.map((item, idx) => (
                          <li key={idx}><i className="fa-solid fa-circle-check"></i>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
