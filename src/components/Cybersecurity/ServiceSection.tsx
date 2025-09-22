
import React from "react";

interface IChallengeData {
  subtitle: string;
  title: string;
  description: string;
  challenges: string[];
}

const CybersecurityChallengeSection: React.FC = () => {
  const challengeData: IChallengeData = {
    subtitle: "",
    title: "The Challenges Businesses Face",
    description:
      "We understand these challenges and deliver tailored security frameworks to safeguard your assets.",
    challenges: [
      "Increasing ransomware and phishing attacks targeting employees",
      "Cloud misconfigurations leaving critical data exposed",
      "Insider threats leading to unauthorized access",
      "Regulatory compliance requirements (HIPAA, PCI-DSS, GDPR, ISO)",
      "Lack of visibility into security posture",
    ],
  };

  return (
    <section className="service-area-6">
      <div className="container">
        <div className="service-area-6-inner section-spacing">
          <div className="section-content-wrapper">
            

            <div
              className="services-wrapper-box fade-anim"
              data-direction="right"
            >
              <div className="section-title-wrapper">
                {challengeData?.subtitle && (
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">
                      {challengeData?.subtitle}
                    </span>
                  </div>
                )}
                {challengeData?.title && (
                  <div className="title-wrapper">
                    <h2 className="section-title">{challengeData?.title}</h2>
                  </div>
                )}
              </div>

              {challengeData?.description && (
                <div className="text-wrapper">
                  <p className="text">{challengeData?.description}</p>
                </div>
              )}
              {challengeData?.challenges?.length > 0 && (
                <div className="services-wrapper">
                  <ul>
                    {challengeData?.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="section-content fade-anim" data-direction="left">
              
               <div className="image-wrapper">
                 <img 
                   src="/assets/imgs/gallery/image-52.webp" 
                   alt="Cybersecurity Challenge" 
                   className="fade-anim"
                 />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CybersecurityChallengeSection;

// New service section component
interface IService {
  id: number;
  title: string;
  description: string;
  items: string[];
  detailsLink: string;
  itemLink: string;
  number: string;
  image: string;
}

interface ServiceData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllLink: string;
  viewAllText: string;
  services: IService[];
}

const CybersecurityServiceSection: React.FC = () => {
  const serviceData: ServiceData = {
    sectionSubtitle: "",
    sectionTitle: "Our Cybersecurity Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Managed Security Services (MSS)",
        description: "Round-the-clock monitoring of your IT environment with advanced SIEM (Splunk, IBM QRadar) and threat detection.",
        items: [
          "24/7 Security Operations Center (SOC)",
          "Real-time threat intelligence",
          "Automated response workflows"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-1.webp"
      },
      {
        id: 2,
        number: "02",
        title: "Risk Assessment & Compliance",
        description: "Comprehensive audits to identify vulnerabilities and align with compliance frameworks.",
        items: [
          "Gap analysis against global standards (ISO 27001, NIST)",
          "Penetration testing & vulnerability assessments",
          "Data protection & privacy compliance"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-2.webp"
      },
      {
        id: 3,
        number: "03",
        title: "Cloud & Infrastructure Security",
        description: "Protecting your cloud (AWS, Azure, GCP) and hybrid IT environments.",
        items: [
          "Cloud Security Posture Management (CSPM)",
          "Zero Trust access architecture",
          "Container & DevSecOps security"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-3.webp"
      },
      {
        id: 4,
        number: "04",
        title: "Identity & Access Management (IAM)",
        description: "Securing access to critical systems with robust IAM solutions.",
        items: [
          "Multi-Factor Authentication (MFA)",
          "Privileged Access Management (PAM)",
          "Single Sign-On (SSO)"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-4.webp"
      },
      {
        id: 5,
        number: "05",
        title: "Incident Response & Forensics",
        description: "Rapid detection, containment, and recovery from cyber incidents.",
        items: [
          "24/7 response team",
          "Digital forensics to trace root cause",
          "Business continuity planning"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-5.webp"
      }
    ]
  };

  return (
    <section className="service-area">
      <div className="service-area-inner section-spacing-top">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="title-wrapper">
                <h2 className="section-title">{serviceData?.sectionTitle}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="services-wrapper-box">
          <div className="services-wrapper header-stacking-items">
            {serviceData?.services?.map((srv: IService) => (
              <div className="service-box-1 item section-spacing" key={srv?.id}>
                <div className="container">
                  
                  <div className="service-box-inner body">
                     <div className="btn-wrapper">
                       <img src="/assets/imgs/gallery/image-52.webp" alt="Cybersecurity Service" />
                     </div>
                    <div className="content">
                    <h3 className="title">
                      {srv?.title}
                      
                    </h3>
                      <p className="text">{srv?.description}</p>
                       <ul className="service-list">
                         {srv?.items?.map((item: string, index: number) => (
                           <li key={index}>
                             <i className="fa-solid fa-check me-2"></i>
                             {item}
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="final"></div>
      </div>
    </section>
  );
};

export { CybersecurityServiceSection };
