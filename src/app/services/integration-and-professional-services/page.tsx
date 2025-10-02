import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ServiceChallengeSection, { ServiceSection, BusinessImpactSection, IndustryApplicationsSection, WhyWorkWithUsSection } from "@/components/Services/ServiceSection";
import ServiceProcessSection from "@/components/Services/ProcessSection";
import ServiceToolsSection from "@/components/Services/ToolsSection";
import ServiceTextSliderSection from "@/components/Services/TextSliderSection";
import ServiceFaqSection from "@/components/Services/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Integration and Professional Services || Virtual Xcellence - AI & Platform Integration Solutions",
    description:
      "Expert integration and professional services for Zoho, OpenAI, DataDog, Google Gemma 2, Meta AI, Command R+, and BLOOM platforms. Seamless AI integration, data analytics, and professional consulting services.",
    keywords: [
      "Virtual Xcellence integration services",
      "Zoho integration",
      "OpenAI integration",
      "DataDog monitoring",
      "Google Gemma 2 integration",
      "Meta AI services",
      "Command R+ integration",
      "BLOOM AI platform",
      "AI platform integration",
      "professional consulting services",
      "data analytics integration",
      "machine learning integration",
      "AI workflow automation",
      "enterprise AI solutions",
      "AI consulting services",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Integration and Professional Services Page",
    },
  };

  return generateSeoMetadata('/services/integration-and-professional-services', fallbackMetadata);
}

const IntegrationAndProfessionalServicesPage = (): ReactElement => {
  // Challenge Data for Integration and Professional Services
  const challengeData = {
    subtitle: "",
    title: "The Integration Challenges Businesses Face",
    description: "We help you overcome these by creating seamless, efficient, and cost-effective AI and platform integrations.",
    challenges: [
      "Disconnected AI platforms causing data silos and inefficiency",
      "Manual data processing leading to errors and time waste",
      "Incompatible AI tools and platforms hindering growth",
      "Complex AI integrations requiring specialized expertise",
      "Legacy systems that don't communicate with modern AI platforms",
    ],
  };

  // Service Data for Integration and Professional Services
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our Integration & Professional Services",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Zoho Platform Integration",
        description: "Comprehensive Zoho suite integration and professional services.",
        items: [
          "Zoho CRM integration and automation",
          "Zoho Books API integration",
          "Custom Zoho Creator applications",
          "Zoho Analytics dashboard development"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/integration-and-professional-services/zoho.png"
      },
      {
        id: 2,
        number: "02",
        title: "OpenAI Integration Services",
        description: "Seamless OpenAI integration with your business systems and workflows.",
        items: [
          "OpenAI API integration and customization",
          "GPT model fine-tuning and optimization",
          "Custom AI workflow development",
          "AI-powered automation solutions"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/integration-and-professional-services/open-ai.png"
      },
      {
        id: 3,
        number: "03",
        title: "DataDog Monitoring & Analytics",
        description: "Professional DataDog integration for comprehensive monitoring and analytics.",
        items: [
          "DataDog dashboard configuration",
          "Custom metrics and alerting setup",
          "Log aggregation and analysis",
          "Performance monitoring optimization"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/integration-and-professional-services/datadogs.png"
      },
      {
        id: 4,
        number: "04",
        title: "Google Gemma 2 Integration",
        description: "Advanced Google Gemma 2 model integration for enterprise AI solutions.",
        items: [
          "Gemma 2 model deployment and optimization",
          "Custom AI model fine-tuning",
          "Enterprise AI workflow integration",
          "Performance optimization and scaling"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/integration-and-professional-services/gemma.png"
      },
      {
        id: 5,
        number: "05",
        title: "Meta AI & Command R+ Integration",
        description: "Professional integration services for Meta AI and Command R+ platforms.",
        items: [
          "Meta AI platform integration",
          "Command R+ API development",
          "BLOOM AI model integration",
          "Multi-platform AI orchestration"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/integration-and-professional-services/meta-ai.png"
      }
    ]
  };

  // Process Data for Integration and Professional Services
  const processData = [
    {
      title: "AI Platform Analysis & Planning",
      text: "Understanding your current AI tools and integration requirements",
      number: "01"
    },
    {
      title: "Integration Architecture Design", 
      text: "Designing seamless AI platform connections and data flow",
      number: "02"
    },
    {
      title: "Development & Testing",
      text: "Building and testing AI integrations in controlled environments",
      number: "03"
    },
    {
      title: "Deployment & Migration",
      text: "Smooth deployment with minimal business disruption",
      number: "04"
    },
    {
      title: "Monitoring & Support",
      text: "Ongoing monitoring and maintenance of AI integrations",
      number: "05"
    }
  ];

  // Tools Data for Integration and Professional Services
  const toolsData = [
    {
      title: "AI Platforms",
      tools: [
        { name: "OpenAI", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Google Gemma 2", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Meta AI", icon: "/assets/imgs/client/client-1.webp" },
        { name: "BLOOM", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Business Platforms", 
      tools: [
        { name: "Zoho Suite", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Command R+", icon: "/assets/imgs/client/client-1.webp" },
        { name: "DataDog", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Custom APIs", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Integration Tools",
      tools: [
        { name: "Zapier", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Microsoft Power Automate", icon: "/assets/imgs/client/client-1.webp" },
        { name: "MuleSoft", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Custom Middleware", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Development Tools",
      tools: [
        { name: "Postman", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Insomnia", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Swagger", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Git", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Cloud Platforms",
      tools: [
        { name: "AWS", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Azure", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Google Cloud", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Zoho Cloud", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

  // Text Slider Data for Integration and Professional Services
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `AI Platform Integration`,
        suffix: `Connecting Your AI Tools`,
      },
      {
        id: 2,
        text: `Zoho Professional Services`,
        suffix: `Tailored Business Solutions`,
      },
      {
        id: 3,
        text: `OpenAI Integration Expert`,
        suffix: `Powerful AI Connections`,
      },
      {
        id: 4,
        text: `DataDog Monitoring`,
        suffix: `Comprehensive Analytics`,
      },
      {
        id: 5,
        text: `Google Gemma 2 Integration`,
        suffix: `Advanced AI Models`,
      },
      {
        id: 6,
        text: `Meta AI & Command R+`,
        suffix: `Cutting-Edge AI Platforms`,
      },
      {
        id: 7,
        text: `BLOOM AI Integration`,
        suffix: `Open Source AI Solutions`,
      },
      {
        id: 8,
        text: `Professional Consulting`,
        suffix: `Expert AI Guidance`,
      },
    ],
  };

  // Business Impact Data for Integration and Professional Services
  const businessImpactData = {
    title: "The Business Impact of AI Platform Integration",
    description: "Our AI integration solutions eliminate data silos and streamline operations. Organizations see immediate improvements in efficiency, AI model performance, and automated decision-making.",
    description2: "We help achieve 80% reduction in manual AI processing, 60% faster AI model deployment, and 95% improvement in AI accuracy. Our clients report significant cost savings, improved AI performance, and enhanced business intelligence through seamless AI platform integration."
  };

  // Industry Applications Data for Integration and Professional Services
  const industryApplicationsData = {
    title: "Industry Applications",
    description: "Our AI integration solutions are tailored to meet the unique requirements and challenges across different industries.",
    description2: "From healthcare with AI-powered patient data analysis and medical imaging integration, to finance with AI-driven fraud detection and risk assessment, retail with AI-powered customer analytics and recommendation engines, manufacturing with AI-driven predictive maintenance and quality control, and professional services with AI-powered document analysis and workflow automation. Our industry expertise ensures AI solutions that drive real business value."
  };

  // Why Work With Us Data for Integration and Professional Services
  const whyWorkWithUsData = {
    title: "Why Work With Us",
    description: "We combine deep AI expertise with business process understanding to deliver seamless AI platform integrations. Our experienced team specializes in complex AI integrations and professional consulting services.",
    description2: "Our proven track record includes 200+ successful AI integrations, expertise in 15+ AI platforms, and comprehensive support from planning to maintenance. We provide ongoing monitoring, troubleshooting, and optimization to ensure your AI integrations continue to deliver value as your business grows."
  };

  // FAQ Data for Integration and Professional Services
  const faqData = [
    {
      question: "Do you specialize in Zoho platform integration?",
      answer: "Yes, we are certified Zoho partners with extensive experience in CRM, Books, Creator, and Analytics integration and professional services.",
    },
    {
      question: "How long does a typical AI integration project take?",
      answer: "Most AI integrations are completed within 6-10 weeks, depending on complexity and AI model requirements.",
    },
    {
      question: "Can you integrate OpenAI with other AI platforms?",
      answer: "Absolutely, we specialize in connecting OpenAI with Zoho, DataDog, Google Gemma 2, Meta AI, and other platforms through custom APIs and middleware.",
    },
    {
      question: "Do you provide ongoing support for AI integrations?",
      answer: "Yes, we offer comprehensive monitoring, maintenance, and optimization services for all our AI platform integrations.",
    },
    {
      question: "What AI platforms do you work with?",
      answer: "We specialize in OpenAI, Google Gemma 2, Meta AI, Command R+, BLOOM, and custom AI model integrations.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="INTEGRATION & PROFESSIONAL SERVICES"
            subTitle="AI Platform Integration & Professional Consulting"
            pageName="INTEGRATION & PROFESSIONAL SERVICES"
            subtext="In today's AI-driven landscape, businesses rely on multiple AI platforms and professional services to manage different aspects of their operations. At VirtualXcellence, we specialize in connecting AI platforms like OpenAI, Zoho, DataDog, Google Gemma 2, Meta AI, Command R+, and BLOOM, creating seamless AI workflows that eliminate data silos and improve efficiency."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/services/integration-and-professional-services/integration-challenges.png"
          />
          <ServiceSection serviceData={serviceData} />
          <BusinessImpactSection 
            impactData={businessImpactData} 
            imageSrc="/assets/imgs/services/integration-and-professional-services/business-impact.png"
          />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our AI Integration Approach"
            sectionSubtitle="We follow a systematic methodology to ensure reliable, scalable, and maintainable AI platform integrations"
          />
          <IndustryApplicationsSection 
            applicationsData={industryApplicationsData} 
            imageSrc="/assets/imgs/services/integration-and-professional-services/industry-application.png"
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="AI Platforms & Tools We Work With"
          />
          <WhyWorkWithUsSection 
            whyWorkWithUsData={whyWorkWithUsData} 
            imageSrc="/assets/imgs/services/integration-and-professional-services/why-us.png"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="Integration & Professional Services FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Ready to integrate your AI platforms and streamline your operations?"
          buttonLabel="Get your AI integration consultation"
          buttonLink="/contact"
        />
    </div>
  );
};

export default IntegrationAndProfessionalServicesPage;
