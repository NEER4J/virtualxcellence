"use client";

import React, { useState } from "react";
import { Rocket, Building2, Users, Globe, Heart, CreditCard, Factory, ShoppingCart, GraduationCap } from "lucide-react";

interface IIndustry {
  title: string;
  description: string;
  number: string;
  link: string;
  icon: string;
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
                    <div 
                      className="industry-icon-container"
                      style={{
                        width: '300px',
                        height: '300px',
                        background: '#dc3545',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}
                    >
                      {(() => {
                        const IconComponent = {
                          'Rocket': Rocket,
                          'Building2': Building2,
                          'Users': Users,
                          'Globe': Globe,
                          'Heart': Heart,
                          'CreditCard': CreditCard,
                          'Factory': Factory,
                          'ShoppingCart': ShoppingCart,
                          'GraduationCap': GraduationCap
                        }[item.icon];
                        
                        return IconComponent ? (
                          <IconComponent style={{ width: '200px', height: '200px', color: '#fff' }} />
                        ) : (
                          <div style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>?</div>
                        );
                      })()}
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
