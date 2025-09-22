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
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Business Transformation Services Page",
  },
};

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
        image: "/assets/imgs/icon/icon-1.webp"
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
        image: "/assets/imgs/icon/icon-2.webp"
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
        image: "/assets/imgs/icon/icon-3.webp"
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
        image: "/assets/imgs/icon/icon-4.webp"
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
        image: "/assets/imgs/icon/icon-5.webp"
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

  // Industry Data for Business Transformation
  const industryData = [
    {
      title: "Healthcare",
      description: "Digitized patient management, AI diagnostics, eHealth platforms",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Finance",
      description: "Automated compliance reporting, AI-powered fraud detection",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Government",
      description: "Smart city initiatives, digital citizen services",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Retail",
      description: "Omnichannel experience with AI-driven personalization",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Manufacturing",
      description: "Industry 4.0 adoption, predictive maintenance",
      number: "05",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  // Tools Data for Business Transformation
  const toolsData = [
    {
      title: "Automation",
      tools: [
        { name: "UiPath", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Automation Anywhere", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Power Automate", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Data & AI", 
      tools: [
        { name: "TensorFlow", icon: "/assets/imgs/client/client-1.webp" },
        { name: "PyTorch", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Azure AI", icon: "/assets/imgs/client/client-1.webp" },
        { name: "OpenAI APIs", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Cloud",
      tools: [
        { name: "AWS", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Azure", icon: "/assets/imgs/client/client-1.webp" },
        { name: "GCP", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Oracle Cloud", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "BI & Analytics",
      tools: [
        { name: "Tableau", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Power BI", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Qlik", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Change Management",
      tools: [
        { name: "Prosci ADKAR", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Agile Frameworks", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

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
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceSection serviceData={serviceData} />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Approach"
            sectionSubtitle="We follow a 5-step transformation lifecycle"
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
