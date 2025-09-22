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
  title: "AI & Automation Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Smarter, faster, future-ready businesses with AI & Automation. Virtual Xcellence helps organizations harness AI to reduce costs, improve efficiency, and create new business models through intelligent automation.",
  keywords: [
    "Virtual Xcellence AI automation",
    "AI services",
    "intelligent automation",
    "conversational AI",
    "business process automation",
    "predictive analytics",
    "machine learning services",
    "generative AI solutions",
    "RPA services",
    "AI strategy consulting",
    "voice automation",
    "document processing AI",
    "AI chatbots",
    "automation platforms",
    "AI transformation",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "AI & Automation Services Page",
  },
};

const AIAutomationPage = (): ReactElement => {
  // Challenge Data for AI & Automation
  const challengeData = {
    subtitle: "",
    title: "Why AI & Automation Matter",
    description: "Virtual Xcellence bridges the gap by combining AI innovation with business-first thinking.",
    challenges: [
      "Manual processes slow down growth",
      "Businesses struggle to leverage the data they already own",
      "Customers demand personalized, real-time experiences",
      "AI can predict, automate, and optimize ,  at scale",
    ],
  };

  // Service Data for AI & Automation
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our AI & Automation Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Conversational AI & Voice Automation",
        description: "Smart chatbots & virtual assistants.",
        items: [
          "AI-driven call center automation",
          "Multilingual support for global markets",
          "Outbound lead qualification through AI voice agents"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-1.webp"
      },
      {
        id: 2,
        number: "02",
        title: "Business Process Automation",
        description: "Robotic Process Automation (RPA).",
        items: [
          "AI-driven workflow optimization",
          "Intelligent document processing",
          "End-to-end operational automation"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-2.webp"
      },
      {
        id: 3,
        number: "03",
        title: "Predictive Analytics & Machine Learning",
        description: "Demand forecasting.",
        items: [
          "Risk and fraud detection",
          "AI-powered decision support",
          "Recommendation systems"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-3.webp"
      },
      {
        id: 4,
        number: "04",
        title: "Generative AI Solutions",
        description: "Knowledge management copilots.",
        items: [
          "Content & report automation",
          "AI-powered creative tools",
          "Code generation & developer productivity"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-4.webp"
      },
      {
        id: 5,
        number: "05",
        title: "AI Strategy & Consulting",
        description: "AI adoption roadmaps.",
        items: [
          "Responsible AI & governance frameworks",
          "Industry-specific AI accelerators",
          "Pilot-to-scale implementation guidance"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-5.webp"
      }
    ]
  };

  // Process Data for AI & Automation
  const processData = [
    {
      title: "Assess",
      text: "Analyze current processes and AI readiness",
      number: "01"
    },
    {
      title: "Design", 
      text: "Define AI strategy and solution architecture",
      number: "02"
    },
    {
      title: "Develop",
      text: "Build and train AI models and automation workflows",
      number: "03"
    },
    {
      title: "Deploy",
      text: "Implement solutions with monitoring and governance",
      number: "04"
    },
    {
      title: "Optimize",
      text: "Continuously improve performance and scale",
      number: "05"
    }
  ];

  // Industry Data for AI & Automation
  const industryData = [
    {
      title: "Healthcare",
      description: "AI diagnostic support, automated patient scheduling",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Retail",
      description: "Personalized shopping experiences, demand forecasting",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Finance",
      description: "Fraud detection, compliance automation",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Government",
      description: "AI-driven citizen engagement, automated e-services",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, AI-driven supply chain",
      number: "05",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  // Tools Data for AI & Automation
  const toolsData = [
    {
      title: "AI Frameworks",
      tools: [
        { name: "TensorFlow", icon: "/assets/imgs/client/client-1.webp" },
        { name: "PyTorch", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Keras", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Automation Platforms", 
      tools: [
        { name: "UiPath", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Automation Anywhere", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Power Automate", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Cloud AI Services",
      tools: [
        { name: "Azure AI", icon: "/assets/imgs/client/client-1.webp" },
        { name: "AWS AI/ML", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Google Vertex AI", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Conversational AI",
      tools: [
        { name: "Dialogflow", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Rasa", icon: "/assets/imgs/client/client-1.webp" },
        { name: "OpenAI APIs", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Twilio Voice AI", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

  // Text Slider Data for AI & Automation
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Smarter, Faster, Future-Ready Businesses`,
        suffix: `AI & Automation That Delivers Results`,
      },
      {
        id: 2,
        text: `Conversational AI & Voice Automation`,
        suffix: `Intelligent Customer Interactions`,
      },
      {
        id: 3,
        text: `Business Process Automation`,
        suffix: `Streamlining Operations with RPA`,
      },
      {
        id: 4,
        text: `Predictive Analytics & Machine Learning`,
        suffix: `Data-Driven Decision Making`,
      },
      {
        id: 5,
        text: `Generative AI Solutions`,
        suffix: `Unlocking Creative Potential`,
      },
      {
        id: 6,
        text: `AI Strategy & Consulting`,
        suffix: `From Vision to Implementation`,
      },
      {
        id: 7,
        text: `Industry-Specific AI Models`,
        suffix: `Tailored Solutions for Your Business`,
      },
      {
        id: 8,
        text: `Measurable ROI from AI`,
        suffix: `Proving Value Through Results`,
      },
    ],
  };

  // FAQ Data for AI & Automation
  const faqData = [
    {
      question: "Can AI replace my employees?",
      answer: "No ,  our solutions are designed to empower teams, reduce repetitive work, and free people to focus on high-value tasks.",
    },
    {
      question: "Do you offer custom AI solutions?",
      answer: "Yes ,  we design, train, and deploy industry-specific AI models tailored to your needs.",
    },
    {
      question: "How secure are AI-driven solutions?",
      answer: "All our deployments follow enterprise-grade cybersecurity and compliance frameworks.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="AI & AUTOMATION"
            subTitle="Smarter, Faster, Future-Ready Businesses"
            pageName="AI & AUTOMATION"
            subtext="Artificial Intelligence (AI) and Intelligent Automation are no longer 'emerging trends' ,  they're the driving force behind global business transformation. At VirtualXcellence, we help organizations harness AI to reduce costs, improve efficiency, and create entirely new business models."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceSection serviceData={serviceData} />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our AI Implementation Approach"
            sectionSubtitle="We follow a structured methodology to ensure successful AI adoption and ROI"
          />
          <ServiceIndustrySection 
            industryData={industryData}
            sectionTitle="Industry Applications"
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Tools & Technologies We Use"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="AI & Automation FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Ready to future-proof your business with AI?"
          buttonLabel="Talk to our AI experts"
          buttonLink="/contact"
        />
    </div>
  );
};

export default AIAutomationPage;
