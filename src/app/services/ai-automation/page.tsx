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
    title: "AI & Automation Services || Virtual Xcellence - AI, Automation & Business Transformation",
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
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "AI & Automation Services Page",
    },
  };

  return generateSeoMetadata('/services/ai-automation', fallbackMetadata);
}

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
        image: "/assets/imgs/services/ai-automation/conversational-ai.png"
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
        image: "/assets/imgs/services/ai-automation/business-process-automation.png"
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
        image: "/assets/imgs/services/ai-automation/predictive-analytics.png"
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
        image: "/assets/imgs/services/ai-automation/genrative-ai.png"
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
        image: "/assets/imgs/services/ai-automation/ai-strategy.png"
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


  // Tools Data for AI & Automation
  const toolsData = [
    {
      title: "AI Frameworks",
      tools: [
        { name: "TensorFlow", icon: "/assets/imgs/tools/tensorflow.png" },
        { name: "PyTorch", icon: "/assets/imgs/tools/pytorch.png" },
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
        { name: "Azure AI", icon: "/assets/imgs/tools/azure.png" },
        { name: "AWS AI/ML", icon: "/assets/imgs/tools/aws.png" },
        { name: "Google Vertex AI", icon: "/assets/imgs/tools/google-cloude.png" }
      ]
    },
    {
      title: "Conversational AI",
      tools: [
        { name: "Dialogflow", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Rasa", icon: "/assets/imgs/client/client-1.webp" },
        { name: "OpenAI APIs", icon: "/assets/imgs/tools/openai.png" },
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

  // Business Impact Data for AI & Automation
  const businessImpactData = {
    title: "The Business Impact of AI & Automation",
    description: "Our AI and automation solutions deliver tangible business value through improved efficiency, reduced costs, and enhanced customer experiences. Organizations typically see measurable ROI within the first quarter of implementation.",
    description2: "We help achieve up to 40% reduction in operational costs, 60% faster process completion times, and 95% accuracy in automated decision-making. Teams can focus on strategic initiatives rather than repetitive tasks, leading to higher innovation rates and improved competitive positioning."
  };

  // Industry Applications Data for AI & Automation
  const industryApplicationsData = {
    title: "Industry Applications",
    description: "Our AI and automation solutions are tailored to meet the unique challenges and opportunities across different industries. Each sector presents distinct requirements and compliance standards that demand specialized approaches.",
    description2: "From healthcare with AI-powered diagnostics, to finance with fraud detection, retail with personalized shopping experiences, manufacturing with predictive maintenance, government with citizen service automation, and education with personalized learning. Our cross-industry experience enables us to identify best practices while respecting unique regulatory requirements."
  };

  // Why Work With Us Data for AI & Automation
  const whyWorkWithUsData = {
    title: "Why Work With Us",
    description: "We combine deep technical expertise with business acumen to deliver AI solutions that drive real business value. With 100+ successful AI implementations, our expert team provides end-to-end support from strategy to deployment and maintenance.",
    description2: "We offer industry-specific expertise, agile methodology for rapid time-to-value, and ongoing support for continuous improvement. Our 98% client satisfaction rate, comprehensive training programs, and 24/7 technical support ensure long-term partnerships and scalable solutions."
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
            imageSrc="/assets/imgs/services/ai-automation/why-ai.png"
          />
          <ServiceSection serviceData={serviceData} />
          <BusinessImpactSection 
            impactData={businessImpactData} 
            imageSrc="/assets/imgs/services/ai-automation/business-impact.png"
          />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our AI Implementation Approach"
            sectionSubtitle="We follow a structured methodology to ensure successful AI adoption and ROI"
          />
          <IndustryApplicationsSection 
            applicationsData={industryApplicationsData} 
            imageSrc="/assets/imgs/services/ai-automation/industry-application.png"
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Tools & Technologies We Use"
          />
          <WhyWorkWithUsSection 
            whyWorkWithUsData={whyWorkWithUsData} 
            imageSrc="/assets/imgs/services/ai-automation/why-us.png"
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
