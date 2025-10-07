import { ReactElement } from "react";
import { Metadata } from "next";
import { createRuntimePageMetadata } from '@/lib/runtime-seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'
import ServiceChallengeSection, { ServiceSection, BusinessImpactSection, IndustryApplicationsSection, WhyWorkWithUsSection } from "@/components/Services/ServiceSection";
import ServiceProcessSection from "@/components/Services/ProcessSection";
import ServiceToolsSection from "@/components/Services/ToolsSection";
import ServiceTextSliderSection from "@/components/Services/TextSliderSection";
import ServiceFaqSection from "@/components/Services/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  return createRuntimePageMetadata('/services/cybersecurity', {
    title: "Cybersecurity Services || Virtual Xcellence - AI, Automation & Business Transformation",
    description: "Explore our comprehensive cybersecurity services with Virtual Xcellence. Professional security solutions, threat protection, and digital safety for your business with advanced security measures.",
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
    canonicalUrl: "https://virtualxcellence.com/services/cybersecurity"
  });
}

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
        image: "/assets/imgs/services/cybersecurity/mss.png"
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
        image: "/assets/imgs/services/cybersecurity/risk-assessment.png"
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
        image: "/assets/imgs/services/cybersecurity/cloud.png"
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
        image: "/assets/imgs/services/cybersecurity/indentity.png"
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
        image: "/assets/imgs/services/cybersecurity/incident.png"
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


  // Tools Data for Cybersecurity
  const toolsData = [
    {
      title: "SIEM & Monitoring",
      tools: [
        { name: "Splunk", icon: "/assets/imgs/tools/splunk.png" },
        { name: "QRadar", icon: "/assets/imgs/tools/qradar.png" },
        { name: "Elastic Security", icon: "/assets/imgs/tools/elasic-security.png" }
      ]
    },
    {
      title: "Cloud Security", 
      tools: [
        { name: "Prisma Cloud", icon: "/assets/imgs/tools/prisma-cloude.png" },
        { name: "Azure Security Center", icon: "/assets/imgs/tools/azure-security-center.png" },
        { name: "AWS GuardDuty", icon: "/assets/imgs/tools/aws-guard-duty.png" }
      ]
    },
    {
      title: "IAM",
      tools: [
        { name: "Okta", icon: "/assets/imgs/tools/okta.png" },
        { name: "Microsoft Entra", icon: "/assets/imgs/tools/microsoft-entra.png" },
        { name: "CyberArk", icon: "/assets/imgs/tools/cyberark.png" }
      ]
    },
    {
      title: "Endpoint Security",
      tools: [
        { name: "CrowdStrike", icon: "/assets/imgs/tools/crowd-strike.png" },
        { name: "SentinelOne", icon: "/assets/imgs/tools/sentinelone.png" }
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

  // Business Impact Data for Cybersecurity
  const businessImpactData = {
    title: "The Business Impact of Cybersecurity",
    description: "Our comprehensive cybersecurity solutions protect your digital assets while enabling business growth. Organizations with robust security frameworks experience fewer disruptions and maintain customer trust.",
    description2: "We help prevent costly data breaches, ensure regulatory compliance, and maintain business continuity. Our clients report 99.9% uptime, reduced security incidents, and improved customer confidence, leading to sustained business growth and competitive advantage."
  };

  // Industry Applications Data for Cybersecurity
  const industryApplicationsData = {
    title: "Industry Applications",
    description: "Our cybersecurity solutions are tailored to meet the unique security requirements and compliance standards across different industries.",
    description2: "From healthcare with HIPAA compliance and patient data protection, to finance with PCI-DSS standards and fraud prevention, government with critical infrastructure protection, and retail with secure customer data and transaction protection. Our industry expertise ensures compliance and optimal security posture."
  };

  // Why Work With Us Data for Cybersecurity
  const whyWorkWithUsData = {
    title: "Why Work With Us",
    description: "We combine deep cybersecurity expertise with business understanding to deliver security solutions that protect without hindering operations. With 24/7 SOC monitoring and rapid incident response capabilities.",
    description2: "Our certified security professionals, proven track record in threat prevention, and comprehensive compliance support ensure your business stays secure and compliant. We provide ongoing security awareness training and continuous monitoring for peace of mind."
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
            imageSrc="/assets/imgs/services/cybersecurity/challenges.png"
          />
          <ServiceSection serviceData={serviceData} />
          <BusinessImpactSection 
            impactData={businessImpactData} 
            imageSrc="/assets/imgs/services/cybersecurity/impact.png"
          />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Cybersecurity Approach"
            sectionSubtitle="We follow a structured, proven framework"
          />
          <IndustryApplicationsSection 
            applicationsData={industryApplicationsData} 
            imageSrc="/assets/imgs/services/cybersecurity/application.png"
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Security Tools & Technologies"
          />
          <WhyWorkWithUsSection 
            whyWorkWithUsData={whyWorkWithUsData} 
            imageSrc="/assets/imgs/services/cybersecurity/incident.png"
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