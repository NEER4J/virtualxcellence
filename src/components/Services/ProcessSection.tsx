import React from "react";

interface ProcessItem {
  title: string;
  text: string;
  number: string;
}

interface ServiceProcessSectionProps {
  processData?: ProcessItem[];
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const ServiceProcessSection: React.FC<ServiceProcessSectionProps> = ({ 
  processData,
  sectionTitle = "Our Approach",
  sectionSubtitle = "We follow a structured, proven framework"
}) => {
  if (!processData) {
    return null; // Safety check
  }

  return (
    <section className="process-area-3">
      <div className="container">
        <div className="process-area-3-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="title-wrapper">
                <h2 className="section-title">{sectionTitle}</h2>
              </div>
              <div className="text-wrapper mb-3">
                <p className="text">{sectionSubtitle}</p>
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

export default ServiceProcessSection;