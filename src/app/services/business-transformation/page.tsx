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
    title: "Business Transformation Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
    description:
      "Redefining the future of work and business with Virtual Xcellence. Digital transformation services including process automation, AI integration, cloud modernization, and organizational change management.",
    keywords: [
      "Virtual Xcellence business transformation",
      "digital transformation services",
      "business process automation",
      "digital process automation",
      "organizational change management",
      "AI integration services",
      "cloud modernization",
      "sustainability transformation",
      "green IT consulting",
      "digital culture building",
      "workflow orchestration",
      "predictive analytics",
      "change adoption frameworks",
      "digital-first transformation",
      "business model innovation",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Business Transformation Services Page",
    },
  };

  return generateSeoMetadata('/services/business-transformation', fallbackMetadata);
}

const BusinessTransformationPage = (): ReactElement => {
  // Challenge Data for Business Transformation
  const challengeData = {
    subtitle: "",
    title: "The Challenges Businesses Face",
    description: "Our Business Transformation framework combines strategy, execution, and change management to deliver measurable impact.",
    challenges: [
      "Legacy processes slowing down agility",
      "Fragmented systems creating inefficiencies",
      "Difficulty integrating AI, automation, and cloud technologies",
      "Rising costs without proportional returns",
      "Resistance to organizational change",
    ],
  };

  // Service Data for Business Transformation
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our Business Transformation Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Digital Process Automation",
        description: "Reimagine workflows with intelligent automation.",
        items: [
          "Robotic Process Automation (RPA)",
          "AI-driven decision-making",
          "End-to-end workflow orchestration"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/business-transformation/digital-process.png"
      },
      {
        id: 2,
        number: "02",
        title: "Data & AI Integration",
        description: "Make data a competitive advantage.",
        items: [
          "Predictive analytics and BI dashboards",
          "AI-powered customer experience personalization",
          "Industry-specific AI models (healthcare, finance, retail)"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/business-transformation/data-ai-integration.png"
      },
      {
        id: 3,
        number: "03",
        title: "Cloud & Infrastructure Modernization",
        description: "Scale your business on resilient platforms.",
        items: [
          "Cloud migration (AWS, Azure, GCP)",
          "Hybrid cloud and edge computing strategies",
          "Cost optimization and governance"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/business-transformation/cloud.png"
      },
      {
        id: 4,
        number: "04",
        title: "Organizational Change Management",
        description: "Ensure people and processes evolve with technology.",
        items: [
          "Change adoption frameworks",
          "Employee reskilling and digital culture building",
          "Stakeholder alignment and governance"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/business-transformation/organizational.png"
      },
      {
        id: 5,
        number: "05",
        title: "Sustainability & Green Transformation",
        description: "Future-proof your business with sustainable IT.",
        items: [
          "Paperless office digitization",
          "Energy-efficient cloud and data centers",
          "Smart city and green IT consulting"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/services/business-transformation/sustainability.png"
      }
    ]
  };

  // Process Data for Business Transformation
  const processData = [
    {
      title: "Assess",
      text: "Analyze current processes, culture, and systems",
      number: "01"
    },
    {
      title: "Design", 
      text: "Define target operating model",
      number: "02"
    },
    {
      title: "Implement",
      text: "Deploy solutions (AI, cloud, automation)",
      number: "03"
    },
    {
      title: "Adopt",
      text: "Drive people & process alignment",
      number: "04"
    },
    {
      title: "Optimize",
      text: "Continuously improve for long-term ROI",
      number: "05"
    }
  ];


  // Tools Data for Business Transformation
  const toolsData = [
    {
      title: "Automation",
      tools: [
        { name: "RPA", icon: "/assets/imgs/tools/rpa.png" },
        { name: "API Integration", icon: "/assets/imgs/tools/api.png" },
        { name: "Power BI", icon: "/assets/imgs/tools/power=bi.png" }
      ]
    },
    {
      title: "Data & AI", 
      tools: [
        { name: "TensorFlow", icon: "/assets/imgs/tools/tensorflow.png" },
        { name: "PyTorch", icon: "/assets/imgs/tools/pytorch.png" },
        { name: "Azure AI", icon: "/assets/imgs/tools/azure.png" },
        { name: "OpenAI APIs", icon: "/assets/imgs/tools/openai.png" }
      ]
    },
    {
      title: "Cloud",
      tools: [
        { name: "AWS", icon: "/assets/imgs/tools/aws.png" },
        { name: "Azure", icon: "/assets/imgs/tools/azure.png" },
        { name: "Google Cloud", icon: "/assets/imgs/tools/google-cloude.png" },
        { name: "Prisma Cloud", icon: "/assets/imgs/tools/prisma-cloude.png" }
      ]
    },
    {
      title: "BI & Analytics",
      tools: [
        { name: "Tableau", icon: "/assets/imgs/tools/tableau.png" },
        { name: "Power BI", icon: "/assets/imgs/tools/power=bi.png" },
        { name: "Google Data Studio", icon: "/assets/imgs/tools/google-data-studio.png" }
      ]
    },
    {
      title: "Change Management",
      tools: [
        { name: "Lean Six Sigma", icon: "/assets/imgs/tools/lean-six-sigma.png" },
        { name: "BPMN", icon: "/assets/imgs/tools/bpnm.png" }
      ]
    }
  ];

  // Business Impact Data for Business Transformation
  const businessImpactData = {
    title: "The Business Impact of Business Transformation",
    description: "Our transformation services drive operational excellence and competitive advantage. Organizations see immediate improvements in efficiency, agility, and innovation capabilities.",
    description2: "We help achieve 60% process efficiency gains, 40% cost reduction, and 3x faster time-to-market. Our clients report improved customer satisfaction, enhanced employee productivity, and sustainable growth through our comprehensive transformation approach."
  };

  // Industry Applications Data for Business Transformation
  const industryApplicationsData = {
    title: "Industry Applications",
    description: "Our business transformation solutions are tailored to meet the unique requirements and challenges across different industries.",
    description2: "From healthcare with digitized patient management and AI diagnostics, to finance with automated compliance reporting and AI-powered fraud detection, government with smart city initiatives and digital citizen services, retail with omnichannel experience and AI-driven personalization, and manufacturing with Industry 4.0 adoption and predictive maintenance. Our industry expertise ensures solutions that drive real business value."
  };

  // Why Work With Us Data for Business Transformation
  const whyWorkWithUsData = {
    title: "Why Work With Us",
    description: "We combine transformation expertise with proven methodologies to deliver exceptional business results. Our experienced team ensures successful digital transformation and organizational change.",
    description2: "Our proven track record includes 150+ successful transformations, end-to-end expertise, and comprehensive support from strategy to execution. We provide ongoing optimization, change management, and scaling support to ensure your business transformation delivers lasting value."
  };

  // Text Slider Data for Business Transformation
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Redefining the Future of Work and Business`,
        suffix: `Digital Transformation That Delivers Results`,
      },
      {
        id: 2,
        text: `Digital Process Automation`,
        suffix: `Intelligent Workflow Orchestration`,
      },
      {
        id: 3,
        text: `Data & AI Integration`,
        suffix: `Making Data a Competitive Advantage`,
      },
      {
        id: 4,
        text: `Cloud & Infrastructure Modernization`,
        suffix: `Scaling on Resilient Platforms`,
      },
      {
        id: 5,
        text: `Organizational Change Management`,
        suffix: `People and Process Evolution`,
      },
      {
        id: 6,
        text: `Sustainability & Green Transformation`,
        suffix: `Future-Proofing with Sustainable IT`,
      },
      {
        id: 7,
        text: `End-to-End Transformation`,
        suffix: `From Strategy to Execution`,
      },
      {
        id: 8,
        text: `Measurable Business Impact`,
        suffix: `Delivering Long-Term Growth`,
      },
    ],
  };

  // FAQ Data for Business Transformation
  const faqData = [
    {
      question: "How do you ensure employees adopt digital transformation?",
      answer: "We combine training, change management, and leadership alignment to reduce resistance.",
    },
    {
      question: "Do you work only with large enterprises?",
      answer: "No, we work with startups, SMEs, governments, and enterprises alike.",
    },
    {
      question: "How soon can we see ROI from transformation projects?",
      answer: "Typically within 6–12 months, depending on project scale.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="BUSINESS TRANSFORMATION"
            subTitle="Redefining the Future of Work and Business"
            pageName="BUSINESS TRANSFORMATION"
            subtext="Digital disruption is no longer a buzzword, it's a necessity. Organizations that fail to transform risk losing market share, efficiency, and customer trust. At VirtualXcellence, we empower companies to rethink business models, modernize processes, and embrace technology-driven change through structured Business Transformation Services."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/services/business-transformation/challenges.png"
          />
          <ServiceSection serviceData={serviceData} />
          <BusinessImpactSection 
            impactData={businessImpactData} 
            imageSrc="/assets/imgs/services/business-transformation/the-business.png"
          />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Approach"
            sectionSubtitle="We follow a 5-step transformation lifecycle"
          />
          <IndustryApplicationsSection 
            applicationsData={industryApplicationsData} 
            imageSrc="/assets/imgs/services/business-transformation/industry.png"
          />
        
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Tools & Technologies We Use"
          />
          <WhyWorkWithUsSection 
            whyWorkWithUsData={whyWorkWithUsData} 
            imageSrc="/assets/imgs/services/business-transformation/why-work-us-with.png"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="Business Transformation FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Transform your business into a digital-first powerhouse."
          buttonLabel="Talk to our transformation experts"
          buttonLink="/contact"
        />
    </div>
  );
};

export default BusinessTransformationPage;
