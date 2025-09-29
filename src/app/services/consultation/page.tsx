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
    title: "Consultation Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
    description:
      "Turning complex challenges into strategic opportunities with Virtual Xcellence. Digital transformation strategy, technology advisory, business process re-engineering, and enterprise architecture consulting.",
    keywords: [
      "Virtual Xcellence consultation",
      "digital transformation consulting",
      "technology advisory services",
      "business process re-engineering",
      "enterprise architecture consulting",
      "IT strategy consulting",
      "digital transformation roadmap",
      "cloud adoption consulting",
      "AI strategy consulting",
      "innovation consulting",
      "technology assessment",
      "legacy modernization consulting",
      "change management consulting",
      "digital strategy planning",
      "technology ROI optimization",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Consultation Services Page",
    },
  };

  return generateSeoMetadata('/services/consultation', fallbackMetadata);
}

const ConsultationPage = (): ReactElement => {
  // Challenge Data for Consultation
  const challengeData = {
    subtitle: "",
    title: "Challenges Businesses Face",
    description: "Virtual Xcellence bridges these gaps with end-to-end consulting, from vision to execution.",
    challenges: [
      "Lack of clarity in digital transformation roadmaps",
      "High cost of failed technology investments",
      "Rapidly changing tech trends (AI, cloud, automation)",
      "Difficulty in aligning IT with business goals",
      "Vendor dependency and poor ROI on past projects",
    ],
  };

  // Service Data for Consultation
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our Consultation Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Digital Transformation Strategy",
        description: "Helping organizations reimagine processes, people, and platforms.",
        items: [
          "Transformation roadmap design",
          "Process optimization & automation",
          "Innovation workshops and change management"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-1.webp"
      },
      {
        id: 2,
        number: "02",
        title: "Technology Advisory",
        description: "Evaluating, selecting, and implementing the right technologies.",
        items: [
          "IT infrastructure assessment",
          "Cloud adoption consulting",
          "AI & automation strategy"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-2.webp"
      },
      {
        id: 3,
        number: "03",
        title: "Business Process Re-engineering (BPR)",
        description: "Re-designing workflows to increase efficiency and reduce cost.",
        items: [
          "Process gap analysis",
          "Automation strategy with RPA/AI",
          "KPI-driven improvements"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-3.webp"
      },
      {
        id: 4,
        number: "04",
        title: "Enterprise Architecture & Integration",
        description: "Ensuring technology systems talk to each other seamlessly.",
        items: [
          "Legacy modernization",
          "API-led integration strategies",
          "Hybrid IT roadmaps"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-4.webp"
      },
      {
        id: 5,
        number: "05",
        title: "Innovation & Future-Readiness",
        description: "Advisory on emerging technologies and market disruptions.",
        items: [
          "AI, IoT, Blockchain adoption planning",
          "Cybersecurity & risk management",
          "Sustainability consulting (Green IT, digital efficiency)"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-5.webp"
      }
    ]
  };

  // Process Data for Consultation
  const processData = [
    {
      title: "Assess",
      text: "Understand current IT & business landscape",
      number: "01"
    },
    {
      title: "Strategize", 
      text: "Define long-term goals & short-term wins",
      number: "02"
    },
    {
      title: "Design",
      text: "Blueprint for digital transformation",
      number: "03"
    },
    {
      title: "Implement",
      text: "Partner through rollout & change adoption",
      number: "04"
    },
    {
      title: "Evolve",
      text: "Continuous improvement & scaling",
      number: "05"
    }
  ];


  // Tools Data for Consultation
  const toolsData = [
    {
      title: "Process Improvement",
      tools: [
        { name: "Lean Six Sigma", icon: "/assets/imgs/client/client-1.webp" },
        { name: "BPMN", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Enterprise Architecture", 
      tools: [
        { name: "TOGAF", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Zachman", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Cloud Strategy",
      tools: [
        { name: "AWS Well-Architected", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Azure CAF", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Agile Consulting",
      tools: [
        { name: "Scrum", icon: "/assets/imgs/client/client-1.webp" },
        { name: "SAFe", icon: "/assets/imgs/client/client-1.webp" },
        { name: "DevOps", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

  // Text Slider Data for Consultation
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Turning Complex Challenges into Strategic Opportunities`,
        suffix: `Technology Strategy That Drives Results`,
      },
      {
        id: 2,
        text: `Digital Transformation Consulting`,
        suffix: `From Vision to Execution`,
      },
      {
        id: 3,
        text: `Technology Advisory Excellence`,
        suffix: `Making the Right Technology Choices`,
      },
      {
        id: 4,
        text: `Business Process Re-engineering`,
        suffix: `Optimizing Operations for Growth`,
      },
      {
        id: 5,
        text: `Enterprise Architecture & Integration`,
        suffix: `Seamless Technology Ecosystems`,
      },
      {
        id: 6,
        text: `Innovation & Future-Readiness`,
        suffix: `Staying Ahead of Market Disruption`,
      },
      {
        id: 7,
        text: `Strategic Technology Partnerships`,
        suffix: `Your Success is Our Mission`,
      },
      {
        id: 8,
        text: `Measurable Digital Outcomes`,
        suffix: `ROI-Driven Technology Solutions`,
      },
    ],
  };

  // Business Impact Data for Consultation
  const businessImpactData = {
    title: "The Business Impact of Strategic Consulting",
    description: "Our consulting services drive digital transformation and operational excellence. Organizations see immediate improvements in process efficiency, technology alignment, and strategic clarity.",
    description2: "We help achieve 30% cost reduction through process optimization, 50% faster decision-making with clear roadmaps, and 80% improvement in technology ROI. Our clients report enhanced competitive positioning and sustainable growth through strategic technology investments."
  };

  // Industry Applications Data for Consultation
  const industryApplicationsData = {
    title: "Industry Applications",
    description: "Our consulting solutions are tailored to meet the unique challenges and opportunities across different industries.",
    description2: "From healthcare with AI-driven patient management systems, to finance with digital-first banking models, government with smart city roadmaps, and manufacturing with Industry 4.0 adoption strategies. Our industry expertise ensures solutions that drive measurable business outcomes."
  };

  // Why Work With Us Data for Consultation
  const whyWorkWithUsData = {
    title: "Why Work With Us",
    description: "We combine deep industry expertise with proven consulting methodologies to deliver strategic technology solutions. Our experienced consultants provide unbiased, vendor-neutral advice that aligns with your business goals.",
    description2: "Our track record includes 150+ successful transformation projects, certified consultants across multiple domains, and comprehensive support from strategy to execution. We provide ongoing advisory services and continuous optimization to ensure long-term success."
  };

  // FAQ Data for Consultation
  const faqData = [
    {
      question: "How do you ensure consulting delivers measurable results?",
      answer: "We define KPIs upfront (cost reduction, efficiency, revenue growth) and track progress.",
    },
    {
      question: "Can you work alongside our existing IT vendors?",
      answer: "Yes, we act as an independent advisor, ensuring alignment and ROI.",
    },
    {
      question: "Do you provide consulting only, or also execution?",
      answer: "Both, we consult, design, and can execute through our development and transformation teams.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="CONSULTATION"
            subTitle="Turning Complex Challenges into Strategic Opportunities"
            pageName="CONSULTATION"
            subtext="Technology is only as powerful as the strategy behind it. At Virtual Xcellence, we don't just advise ,  we partner with you to design and execute strategies that align digital transformation with business growth."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceSection serviceData={serviceData} />
          <BusinessImpactSection 
            impactData={businessImpactData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Consulting Approach"
            sectionSubtitle="Our consulting methodology blends business vision with technology execution"
          />
          <IndustryApplicationsSection 
            applicationsData={industryApplicationsData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Tools & Frameworks We Use"
          />
          <WhyWorkWithUsSection 
            whyWorkWithUsData={whyWorkWithUsData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="Consultation FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Reimagine your business with expert consulting."
          buttonLabel="Book a strategy session today"
          buttonLink="/contact"
        />
    </div>
  );
};

export default ConsultationPage;
