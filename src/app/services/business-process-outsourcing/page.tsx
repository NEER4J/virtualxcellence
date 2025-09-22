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
  title: "Business Process Outsourcing (BPO) & Support Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Transform your operations with scalable, cost-effective outsourcing. Virtual Xcellence BPO services include customer support, back-office operations, sales & lead generation, technical support, and AI-powered solutions.",
  keywords: [
    "Virtual Xcellence BPO services",
    "business process outsourcing",
    "customer support outsourcing",
    "back-office operations",
    "sales lead generation",
    "technical support outsourcing",
    "AI-powered outsourcing",
    "conversational AI agents",
    "call center solutions",
    "data entry processing",
    "document management",
    "HR recruitment outsourcing",
    "telemarketing services",
    "helpdesk services",
    "cost-effective outsourcing",
    "scalable business operations",
    "24/7 customer support",
    "multichannel support",
    "intelligent ticket routing",
    "customer behavior analytics",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Business Process Outsourcing Services Page",
  },
};

const BusinessProcessOutsourcingPage = (): ReactElement => {
  // Challenge Data for BPO
  const challengeData = {
    subtitle: "",
    title: "Why Choose VirtualXcellence for BPO?",
    description: "Focus on what matters most — growing your business. Leave the rest to us.",
    challenges: [
      "Proven Expertise → Over a decade of managing critical business functions",
      "Scalable Teams → On-demand workforce to match your business cycles",
      "Cost Savings → Reduce operational overhead while improving service quality",
      "Technology-Driven → AI, automation, and analytics integrated into every process",
      "Global Standards → Best practices in compliance, security, and data privacy",
    ],
  };

  // Service Data for BPO
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our BPO Service Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Customer Support Services",
        description: "24/7 Multichannel Support (Voice, Email, Chat, Social)",
        items: [
          "Inbound & Outbound Call Center Solutions",
          "Complaint Management & Resolution",
          "Customer Retention Programs"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-1.webp"
      },
      {
        id: 2,
        number: "02",
        title: "Back-Office Operations",
        description: "Comprehensive data and document management solutions.",
        items: [
          "Data Entry & Processing",
          "Document Management",
          "Billing, Accounting & Payroll Support",
          "HR & Recruitment Process Outsourcing"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-2.webp"
      },
      {
        id: 3,
        number: "03",
        title: "Sales & Lead Generation",
        description: "Outbound Telemarketing & Cold Calling",
        items: [
          "Appointment Scheduling",
          "Lead Qualification & Nurturing",
          "Upselling & Cross-Selling Campaigns"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-3.webp"
      },
      {
        id: 4,
        number: "04",
        title: "Technical Support",
        description: "Tier 1 & Tier 2 Helpdesk Services",
        items: [
          "Remote IT Support",
          "Product Setup & Troubleshooting",
          "Knowledge Base & FAQ Development"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-4.webp"
      },
      {
        id: 5,
        number: "05",
        title: "AI-Powered Outsourcing Solutions",
        description: "Conversational AI Agents for First-Level Support",
        items: [
          "Intelligent Ticket Routing & Automation",
          "Customer Behavior Insights & Predictive Analytics"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-5.webp"
      }
    ]
  };

  // Process Data for BPO
  const processData = [
    {
      title: "Assess",
      text: "Analyze your current operations and identify outsourcing opportunities",
      number: "01"
    },
    {
      title: "Design", 
      text: "Create tailored BPO solutions aligned with your business needs",
      number: "02"
    },
    {
      title: "Implement",
      text: "Deploy scalable teams and technology-driven processes",
      number: "03"
    },
    {
      title: "Optimize",
      text: "Continuously improve efficiency and service quality",
      number: "04"
    },
    {
      title: "Scale",
      text: "Grow your operations with flexible, on-demand support",
      number: "05"
    }
  ];

  // Industry Data for BPO
  const industryData = [
    {
      title: "Healthcare",
      description: "Patient support, medical billing, and administrative services",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Finance & Banking",
      description: "Customer service, compliance support, and back-office operations",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Retail & eCommerce",
      description: "Customer support, order processing, and sales operations",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Technology & SaaS",
      description: "Technical support, customer success, and lead generation",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Government & Public Sector",
      description: "Citizen services, administrative support, and compliance",
      number: "05",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  // Tools Data for BPO
  const toolsData = [
    {
      title: "Customer Support",
      tools: [
        { name: "Zendesk", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Freshdesk", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Intercom", icon: "/assets/imgs/client/client-1.webp" },
        { name: "LiveChat", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Communication", 
      tools: [
        { name: "Twilio", icon: "/assets/imgs/client/client-1.webp" },
        { name: "RingCentral", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Slack", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Microsoft Teams", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "CRM & Sales",
      tools: [
        { name: "Salesforce", icon: "/assets/imgs/client/client-1.webp" },
        { name: "HubSpot", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Pipedrive", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Zoho CRM", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "AI & Automation",
      tools: [
        { name: "Dialogflow", icon: "/assets/imgs/client/client-1.webp" },
        { name: "IBM Watson", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Microsoft Bot Framework", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Rasa", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Analytics & Reporting",
      tools: [
        { name: "Google Analytics", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Tableau", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Power BI", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

  // Text Slider Data for BPO
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Transform Your Operations with Scalable, Cost-Effective Outsourcing`,
        suffix: `BPO Services That Drive Growth`,
      },
      {
        id: 2,
        text: `Customer Support Services`,
        suffix: `24/7 Multichannel Support Excellence`,
      },
      {
        id: 3,
        text: `Back-Office Operations`,
        suffix: `Comprehensive Data & Document Management`,
      },
      {
        id: 4,
        text: `Sales & Lead Generation`,
        suffix: `Outbound Telemarketing & Cold Calling`,
      },
      {
        id: 5,
        text: `Technical Support`,
        suffix: `Tier 1 & Tier 2 Helpdesk Services`,
      },
      {
        id: 6,
        text: `AI-Powered Solutions`,
        suffix: `Conversational AI & Intelligent Automation`,
      },
      {
        id: 7,
        text: `Scalable Teams`,
        suffix: `On-Demand Workforce Solutions`,
      },
      {
        id: 8,
        text: `Cost-Effective Operations`,
        suffix: `Reduce Overhead While Improving Quality`,
      },
    ],
  };

  // FAQ Data for BPO
  const faqData = [
    {
      question: "What types of business processes can you outsource?",
      answer: "We handle customer support, back-office operations, sales & lead generation, technical support, and AI-powered solutions across multiple industries.",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We follow global standards with enterprise-grade security, compliance frameworks, and data privacy best practices across all our BPO services.",
    },
    {
      question: "Can you scale your services based on our business needs?",
      answer: "Yes, we provide flexible, on-demand workforce solutions that can scale up or down based on your business cycles and requirements.",
    },
    {
      question: "What makes your BPO services technology-driven?",
      answer: "We integrate AI, automation, and analytics into every process to improve efficiency, reduce costs, and deliver superior service quality.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="BUSINESS PROCESS OUTSOURCING"
            subTitle="Transform Your Operations with Scalable, Cost-Effective Outsourcing"
            pageName="BPO & SUPPORT SERVICES"
            subtext="At VirtualXcellence, we help businesses focus on growth while we manage their operational backbone. Our Business Process Outsourcing (BPO) & Support Services ensure efficiency, cost savings, and round-the-clock support for your customers and internal teams."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceSection serviceData={serviceData} />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our BPO Approach"
            sectionSubtitle="We follow a structured methodology to deliver exceptional outsourcing results"
          />
          <ServiceIndustrySection 
            industryData={industryData}
            sectionTitle="Industries We Support"
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Tools & Technologies We Use"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="BPO & Support Services FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Let's Build Your Outsourcing Advantage"
          buttonLabel="Contact Us Today"
          buttonLink="/contact"
        />
    </div>
  );
};

export default BusinessProcessOutsourcingPage;
