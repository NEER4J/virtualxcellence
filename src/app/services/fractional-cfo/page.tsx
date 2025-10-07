import { ReactElement } from "react";
import { Metadata } from "next";
import { createRuntimePageMetadata } from '@/lib/runtime-seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'
import ServiceChallengeSection, { ServiceSection, BusinessImpactSection, IndustryApplicationsSection, WhyWorkWithUsSection } from "@/components/Services/ServiceSection";
import ServiceProcessSection from "@/components/Services/ProcessSection";
import ServiceIndustrySection from "@/components/Services/IndustrySection";
import ServiceToolsSection from "@/components/Services/ToolsSection";
import ServiceTextSliderSection from "@/components/Services/TextSliderSection";
import ServiceFaqSection from "@/components/Services/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  return createRuntimePageMetadata('/services/fractional-cfo', {
    title: "Fractional CFO Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
    description: "Strategic financial leadership on-demand. Virtual Xcellence offers Fractional CFO services providing experienced finance leaders for cash flow optimization, fundraising support, and financial planning.",
    keywords: [
      "Virtual Xcellence Fractional CFO",
      "fractional CFO services",
      "financial leadership consulting",
      "interim CFO services",
      "startup financial advisor",
      "CFO as a service",
      "financial planning consulting",
      "cash flow management",
      "fundraising support",
      "financial modeling",
      "compliance consulting",
      "M&A advisory",
      "investor relations",
      "financial forecasting",
      "working capital management",
    ],
    canonicalUrl: "https://virtualxcellence.com/services/fractional-cfo"
  });
}

const FractionalCFOPage = (): ReactElement => {
  // Challenge Data for Fractional CFO
  const challengeData = {
    subtitle: "",
    title: "The Challenges Businesses Face",
    description: "Our Fractional CFO model bridges this gap by providing executive-level financial expertise at a fraction of the cost.",
    challenges: [
      "Lack of financial visibility and forecasting",
      "Poor cash flow management leading to operational risks",
      "Difficulty preparing for investment rounds or M&A",
      "Complex compliance and taxation requirements across regions",
      "Absence of strategic financial planning aligned to growth",
    ],
  };

  // Service Data for Fractional CFO
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our Fractional CFO Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Financial Planning & Analysis (FP&A)",
        description: "Building accurate forecasts and budgets.",
        items: [
          "Defining KPIs and financial dashboards",
          "Scenario modeling for growth decisions",
          "Budget planning and variance analysis"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/fractional-cfo/financial.png"
      },
      {
        id: 2,
        number: "02",
        title: "Cash Flow & Working Capital Management",
        description: "Cash flow monitoring and optimization.",
        items: [
          "Debt and credit management strategies",
          "Vendor payment and collection strategies",
          "Working capital optimization"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/fractional-cfo/cash-flow.png"
      },
      {
        id: 3,
        number: "03",
        title: "Fundraising & Investor Relations",
        description: "Preparing for seed, Series A/B, and further funding rounds.",
        items: [
          "Financial due diligence readiness",
          "Investor pitch and financial modeling support",
          "Valuation and term sheet analysis"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/fractional-cfo/fundraising.png"
      },
      {
        id: 4,
        number: "04",
        title: "Compliance, Audit & Risk Management",
        description: "Ensuring compliance with tax regulations across jurisdictions.",
        items: [
          "Audit preparation and governance policies",
          "Risk assessment and mitigation frameworks",
          "Cross-border compliance support"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/fractional-cfo/compliance.png"
      },
      {
        id: 5,
        number: "05",
        title: "M&A & Expansion Strategy",
        description: "Financial modeling for mergers and acquisitions.",
        items: [
          "Valuation support and transaction advisory",
          "Market entry feasibility studies (esp. Middle East)",
          "Due diligence and integration planning"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/fractional-cfo/expansion.png"
      }
    ]
  };

  // Process Data for Fractional CFO
  const processData = [
    {
      title: "Assess",
      text: "Review financial health and key pain points",
      number: "01"
    },
    {
      title: "Plan", 
      text: "Define short-term goals and long-term financial roadmap",
      number: "02"
    },
    {
      title: "Execute",
      text: "Oversee accounting, reporting, and cash flow",
      number: "03"
    },
    {
      title: "Scale",
      text: "Support fundraising, expansion, and strategic decisions",
      number: "04"
    },
    {
      title: "Monitor",
      text: "Provide ongoing reporting and risk management",
      number: "05"
    }
  ];

  // Industry Data for Fractional CFO
  const industryData = [
    {
      title: "Startups",
      description: "Needing fundraising, investor-ready models",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "SMEs",
      description: "Wanting to scale profitably with financial discipline",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Enterprises",
      description: "Requiring interim CFO during leadership transitions",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Global Expansions",
      description: "Companies entering the Middle East & North America",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  // Tools Data for Fractional CFO
  const toolsData = [
    {
      title: "Accounting & Finance Tools",
      tools: [
        { name: "QuickBooks", icon: "/assets/imgs/tools/quickbooks.png" },
        { name: "Xero", icon: "/assets/imgs/tools/xero.png" },
        { name: "SAP", icon: "/assets/imgs/tools/sap.png" },
        { name: "Oracle NetSuite", icon: "/assets/imgs/tools/oracle-netsuite.png" }
      ]
    },
    {
      title: "Forecasting & Modeling", 
      tools: [
        { name: "Excel Advanced Models", icon: "/assets/imgs/tools/excel.png" },
        { name: "Adaptive Insights", icon: "/assets/imgs/tools/adaptive-insight.png" }
      ]
    },
    {
      title: "BI & Dashboards",
      tools: [
        { name: "Power BI", icon: "/assets/imgs/tools/power=bi.png" },
        { name: "Tableau", icon: "/assets/imgs/tools/tableau.png" },
        { name: "Google Data Studio", icon: "/assets/imgs/tools/google-data-studio.png" }
      ]
    },
    {
      title: "Compliance & Audit",
      tools: [
        { name: "IFRS", icon: "/assets/imgs/tools/IFRS.png" },
        { name: "GAAP", icon: "/assets/imgs/tools/gaap.png" },
        { name: "SOX Frameworks", icon: "/assets/imgs/tools/sox.png" }
      ]
    }
  ];

  // Business Impact Data for Fractional CFO
  const businessImpactData = {
    title: "The Business Impact of Fractional CFO Services",
    description: "Our Fractional CFO services drive financial clarity and strategic growth. Organizations see immediate improvements in cash flow management, financial planning, and investor readiness.",
    description2: "We help achieve 30% improvement in cash flow, 50% reduction in financial reporting time, and 90% success rate in fundraising. Our clients report better financial visibility, improved decision-making, and enhanced investor confidence through our strategic financial leadership."
  };

  // Industry Applications Data for Fractional CFO
  const industryApplicationsData = {
    title: "Industry Applications",
    description: "Our Fractional CFO services are tailored to meet the unique requirements and challenges across different business types and growth stages.",
    description2: "From startups needing fundraising and investor-ready models, to SMEs wanting to scale profitably with financial discipline, enterprises requiring interim CFO during leadership transitions, and global expansions entering the Middle East & North America. Our financial expertise ensures solutions that drive real business value."
  };

  // Why Work With Us Data for Fractional CFO
  const whyWorkWithUsData = {
    title: "Why Work With Us",
    description: "We combine strategic financial vision with hands-on execution to deliver exceptional CFO services. Our experienced team ensures financial clarity and strategic growth.",
    description2: "Our proven track record includes 100+ successful financial transformations, cross-border expertise, and comprehensive support from planning to execution. We provide flexible engagement models, ongoing financial guidance, and strategic support to ensure your business grows with sound financial foundations."
  };

  // Text Slider Data for Fractional CFO
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Strategic Financial Leadership On-Demand`,
        suffix: `Executive Finance Expertise When You Need It`,
      },
      {
        id: 2,
        text: `Fractional CFO Services`,
        suffix: `Optimizing Cash Flow & Driving Profitability`,
      },
      {
        id: 3,
        text: `Financial Planning & Analysis`,
        suffix: `Building Accurate Forecasts & Budgets`,
      },
      {
        id: 4,
        text: `Cash Flow Management`,
        suffix: `Optimizing Working Capital & Operations`,
      },
      {
        id: 5,
        text: `Fundraising & Investor Relations`,
        suffix: `Preparing for Investment Rounds`,
      },
      {
        id: 6,
        text: `Compliance & Risk Management`,
        suffix: `Ensuring Regulatory Compliance`,
      },
      {
        id: 7,
        text: `M&A & Expansion Strategy`,
        suffix: `Supporting Growth & Acquisitions`,
      },
      {
        id: 8,
        text: `Flexible Engagement Models`,
        suffix: `Part-Time, Project-Based, or Interim`,
      },
    ],
  };

  // FAQ Data for Fractional CFO
  const faqData = [
    {
      question: "How flexible is your engagement model?",
      answer: "We offer part-time, project-based, or interim CFO roles.",
    },
    {
      question: "Do you work with investor-backed startups?",
      answer: "Yes, many of our clients are venture-funded startups preparing for growth.",
    },
    {
      question: "Can you support cross-border compliance?",
      answer: "Absolutely, we specialize in Middle East & North American financial regulations.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="FRACTIONAL CFO"
            subTitle="Strategic Financial Leadership On-Demand"
            pageName="FRACTIONAL CFO"
            subtext="Sound financial management is the backbone of any successful organization. However, many startups and growing businesses face the challenge of accessing senior financial leadership without incurring the high costs of a full-time Chief Financial Officer (CFO)."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/services/fractional-cfo/challenges.png"
          />
          <ServiceSection serviceData={serviceData} />
          <BusinessImpactSection 
            impactData={businessImpactData} 
            imageSrc="/assets/imgs/services/fractional-cfo/impact.png"
          />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Approach"
            sectionSubtitle="We combine strategic financial vision with hands-on execution"
          />
          <IndustryApplicationsSection 
            applicationsData={industryApplicationsData} 
            imageSrc="/assets/imgs/services/fractional-cfo/industry-application.png"
          />
          <ServiceIndustrySection 
            industryData={industryData}
            sectionTitle="Ideal for..."
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Tools & Technologies We Use"
          />
          <WhyWorkWithUsSection 
            whyWorkWithUsData={whyWorkWithUsData} 
            imageSrc="/assets/imgs/services/fractional-cfo/why-work-with-us.png"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="Fractional CFO FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Gain strategic financial leadership without full-time costs."
          buttonLabel="Schedule your Fractional CFO consultation"
          buttonLink="/contact"
        />
    </div>
  );
};

export default FractionalCFOPage;
