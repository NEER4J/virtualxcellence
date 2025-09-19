"use client";

import { useState } from "react";

interface JourneyItem {
  id: number;
  period: string;
  description: string;
}

const JourneySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const journeyItems: JourneyItem[] = [
    {
      id: 1,
      period: "2004–2015",
      description: "Founded in Ontario, delivering software solutions to SMEs."
    },
    {
      id: 2,
      period: "2016–2018",
      description: "Expanded into consulting and leadership services."
    },
    {
      id: 3,
      period: "2019–2021",
      description: "Strengthened expertise in AI, automation, and cloud adoption."
    },
    {
      id: 4,
      period: "2022–2024",
      description: "Partnered with enterprises on large-scale transformation projects."
    },
    {
      id: 5,
      period: "2025 & Beyond",
      description: "Continuing to drive AI-led innovation and digital growth across industries."
    }
  ];

  return (
    <section className="team-area-5">
      <div className="team-area-5-inner section-spacing">
        <div className="container">
          <div className="section-header">
            <div
              className="section-title-wrapper fade-anim"
              suppressHydrationWarning={true}
            >
              <div className="title-wrapper">
                <h2 className="section-title">Our Journey</h2>
              </div>
            </div>
          </div>

          <div
            className="team-wrapper-box fade-anim"
            suppressHydrationWarning={true}
          >
            <div className="team-wrapper-5">

            <ul className="nav nav-team" id="journey-tab" role="tablist">
                {journeyItems?.map((item) => (
                  <li className="nav-item" role="presentation" key={item?.id}>
                    <div
                      className={`nav-link ${
                        activeTab === item?.id ? "active" : ""
                      }`}
                      role="tab"
                      onClick={() => setActiveTab(item?.id)}
                    >
                      <div className="author">
                        <h3 className="name">{item?.period}</h3>
                        <span className="post">{item?.description}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
            <div className="tab-content" id="journey-tabContent">
                {journeyItems?.map((item) => (
                  <div
                    key={item?.id}
                    className={`tab-pane fade ${
                      activeTab === item?.id ? "show active" : ""
                    }`}
                    id={`journey-${item?.id}`}
                    role="tabpanel"
                  >
                    <div className="team-box">
                      <div className="thumb">
                        <img
                          src="/assets/imgs/team/team-14.webp"
                          alt={item?.period}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
