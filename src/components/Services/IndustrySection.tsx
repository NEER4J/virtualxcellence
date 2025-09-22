"use client";

import React, { useState } from "react";

interface IIndustry {
  title: string;
  description: string;
  number: string;
  link: string;
  shapeImage: string;
  thumb: string;
}

interface ServiceIndustrySectionProps {
  industryData?: IIndustry[];
  sectionTitle?: string;
}

const ServiceIndustrySection: React.FC<ServiceIndustrySectionProps> = ({ 
  industryData,
  sectionTitle = "Industry Applications"
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!industryData) {
    return null; // Safety check
  }

  return (
    <section className="service-area-2">
      <div className="container">
        <div className="service-area-2-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="title-wrapper">
                <h2 className="section-title">{sectionTitle}</h2>
              </div>
            </div>
          </div>

          <div className="services-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="services-wrapper service-hover-active gap-3">
              {industryData?.map((item: IIndustry, index: number) => (
                <div
                  key={index}
                  className={`service-box-2 ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onMouseOver={() => setActiveIndex(index)}
                >
                    <div className="header cursor-pointer">
                      <h3 className="title">
                        {item?.title}
                        <span className="number">{item?.number}</span>
                      </h3>
                      <p className="text">{item?.description}</p>
                    </div>
                  <div className="service-box-2-inner">
                    <div className="shape-1">
                      <img src={item?.shapeImage} alt="shape" />
                    </div>
                    <div className="thumb">
                      <img src={item?.thumb} alt="thumb" />
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

export default ServiceIndustrySection;
