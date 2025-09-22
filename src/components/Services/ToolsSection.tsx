"use client";

import React from "react";

interface ToolItem {
  name: string;
  icon: string;
}

interface ToolCategory {
  title: string;
  tools: ToolItem[];
}

interface ServiceToolsSectionProps {
  toolsData?: ToolCategory[];
  sectionTitle?: string;
}

const ServiceToolsSection: React.FC<ServiceToolsSectionProps> = ({ 
  toolsData,
  sectionTitle = "Tools & Technologies We Use"
}) => {
  if (!toolsData) {
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
              </div>
            </div>
            <div className="process-wrapper-box">
              <div className="tools-wrapper">
                {toolsData.map((category, index) => (
                  <div key={index} className="tools-wrapper-box">
                    <div className="content">
                      <h3 className="title">{category.title}</h3>
                      <div className="tools-grid">
                        {category.tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="tool-item">
                            <div className="tool-icon">
                              <img src={tool.icon} alt={tool.name} />
                            </div>
                            <span className="tool-name">{tool.name}</span>
                          </div>
                        ))}
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

export default ServiceToolsSection;
