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
  title: "Fractional CTO Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Technology leadership without the full-time overhead. Virtual Xcellence offers Fractional CTO services providing on-demand access to senior technology leadership for startups, SMEs, and enterprises.",
  keywords: [
    "Virtual Xcellence Fractional CTO",
    "fractional CTO services",
    "technology leadership consulting",
    "interim CTO services",
    "startup technology advisor",
    "CTO as a service",
    "technology strategy consulting",
    "product development oversight",
    "IT governance consulting",
    "technology roadmap planning",
    "vendor management consulting",
    "team leadership mentoring",
    "scaling technology infrastructure",
    "digital transformation leadership",
    "technology executive services",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Fractional CTO Services Page",
  },
};

const FractionalCTOPage = (): ReactElement => {
  // Challenge Data for Fractional CTO
  const challengeData = {
    subtitle: "",
    title: "The Challenges Businesses Face",
    description: "Our Fractional CTO model ensures you get strategic leadership at flexible engagement levels, weekly, monthly, or project-based.",
    challenges: [
      "Lack of technology leadership and vision",
      "Poor alignment between business strategy and IT investments",
      "Inability to scale tech infrastructure with business growth",
      "Vendor lock-in and costly mistakes in early-stage tech choices",
      "Cybersecurity and compliance risks unmanaged at leadership level",
    ],
  };

  // Service Data for Fractional CTO
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our Fractional CTO Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Technology Strategy & Roadmap",
        description: "Crafting future-ready technology blueprints.",
        items: [
          "Long-term IT vision aligned with business goals",
          "Cloud adoption and digital transformation roadmaps",
          "Budgeting and cost optimization strategies"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-1.webp"
      },
      {
        id: 2,
        number: "02",
        title: "Product Development Oversight",
        description: "Providing leadership for product innovation.",
        items: [
          "MVP design & validation for startups",
          "Scaling SaaS platforms and enterprise solutions",
          "Agile development team management"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-2.webp"
      },
      {
        id: 3,
        number: "03",
        title: "Vendor & Partner Management",
        description: "Ensuring you get the best out of your tech ecosystem.",
        items: [
          "Vendor evaluation and negotiation",
          "Technology stack selection",
          "Outsourcing strategy & governance"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-3.webp"
      },
      {
        id: 4,
        number: "04",
        title: "IT Governance & Compliance",
        description: "Bringing discipline and risk management to IT.",
        items: [
          "Cybersecurity oversight",
          "Compliance frameworks (ISO, GDPR, HIPAA)",
          "Data privacy & governance policies"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-4.webp"
      },
      {
        id: 5,
        number: "05",
        title: "Team Leadership & Mentorship",
        description: "Guiding your technical team towards excellence.",
        items: [
          "Interim CTO role while recruiting permanent leadership",
          "Coaching internal teams on Agile, DevOps, and best practices",
          "Building a strong engineering culture"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-5.webp"
      }
    ]
  };

  // Process Data for Fractional CTO
  const processData = [
    {
      title: "Assess",
      text: "Understand current IT and business challenges",
      number: "01"
    },
    {
      title: "Define", 
      text: "Build a strategic roadmap",
      number: "02"
    },
    {
      title: "Lead",
      text: "Provide executive-level guidance on projects",
      number: "03"
    },
    {
      title: "Support",
      text: "Mentor internal teams, manage vendors",
      number: "04"
    },
    {
      title: "Scale",
      text: "Ensure long-term growth and sustainability",
      number: "05"
    }
  ];

  // Industry Data for Fractional CTO
  const industryData = [
    {
      title: "Startups",
      description: "Early-stage product development & funding readiness",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "SMEs",
      description: "Scaling technology without hiring a full-time CTO",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Enterprises",
      description: "Interim CTO leadership during transitions",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Government & NGOs",
      description: "Strategic digital transformation guidance",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  // Tools Data for Fractional CTO
  const toolsData = [
    {
      title: "Cloud & Infrastructure",
      tools: [
        { name: "AWS", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Azure", icon: "/assets/imgs/client/client-1.webp" },
        { name: "GCP", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Agile & DevOps", 
      tools: [
        { name: "Scrum", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Kanban", icon: "/assets/imgs/client/client-1.webp" },
        { name: "CI/CD Pipelines", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Product Strategy",
      tools: [
        { name: "Design Thinking", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Lean Startup", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Security & Compliance",
      tools: [
        { name: "NIST", icon: "/assets/imgs/client/client-1.webp" },
        { name: "ISO", icon: "/assets/imgs/client/client-1.webp" },
        { name: "HIPAA", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

  // Text Slider Data for Fractional CTO
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Technology Leadership Without the Full-Time Overhead`,
        suffix: `Executive-Level Guidance When You Need It`,
      },
      {
        id: 2,
        text: `Fractional CTO Services`,
        suffix: `Strategic Technology Leadership`,
      },
      {
        id: 3,
        text: `On-Demand Technology Vision`,
        suffix: `Scaling Innovation & Infrastructure`,
      },
      {
        id: 4,
        text: `Product Development Oversight`,
        suffix: `From MVP to Market Leader`,
      },
      {
        id: 5,
        text: `Vendor & Partner Management`,
        suffix: `Optimizing Your Tech Ecosystem`,
      },
      {
        id: 6,
        text: `IT Governance & Compliance`,
        suffix: `Risk Management & Best Practices`,
      },
      {
        id: 7,
        text: `Team Leadership & Mentorship`,
        suffix: `Building Engineering Excellence`,
      },
      {
        id: 8,
        text: `Flexible Engagement Models`,
        suffix: `Weekly, Monthly, or Project-Based`,
      },
    ],
  };

  // FAQ Data for Fractional CTO
  const faqData = [
    {
      question: "How is a Fractional CTO different from a consultant?",
      answer: "A consultant advises; a Fractional CTO leads and executes like part of your executive team.",
    },
    {
      question: "Can we scale up from Fractional CTO to full-time later?",
      answer: "Yes, our model adapts as your company grows.",
    },
    {
      question: "Do you work with startups raising funding?",
      answer: "Absolutely, we prepare your product and tech vision to impress investors.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="FRACTIONAL CTO"
            subTitle="Technology Leadership Without the Full-Time Overhead"
            pageName="FRACTIONAL CTO"
            subtext="In the digital age, having the right technology vision is the difference between scaling successfully and failing to compete. Yet, many companies, especially startups and mid-sized enterprises, struggle to afford or retain an experienced Chief Technology Officer (CTO)."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceSection serviceData={serviceData} />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Approach"
            sectionSubtitle="We combine strategic vision with hands-on execution"
          />
          <ServiceIndustrySection 
            industryData={industryData}
            sectionTitle="Ideal for..."
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Tools & Expertise We Bring"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="Fractional CTO FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Get enterprise-level technology leadership at startup-friendly terms."
          buttonLabel="Book your Fractional CTO consultation"
          buttonLink="/contact"
        />
    </div>
  );
};

export default FractionalCTOPage;
