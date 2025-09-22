import React from "react";

interface ProcessItem {
  title: string;
  text: string;
  number: string;
}

const CybersecurityProcessSection: React.FC = () => {
  const processData: ProcessItem[] = [
    {
      title: "Assess",
      text: "Understand your current security posture",
      number: "01"
    },
    {
      title: "Protect", 
      text: "Deploy safeguards and policies",
      number: "02"
    },
    {
      title: "Detect",
      text: "Continuous monitoring for threats",
      number: "03"
    },
    {
      title: "Respond",
      text: "Rapid containment of incidents",
      number: "04"
    },
    {
      title: "Evolve",
      text: "Ongoing adaptation as threats grow",
      number: "05"
    }
  ];

  return (
    <section className="process-area-3">
      <div className="container">
        <div className="process-area-3-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="title-wrapper">
                <h2 className="section-title">Our Approach</h2>
              </div>
              <div className="text-wrapper mb-3">
                <p className="text">We follow a structured, proven framework</p>
              </div>
            </div>
          </div>
          <div className="process-wrapper-box">
            <div className="process-wrapper">
              {processData.map((item, index) => (
                <div key={index} className="process-box-3 fade-anim">
                  <div className="content">
                    <h3 className="title">{item.title}</h3>
                    <p className="text">{item.text}</p>
                  </div>
                  <span className="number">{item.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityProcessSection;