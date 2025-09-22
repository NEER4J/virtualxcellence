"use client";

import React, { useState } from "react";

interface IIndustry {
  title: string;
  description: string;
  number: string;
  link: string;
  shapeImage: string;
  thumb: string;
  thumb2: string;
}

const CybersecurityIndustrySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const industryData: IIndustry[] = [
    {
      title: "Banking & Finance",
      description: "PCI-DSS compliance, fraud prevention",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp",
      thumb2: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Healthcare",
      description: "HIPAA compliance, patient data protection",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp",
      thumb2: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Government",
      description: "Protecting critical infrastructure",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp",
      thumb2: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Retail & eCommerce",
      description: "Securing customer data and transactions",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp",
      thumb2: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  return (
    <section className="service-area-2">
      <div className="container">
        <div className="service-area-2-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="title-wrapper">
                <h2 className="section-title">Industry Applications</h2>
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

export default CybersecurityIndustrySection;
