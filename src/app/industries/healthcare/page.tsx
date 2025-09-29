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

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Healthcare Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Transform healthcare delivery with Virtual Xcellence. Digital health solutions, AI-powered diagnostics, patient management systems, and healthcare technology consulting for modern medical practices.",
    keywords: [
      "Virtual Xcellence healthcare",
      "healthcare technology solutions",
      "digital health transformation",
      "AI healthcare applications",
      "patient management systems",
      "healthcare automation",
      "medical software development",
      "healthcare data analytics",
      "telemedicine solutions",
      "HIPAA compliant healthcare tech",
      "healthcare cloud solutions",
      "medical device integration",
      "healthcare cybersecurity",
      "electronic health records",
      "healthcare AI consulting",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Healthcare Industry Page",
    },
  };

  return generateSeoMetadata('/industries/healthcare', fallbackMetadata);
}

const HealthcarePage = (): ReactElement => {
  // Healthcare Industry Data
  const industryData = {
    overview: {
      title: "Healthcare Industry",
      description: "Healthcare organizations face mounting pressure to improve patient outcomes, meet regulatory requirements, and embrace digital-first care delivery. From telemedicine to AI-powered diagnostics, the sector demands innovation without compromising compliance and security. At Virtual Xcellence, we empower healthcare providers, insurers, and life sciences organizations to leverage AI, automation, and cloud solutions for smarter, patient-centered care.",
      imageSrc: "/assets/imgs/gallery/image-52.webp",
      imageAlt: "Healthcare Technology Solutions"
    },
    challenges: {
      title: "Key Challenges",
      challenges: [
        { text: "Rising patient expectations for digital-first engagement" },
        { text: "Strict compliance requirements (HIPAA, PHIPA, GDPR)" },
        { text: "Inefficient manual processes & paper-based workflows" },
        { text: "Data silos limiting care coordination" },
        { text: "Cybersecurity risks targeting sensitive health data" }
      ]
    },
    solutions: {
      title: "Our Solutions",
      solutions: [
        {
          title: "AI-Powered Diagnostics & Clinical Decision Support",
          items: [
            "ML models for early disease detection & risk stratification",
            "AI-assisted imaging & lab analysis"
          ]
        },
        {
          title: "Patient Engagement & Experience Platforms",
          items: [
            "Mobile patient portals for appointments, prescriptions, billing",
            "24/7 conversational AI agents for queries & triage"
          ]
        },
        {
          title: "Data Analytics & Population Health Management",
          items: [
            "Predictive analytics for disease outbreaks & resource allocation",
            "Real-time dashboards for clinical & operational insights"
          ]
        },
        {
          title: "Telemedicine & Remote Monitoring",
          items: [
            "Secure video consultation platforms",
            "IoT-enabled wearable integration for chronic disease management"
          ]
        },
        {
          title: "Cybersecurity & Compliance",
          items: [
            "Data encryption, access control, and audit trails",
            "Compliance-ready cloud hosting (HIPAA/PHIPA compliant)"
          ]
        }
      ]
    },
    technologies: {
      title: "Technologies We Use",
      technologies: [
        {
          category: "AI/ML",
          technologies: ["TensorFlow", "PyTorch", "OpenAI APIs"]
        },
        {
          category: "Cloud",
          technologies: ["Microsoft Azure Health Cloud", "Google Cloud Healthcare API"]
        },
        {
          category: "EHR/EMR Integration",
          technologies: ["HL7", "FHIR standards"]
        },
        {
          category: "Cybersecurity",
          technologies: ["SOC2 frameworks", "Zero-Trust architecture"]
        },
        {
          category: "Automation",
          technologies: ["RPA for claims & billing processes"]
        }
      ]
    },
    impact: {
      title: "Impact We Deliver",
      impacts: [
        { text: "Improved patient care delivery & satisfaction" },
        { text: "Reduced operational costs by up to 30% through automation" },
        { text: "Stronger compliance posture & reduced data breach risks" },
        { text: "Better decision-making with real-time insights" }
      ]
    }
  };

  // FAQ Data for Healthcare
  const faqData = [
    {
      question: "How do you ensure HIPAA compliance in healthcare solutions?",
      answer: "All our healthcare solutions are built with HIPAA compliance as a core requirement, including data encryption, access controls, and audit trails.",
    },
    {
      question: "Can you integrate with existing EHR systems?",
      answer: "Yes, we have extensive experience integrating with major EHR systems like Epic, Cerner, and Allscripts.",
    },
    {
      question: "Do you provide telemedicine platform development?",
      answer: "Absolutely, we develop secure, scalable telemedicine platforms with video conferencing, appointment scheduling, and patient management features.",
    },
    {
      question: "How do you handle healthcare data security?",
      answer: "We implement multi-layered security including encryption, secure APIs, regular security audits, and compliance with healthcare data protection standards.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="HEALTHCARE"
          subTitle="Transforming Healthcare Through Technology"
          pageName="HEALTHCARE"
          subtext="The healthcare industry is undergoing a digital transformation that's improving patient outcomes, streamlining operations, and reducing costs. At Virtual Xcellence, we help healthcare organizations leverage cutting-edge technology to deliver better care and enhance operational efficiency."
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
        />

        {/* Our Solutions */}
        <OurSolutions 
          title={industryData.solutions.title}
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
        />

        <IndustriesFaqSection 
          faqData={faqData}
          type={2}
          sectionTitle="Healthcare Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your healthcare organization with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default HealthcarePage;
