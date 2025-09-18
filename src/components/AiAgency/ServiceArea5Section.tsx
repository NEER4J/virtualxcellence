"use client";

import { useState } from "react";
import Link from "next/link";
import { Tab, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


const ServiceArea5Section: React.FC = () => {
  const [activeTab, setActiveTab] = useState("healthcare");

  const handleTabSelect = (key: string | null) => {
    if (key) {
      setActiveTab(key);
    }
  };

  const serviceData = {
    subtitle: "Industries We Serve",
    title: "Tailored Solutions for Every Industry",
    buttonText: "Our Industries",
    buttonLink: "/ai-agency/services",
    navTabs: [
      {
        id: "healthcare",
        title: "Healthcare",
        number: "/01",
        icon: "/assets/imgs/icon/icon-10.webp",
        desc: "AI-powered diagnostics, patient management systems, and healthcare automation solutions that improve patient outcomes and streamline medical operations.",
        features: [
          "AI-Powered Diagnostics",
          "Patient Management Systems",
          "Healthcare Automation",
          "Medical Data Analytics",
        ],
      },
      {
        id: "finance",
        title: "Finance",
        number: "/02",
        icon: "/assets/imgs/icon/icon-28.webp",
        desc: "Advanced fraud detection, compliance automation, and financial technology solutions that enhance security and operational efficiency in the financial sector.",
        features: [
          "Fraud Detection Systems",
          "Compliance Automation",
          "Financial Analytics",
          "Risk Management",
        ],
      },
      {
        id: "government",
        title: "Government",
        number: "/03",
        icon: "/assets/imgs/icon/icon-29.webp",
        desc: "e-Governance platforms and citizen services that modernize government operations, improve public service delivery, and enhance citizen engagement.",
        features: [
          "e-Governance Platforms",
          "Citizen Services",
          "Digital Government Solutions",
          "Public Service Automation",
        ],
      },
      {
        id: "retail",
        title: "Retail",
        number: "/04",
        icon: "/assets/imgs/icon/icon-30.webp",
        desc: "Omnichannel commerce solutions and personalization technologies that create seamless shopping experiences and drive customer engagement.",
        features: [
          "Omnichannel Commerce",
          "Personalization Engines",
          "Customer Analytics",
          "E-commerce Solutions",
        ],
      },
      {
        id: "manufacturing",
        title: "Manufacturing",
        number: "/05",
        icon: "/assets/imgs/icon/icon-31.webp",
        desc: "Industry 4.0 solutions and predictive maintenance systems that optimize manufacturing processes, reduce downtime, and improve operational efficiency.",
        features: [
          "Industry 4.0 Solutions",
          "Predictive Maintenance",
          "Smart Manufacturing",
          "IoT Integration",
        ],
      },
    ],
    sliderItems: [
      {
        id: 1,
        text: "SERVE YOUR INDUSTRY",
        link: "/ai-agency/contact",
      },
      {
        id: 2,
        text: "TRANSFORM YOUR SECTOR",
        link: "/ai-agency/contact",
      },
      {
        id: 3,
        text: "INNOVATE YOUR INDUSTRY",
        link: "/ai-agency/contact",
      },
      {
        id: 4,
        text: "LEAD YOUR MARKET",
        link: "/ai-agency/contact",
      },
    ],
  };

  return (
    <section className="service-area-5 fade-anim" suppressHydrationWarning={true}>
      <div className="container">
        <div className="service-area-5-inner section-spacing-top">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
            <div className="subtitle-wrapper pb-3">
                <span className="section-subtitle">
                  {serviceData?.subtitle}
                </span>
              </div>
              <h2 className="section-title">
                {serviceData?.title}
              </h2>
              
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={serviceData?.buttonLink}
                >
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={serviceData?.buttonLink}
                >
                  {serviceData?.buttonText}
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={serviceData?.buttonLink}
                >
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div className="services-wrapper-box fade-anim " suppressHydrationWarning={true}>
            <div className="services-wrapper">
           

              <Tab.Container
                id="services-tabs"
                activeKey={activeTab}
                onSelect={handleTabSelect}
              >
                <Nav variant="pills" className="nav-pills">
                  {serviceData?.navTabs?.map((tab) => (
                    <Nav.Item key={tab?.id}>
                      <Nav.Link eventKey={tab?.id}>
                        <div className="service-name">
                          <h2 className="title">
                            {tab?.title}{" "}
                            <span className="number">{tab?.number}</span>
                          </h2>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>

                <Tab.Content>
                  {serviceData?.navTabs?.map((tab) => (
                    <Tab.Pane eventKey={tab?.id} key={tab?.id}>
                      <div className="service-box-5">
                        <div className="area-bg">
                          <img
                            src="/assets/imgs/shape/shape-33.webp"
                            alt="bg shape"
                          />
                        </div>
                        <div className="thumb">
                          <img src={tab?.icon} alt={tab?.title} />
                        </div>
                        <div className="content">
                          <h3 className="title">{tab?.title}</h3>
                          <p className="text">{tab?.desc}</p>
                          <div className="feature-list">
                            <ul>
                              {tab?.features?.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <Link
                            className="t-btn t-btn-primary"
                            href="/ai-agency/service-details"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default ServiceArea5Section;
