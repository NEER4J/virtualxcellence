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
    title: "Manufacturing Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Transform manufacturing with Virtual Xcellence. Industry 4.0 solutions, IoT integration, smart factory automation, and manufacturing technology consulting for modern production facilities.",
    keywords: [
      "Virtual Xcellence manufacturing",
      "Industry 4.0 solutions",
      "smart factory automation",
      "IoT manufacturing",
      "manufacturing technology consulting",
      "production optimization",
      "predictive maintenance",
      "manufacturing software development",
      "supply chain automation",
      "quality control systems",
      "manufacturing data analytics",
      "robotic process automation",
      "manufacturing cybersecurity",
      "digital twin solutions",
      "manufacturing AI",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Manufacturing Industry Page",
    },
  };

  return generateSeoMetadata('/industries/manufacturing', fallbackMetadata);
}

const ManufacturingPage = (): ReactElement => {
  // Manufacturing Industry Data
  const industryData = {
    overview: {
      title: "Manufacturing Industry",
      description: "Manufacturing companies face increasing pressure to optimize production, reduce costs, and improve quality while adapting to Industry 4.0 technologies. From IoT integration to predictive analytics, the sector demands innovative automation solutions. At Virtual Xcellence, we empower manufacturers to leverage smart technologies for enhanced operational efficiency, quality control, and sustainable production processes.",
      imageSrc: "/assets/imgs/gallery/image-52.webp",
      imageAlt: "Manufacturing Technology Solutions"
    },
    challenges: {
      title: "Key Challenges",
      challenges: [
        { text: "Implementing Industry 4.0 and smart factory technologies" },
        { text: "Optimizing production efficiency and reducing downtime" },
        { text: "Ensuring quality control and compliance standards" },
        { text: "Managing complex supply chain operations" },
        { text: "Integrating legacy systems with modern technology" }
      ]
    },
    solutions: {
      title: "Our Solutions",
      description: "Comprehensive manufacturing technology solutions that address modern production challenges. Below are the detailed solutions we offer:",
      solutions: [
        {
          title: "Smart Factory & IoT Integration",
          items: [
            "IoT sensor networks for real-time monitoring",
            "Connected equipment and production line automation"
          ]
        },
        {
          title: "Predictive Maintenance & Analytics",
          items: [
            "AI-powered equipment failure prediction",
            "Maintenance scheduling optimization"
          ]
        },
        {
          title: "Quality Control & Inspection Systems",
          items: [
            "Automated quality inspection using computer vision",
            "Real-time quality monitoring and reporting"
          ]
        },
        {
          title: "Supply Chain & Inventory Management",
          items: [
            "End-to-end supply chain visibility",
            "Automated inventory optimization"
          ]
        },
        {
          title: "Production Planning & Optimization",
          items: [
            "AI-driven production scheduling",
            "Resource allocation and capacity planning"
          ]
        }
      ]
    },
    technologies: {
      title: "Technologies We Use",
      technologies: [
        {
          title: "IoT & Sensors",
          technologies: [
            { name: "Industrial IoT", icon: "/assets/imgs/icons/iot.svg" },
            { name: "Edge Computing", icon: "/assets/imgs/icons/edge.svg" },
            { name: "Sensor Networks", icon: "/assets/imgs/icons/sensors.svg" }
          ]
        },
        {
          title: "AI/ML",
          technologies: [
            { name: "TensorFlow", icon: "/assets/imgs/icons/tensorflow.svg" },
            { name: "PyTorch", icon: "/assets/imgs/icons/pytorch.svg" },
            { name: "Computer Vision", icon: "/assets/imgs/icons/computer-vision.svg" }
          ]
        },
        {
          title: "Cloud & Analytics",
          technologies: [
            { name: "AWS IoT", icon: "/assets/imgs/icons/aws.svg" },
            { name: "Azure IoT", icon: "/assets/imgs/icons/azure.svg" },
            { name: "Time Series Analytics", icon: "/assets/imgs/icons/analytics.svg" }
          ]
        },
        {
          title: "Automation",
          technologies: [
            { name: "PLC Integration", icon: "/assets/imgs/icons/plc.svg" },
            { name: "SCADA Systems", icon: "/assets/imgs/icons/scada.svg" },
            { name: "RPA for Manufacturing", icon: "/assets/imgs/icons/rpa.svg" }
          ]
        },
        {
          title: "Security",
          technologies: [
            { name: "Industrial Cybersecurity", icon: "/assets/imgs/icons/cybersecurity.svg" },
            { name: "Network Segmentation", icon: "/assets/imgs/icons/network.svg" }
          ]
        }
      ]
    },
    impact: {
      title: "Impact We Deliver",
      impacts: [
        { text: "Reduced equipment downtime by up to 50%" },
        { text: "Improved production efficiency and throughput" },
        { text: "Enhanced quality control and defect reduction" },
        { text: "Optimized supply chain and inventory management" }
      ]
    }
  };

  // Text Slider Data for Manufacturing
  const textSliderData = {
    items: [
      { id: 1, text: "Smart Factories", suffix: "for Industry 4.0" },
      { id: 2, text: "IoT Integration", suffix: "for Connected Manufacturing" },
      { id: 3, text: "Predictive Maintenance", suffix: "for Equipment Optimization" },
      { id: 4, text: "Quality Control", suffix: "for Enhanced Standards" },
      { id: 5, text: "Supply Chain Automation", suffix: "for Operational Efficiency" },
      { id: 6, text: "Production Analytics", suffix: "for Data-Driven Insights" },
      { id: 7, text: "Digital Twins", suffix: "for Virtual Modeling" },
      { id: 8, text: "Robotic Automation", suffix: "for Process Optimization" }
    ]
  };

  // FAQ Data for Manufacturing
  const faqData = [
    {
      question: "How do you implement Industry 4.0 solutions in manufacturing?",
      answer: "We help manufacturers implement Industry 4.0 by integrating IoT sensors, AI-powered analytics, and automation systems to create smart, connected production facilities.",
    },
    {
      question: "Can you integrate with existing manufacturing equipment?",
      answer: "Yes, we specialize in integrating new technology solutions with legacy manufacturing equipment and systems to maximize your existing investments.",
    },
    {
      question: "Do you provide predictive maintenance solutions?",
      answer: "Absolutely, we develop AI-powered predictive maintenance systems that help prevent equipment failures and optimize maintenance schedules.",
    },
    {
      question: "How do you ensure manufacturing data security?",
      answer: "We implement comprehensive security measures including network segmentation, data encryption, and access controls to protect your manufacturing data and intellectual property.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="MANUFACTURING"
          subTitle="Revolutionizing Production Through Technology"
          pageName="MANUFACTURING"
          subtext="The manufacturing industry is experiencing a digital revolution with Industry 4.0 technologies transforming how products are designed, produced, and delivered. At Virtual Xcellence, we help manufacturers leverage smart technologies to improve efficiency, reduce costs, and enhance product quality."
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
          sectionTitle="Manufacturing Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your manufacturing operations with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ManufacturingPage;
