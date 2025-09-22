import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ServiceChallengeSection, { ServiceSection } from "@/components/Services/ServiceSection";
import ServiceProcessSection from "@/components/Services/ProcessSection";
import ServiceIndustrySection from "@/components/Services/IndustrySection";
import ServiceToolsSection from "@/components/Services/ToolsSection";
import ServiceTextSliderSection from "@/components/Services/TextSliderSection";
import ServiceFaqSection from "@/components/Services/FaqSection";
import FooterSection from "@/components/Home/FooterSection";


export const metadata: Metadata = {
  title: "Cybersecurity Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Explore our comprehensive cybersecurity services with Virtual Xcellence. Professional security solutions, threat protection, and digital safety for your business with advanced security measures.",
  keywords: [
    "Virtual Xcellence cybersecurity",
    "cybersecurity services",
    "digital security solutions",
    "threat protection",
    "cyber defense",
    "security consulting",
    "vulnerability assessment",
    "penetration testing",
    "security monitoring",
    "incident response",
    "cyber risk management",
    "data protection",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Cybersecurity Services Page",
  },
};

const CybersecurityPage = (): ReactElement => {
  // Challenge Data for Cybersecurity
  const challengeData = {
    subtitle: "",
    title: "The Cybersecurity Challenges Businesses Face",
    description: "We understand these challenges and deliver tailored security frameworks to safeguard your assets.",
    challenges: [
      "Increasing ransomware and phishing attacks targeting employees",
      "Cloud misconfigurations leaving critical data exposed",
      "Insider threats leading to unauthorized access",
      "Regulatory compliance requirements (HIPAA, PCI-DSS, GDPR, ISO)",
      "Lack of visibility into security posture",
    ],
  };

  // Service Data for Cybersecurity
  const serviceData = {
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

  // Process Data for Cybersecurity
  const processData = [
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

  // Industry Data for Cybersecurity
  const industryData = [
    {
      title: "Banking & Finance",
      description: "PCI-DSS compliance, fraud prevention",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Healthcare",
      description: "HIPAA compliance, patient data protection",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Government",
      description: "Protecting critical infrastructure",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Retail & eCommerce",
      description: "Securing customer data and transactions",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  // Tools Data for Cybersecurity
  const toolsData = [
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

  // Text Slider Data for Cybersecurity
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Where Security Meets Innovation`,
        suffix: `Protecting Your Digital Future`,
      },
      {
        id: 2,
        text: `Advanced Cybersecurity Solutions`,
        suffix: `Defending Against Modern Threats`,
      },
      {
        id: 3,
        text: `Security. Protection. Peace of Mind.`,
        suffix: `We Shield Your Business`,
      },
      {
        id: 4,
        text: `Intelligent Threat Detection`,
        suffix: `Securing Your Digital Assets`,
      },
      {
        id: 5,
        text: `Compliance & Risk Management`,
        suffix: `Meeting Global Standards`,
      },
      {
        id: 6,
        text: `24/7 Security Operations`,
        suffix: `Always Watching, Always Protecting`,
      },
      {
        id: 7,
        text: `Zero Trust Architecture`,
        suffix: `Never Trust, Always Verify`,
      },
      {
        id: 8,
        text: `Incident Response Excellence`,
        suffix: `Rapid Recovery, Minimal Impact`,
      },
    ],
  };

  // FAQ Data for Cybersecurity
  const faqData = [
    {
      question: "How quickly can you respond to a breach?",
      answer: "Within minutes, our SOC operates 24/7 with incident response playbooks.",
    },
    {
      question: "Do you offer compliance audits?",
      answer: "Yes, we align with GDPR, HIPAA, PCI-DSS, and more.",
    },
    {
      question: "Can you secure hybrid environments?",
      answer: "Absolutely, we specialize in cloud + on-premise security models.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="CYBERSECURITY"
            subTitle="Secure Your Digital Future with Virtual Xcellence"
            pageName="CYBERSECURITY"
            subtext="In today's hyperconnected world, businesses face an ever-evolving threat landscape. Cyberattacks are no longer isolated incidents, they are a daily reality. The cost of a single breach can run into millions, not to mention the reputational damage. At Virtual Xcellence, we provide end-to-end cybersecurity solutions that help businesses protect, detect, respond, and recover with confidence."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceSection serviceData={serviceData} />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Cybersecurity Approach"
            sectionSubtitle="We follow a structured, proven framework"
          />
          <ServiceIndustrySection 
            industryData={industryData}
            sectionTitle="Industries We Serve"
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Security Tools & Technologies"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="Cybersecurity FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Let's secure your business today."
          buttonLabel="Book a free consultation"
          buttonLink="/contact"
        />
    </div>
  );
};
export default CybersecurityPage;