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

const CybersecurityToolsSection: React.FC = () => {
  const toolsData: ToolCategory[] = [
    {
      title: "SIEM & Monitoring",
      tools: [
        { name: "Splunk", icon: "/assets/imgs/client/client-1.webp" },
        { name: "QRadar", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Elastic Security", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Cloud Security", 
      tools: [
        { name: "Prisma Cloud", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Azure Security Center", icon: "/assets/imgs/client/client-1.webp" },
        { name: "AWS GuardDuty", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "IAM",
      tools: [
        { name: "Okta", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Microsoft Entra", icon: "/assets/imgs/client/client-1.webp" },
        { name: "CyberArk", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Endpoint Security",
      tools: [
        { name: "CrowdStrike", icon: "/assets/imgs/client/client-1.webp" },
        { name: "SentinelOne", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

  return (
    <section className="process-area-3">
        <div className="container">
          <div className="process-area-3-inner section-spacing">
            <div className="section-header">
              <div className="section-title-wrapper fade-anim">
                <div className="title-wrapper">
                  <h2 className="section-title">Tools & Technologies We Use</h2>
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

export default CybersecurityToolsSection;
