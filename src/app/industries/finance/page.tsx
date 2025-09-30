import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import IndustriesFaqSection from "@/components/Industries/FaqSection";
import FooterSection from "@/components/Home/FooterSection";
import IndustryOverview from "@/components/Industries/IndustryOverview";
import KeyChallenges from "@/components/Industries/KeyChallenges";
import OurSolutions from "@/components/Industries/OurSolutions";
import TechnologiesWeUse from "@/components/Industries/TechnologiesWeUse";
import ImpactWeDeliver from "@/components/Industries/ImpactWeDeliver";
import ServiceTextSliderSection from "@/components/Services/TextSliderSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Financial Services Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Revolutionize financial services with Virtual Xcellence. Fintech solutions, digital banking platforms, payment systems, and financial technology consulting for modern financial institutions.",
    keywords: [
      "Virtual Xcellence financial services",
      "fintech solutions",
      "digital banking platforms",
      "payment processing systems",
      "financial technology consulting",
      "banking software development",
      "financial data analytics",
      "regulatory compliance solutions",
      "blockchain financial services",
      "mobile banking apps",
      "financial cybersecurity",
      "trading platform development",
      "wealth management software",
      "insurance technology",
      "financial AI solutions",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Financial Services Industry Page",
    },
  };

  return generateSeoMetadata('/industries/financial-services', fallbackMetadata);
}

const FinancialServicesPage = (): ReactElement => {
  // Financial Services Industry Data
  const industryData = {
    overview: {
      title: "Financial Services Industry",
      description: "Financial institutions face mounting pressure to deliver seamless digital experiences while maintaining strict regulatory compliance and security standards. From digital banking to AI-powered fraud detection, the sector demands innovative fintech solutions. At Virtual Xcellence, we empower banks, credit unions, and financial service providers to leverage cutting-edge technology for enhanced customer experiences, operational efficiency, and regulatory compliance.",
      imageSrc: "/assets/imgs/gallery/image-52.webp",
      imageAlt: "Financial Services Technology Solutions"
    },
    challenges: {
      title: "Key Challenges",
      challenges: [
        { text: "Meeting strict regulatory compliance requirements (SOX, PCI-DSS, GDPR)" },
        { text: "Ensuring robust cybersecurity and fraud prevention" },
        { text: "Modernizing legacy banking systems and infrastructure" },
        { text: "Delivering seamless digital customer experiences" },
        { text: "Managing complex risk assessment and reporting" }
      ]
    },
    solutions: {
      title: "Our Solutions",
      description: "Comprehensive financial services technology solutions that address modern banking challenges. Below are the detailed solutions we offer:",
      solutions: [
        {
          title: "Digital Banking & Mobile Platforms",
          items: [
            "Secure mobile banking applications",
            "Online banking portals with advanced features"
          ]
        },
        {
          title: "Payment Processing & Fintech Solutions",
          items: [
            "Payment gateway integration and processing",
            "Digital wallet and cryptocurrency solutions"
          ]
        },
        {
          title: "Risk Management & Compliance",
          items: [
            "Automated compliance monitoring and reporting",
            "AI-powered fraud detection and prevention"
          ]
        },
        {
          title: "Customer Analytics & Personalization",
          items: [
            "Customer behavior analytics and insights",
            "Personalized financial product recommendations"
          ]
        },
        {
          title: "Core Banking & Integration",
          items: [
            "Core banking system modernization",
            "Third-party API integration and management"
          ]
        }
      ]
    },
    technologies: {
      title: "Technologies We Use",
      technologies: [
        {
          title: "Banking Platforms",
          technologies: [
            { name: "Core Banking Systems", icon: "/assets/imgs/icons/core-banking.svg" },
            { name: "Payment Gateways", icon: "/assets/imgs/icons/payment-gateway.svg" },
            { name: "Blockchain", icon: "/assets/imgs/icons/blockchain.svg" }
          ]
        },
        {
          title: "AI/ML",
          technologies: [
            { name: "TensorFlow", icon: "/assets/imgs/icons/tensorflow.svg" },
            { name: "PyTorch", icon: "/assets/imgs/icons/pytorch.svg" },
            { name: "Fraud Detection APIs", icon: "/assets/imgs/icons/fraud-detection.svg" }
          ]
        },
        {
          title: "Cloud & Security",
          technologies: [
            { name: "AWS Financial Services", icon: "/assets/imgs/icons/aws.svg" },
            { name: "Azure Financial Services", icon: "/assets/imgs/icons/azure.svg" },
            { name: "End-to-End Encryption", icon: "/assets/imgs/icons/encryption.svg" }
          ]
        },
        {
          title: "Compliance & Security",
          technologies: [
            { name: "PCI-DSS Compliance", icon: "/assets/imgs/icons/pci.svg" },
            { name: "SOX Compliance", icon: "/assets/imgs/icons/sox.svg" },
            { name: "Multi-Factor Authentication", icon: "/assets/imgs/icons/mfa.svg" }
          ]
        },
        {
          title: "Mobile & Web",
          technologies: [
            { name: "React Native", icon: "/assets/imgs/icons/react-native.svg" },
            { name: "Progressive Web Apps", icon: "/assets/imgs/icons/pwa.svg" }
          ]
        }
      ]
    },
    impact: {
      title: "Impact We Deliver",
      impacts: [
        { text: "Enhanced customer satisfaction and digital engagement" },
        { text: "Reduced operational costs by up to 40%" },
        { text: "Improved fraud detection and risk management" },
        { text: "Streamlined compliance and regulatory reporting" }
      ]
    }
  };

  // Text Slider Data for Financial Services
  const textSliderData = {
    items: [
      { id: 1, text: "Digital Banking", suffix: "for Modern Finance" },
      { id: 2, text: "Payment Solutions", suffix: "for Secure Transactions" },
      { id: 3, text: "Fraud Detection", suffix: "for Risk Management" },
      { id: 4, text: "Mobile Banking", suffix: "for Anytime Access" },
      { id: 5, text: "Compliance Automation", suffix: "for Regulatory Excellence" },
      { id: 6, text: "Core Banking", suffix: "for System Modernization" },
      { id: 7, text: "Financial Analytics", suffix: "for Data-Driven Insights" },
      { id: 8, text: "Blockchain Solutions", suffix: "for Secure Transactions" }
    ]
  };

  // FAQ Data for Financial Services
  const faqData = [
    {
      question: "How do you ensure PCI-DSS compliance in financial solutions?",
      answer: "All our financial solutions are built with PCI-DSS compliance as a core requirement, including secure payment processing, data encryption, and regular security audits.",
    },
    {
      question: "Can you integrate with existing banking core systems?",
      answer: "Yes, we have extensive experience integrating with major banking core systems and can work with your existing infrastructure.",
    },
    {
      question: "Do you provide mobile banking app development?",
      answer: "Absolutely, we develop secure, user-friendly mobile banking applications with features like account management, payments, and financial planning tools.",
    },
    {
      question: "How do you handle financial data security and compliance?",
      answer: "We implement enterprise-grade security measures including encryption, multi-factor authentication, and compliance with financial regulations like SOX, GDPR, and PCI-DSS.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="FINANCIAL SERVICES"
          subTitle="Revolutionizing Finance Through Technology"
          pageName="FINANCIAL SERVICES"
          subtext="The financial services industry is at the forefront of digital transformation, with fintech innovations reshaping how people and businesses manage money. At Virtual Xcellence, we help financial institutions leverage cutting-edge technology to enhance customer experiences, improve operational efficiency, and ensure regulatory compliance."
        />
        
        {/* Industry Overview */}
        <IndustryOverview 
          title={industryData.overview.title}
          description={industryData.overview.description}
          imageSrc={industryData.overview.imageSrc}
          imageAlt={industryData.overview.imageAlt}
        />

        {/* Key Challenges */}
        <KeyChallenges 
          title={industryData.challenges.title}
          challenges={industryData.challenges.challenges}
          imageSrc={industryData.overview.imageSrc}
          imageAlt={industryData.overview.imageAlt}
        />

        {/* Our Solutions */}
        <OurSolutions 
          title={industryData.solutions.title}
          description={industryData.solutions.description}
          solutions={industryData.solutions.solutions}
        />

        {/* Technologies We Use */}
        <TechnologiesWeUse 
          title={industryData.technologies.title}
          technologies={industryData.technologies.technologies}
        />

        {/* Impact We Deliver */}
        <ImpactWeDeliver 
          title={industryData.impact.title}
          impacts={industryData.impact.impacts}
          imageSrc={industryData.overview.imageSrc}
          imageAlt={industryData.overview.imageAlt}
        />

        <ServiceTextSliderSection 
          textSliderData={textSliderData}
        />

        <IndustriesFaqSection 
          faqData={faqData}
          type={2}
          sectionTitle="Financial Services Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your financial services with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default FinancialServicesPage;
