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
  title: "Development Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Building future-ready digital solutions with Virtual Xcellence. Custom web & mobile app development, cloud-native solutions, AI-powered applications, and enterprise software development.",
  keywords: [
    "Virtual Xcellence development",
    "custom software development",
    "web application development",
    "mobile app development",
    "cloud-native development",
    "AI-powered applications",
    "enterprise software solutions",
    "digital transformation",
    "software modernization",
    "MVP development",
    "legacy system migration",
    "progressive web apps",
    "microservices architecture",
    "blockchain solutions",
    "IoT applications",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Development Services Page",
  },
};

const DevelopmentPage = (): ReactElement => {
  // Challenge Data for Development
  const challengeData = {
    subtitle: "",
    title: "The Challenges Businesses Face",
    description: "We help you overcome these by building custom, cost-effective, and future-proof solutions.",
    challenges: [
      "Legacy systems that hinder agility and scalability",
      "Poor user experience leading to low adoption",
      "Fragmented systems with no integration",
      "Rising costs of software development and maintenance",
      "Lack of in-house technical expertise",
    ],
  };

  // Service Data for Development
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our Development Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Web & Mobile App Development",
        description: "Crafting intuitive, responsive, and high-performance applications.",
        items: [
          "Progressive Web Apps (PWA)",
          "Native & cross-platform mobile apps (iOS, Android, Flutter, React Native)",
          "Enterprise portals and intranet systems"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-1.webp"
      },
      {
        id: 2,
        number: "02",
        title: "Cloud-Native Development",
        description: "Leverage the power of the cloud for scalability and resilience.",
        items: [
          "Serverless architectures",
          "Microservices-based applications",
          "Containerization (Docker, Kubernetes)"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-2.webp"
      },
      {
        id: 3,
        number: "03",
        title: "AI & Data-Driven Applications",
        description: "Infusing intelligence into software to unlock automation and insights.",
        items: [
          "AI-powered chatbots and voice assistants",
          "Predictive analytics and machine learning models",
          "Computer vision and NLP applications"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-3.webp"
      },
      {
        id: 4,
        number: "04",
        title: "Custom Enterprise Solutions",
        description: "Solving complex enterprise challenges with tailored solutions.",
        items: [
          "ERP, CRM, HRMS, and workflow automation",
          "Integration with third-party systems (SAP, Salesforce, Oracle)",
          "Business intelligence dashboards"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-4.webp"
      },
      {
        id: 5,
        number: "05",
        title: "Emerging Tech & Innovation",
        description: "Stay ahead of the curve with next-gen technologies.",
        items: [
          "Blockchain solutions (smart contracts, digital identity)",
          "IoT-enabled applications",
          "AR/VR for training, retail, and healthcare"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-5.webp"
      }
    ]
  };

  // Process Data for Development
  const processData = [
    {
      title: "Discovery & Consulting",
      text: "Understanding business goals",
      number: "01"
    },
    {
      title: "Design & Prototyping", 
      text: "Wireframes, mockups, and UX-first design",
      number: "02"
    },
    {
      title: "Development & Testing",
      text: "Iterative builds with continuous integration",
      number: "03"
    },
    {
      title: "Deployment & Monitoring",
      text: "Cloud-enabled, secure delivery",
      number: "04"
    },
    {
      title: "Maintenance & Scaling",
      text: "Long-term support and feature upgrades",
      number: "05"
    }
  ];

  // Industry Data for Development
  const industryData = [
    {
      title: "Healthcare",
      description: "Digital patient portals, AI triage assistants",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Finance",
      description: "Secure mobile banking apps, compliance-driven solutions",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Retail & eCommerce",
      description: "Omni-channel shopping platforms",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Government",
      description: "Citizen service portals and smart city apps",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Manufacturing",
      description: "IoT-driven process automation",
      number: "05",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  // Tools Data for Development
  const toolsData = [
    {
      title: "Frontend Technologies",
      tools: [
        { name: "React", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Angular", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Vue.js", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Backend Technologies", 
      tools: [
        { name: "Node.js", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Python", icon: "/assets/imgs/client/client-1.webp" },
        { name: ".NET", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Java", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Mobile Development",
      tools: [
        { name: "Flutter", icon: "/assets/imgs/client/client-1.webp" },
        { name: "React Native", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Swift", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Kotlin", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Cloud Platforms",
      tools: [
        { name: "AWS", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Azure", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Google Cloud", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "AI/ML Technologies",
      tools: [
        { name: "TensorFlow", icon: "/assets/imgs/client/client-1.webp" },
        { name: "PyTorch", icon: "/assets/imgs/client/client-1.webp" },
        { name: "OpenAI APIs", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

  // Text Slider Data for Development
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Building Future-Ready Solutions`,
        suffix: `Transforming Ideas into Reality`,
      },
      {
        id: 2,
        text: `Custom Software Development`,
        suffix: `Tailored to Your Business Needs`,
      },
      {
        id: 3,
        text: `Agile & DevOps Excellence`,
        suffix: `Faster Delivery, Better Quality`,
      },
      {
        id: 4,
        text: `Cloud-Native Applications`,
        suffix: `Scalable & Resilient Solutions`,
      },
      {
        id: 5,
        text: `AI-Powered Innovation`,
        suffix: `Intelligent Software Solutions`,
      },
      {
        id: 6,
        text: `Mobile-First Development`,
        suffix: `Reach Users Everywhere`,
      },
      {
        id: 7,
        text: `Enterprise-Grade Security`,
        suffix: `Protecting Your Digital Assets`,
      },
      {
        id: 8,
        text: `Legacy System Modernization`,
        suffix: `Future-Proof Your Technology`,
      },
    ],
  };

  // FAQ Data for Development
  const faqData = [
    {
      question: "Do you build custom enterprise applications?",
      answer: "Yes, we specialize in tailor-made solutions aligned to your business needs.",
    },
    {
      question: "How long does it take to develop an MVP?",
      answer: "Typically 8–12 weeks, depending on complexity.",
    },
    {
      question: "Can you modernize legacy systems?",
      answer: "Absolutely, we migrate outdated systems to modern, cloud-ready platforms.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="DEVELOPMENT"
            subTitle="Building Future-Ready Digital Solutions"
            pageName="DEVELOPMENT"
            subtext="Every business today needs scalable, secure, and user-friendly software solutions to stay competitive. At VirtualXcellence, we bring together cutting-edge technologies, agile methodologies, and deep industry expertise to develop software that solves complex business challenges."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceSection serviceData={serviceData} />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Development Approach"
            sectionSubtitle="We follow an Agile + DevOps methodology to ensure faster delivery, quality, and scalability"
          />
          <ServiceIndustrySection 
            industryData={industryData}
            sectionTitle="Industry Applications"
          />
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Technologies We Use"
          />
          <ServiceTextSliderSection textSliderData={textSliderData} />
          <ServiceFaqSection 
            faqData={faqData}
            type={2}
            sectionTitle="Development FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Transform your ideas into powerful digital solutions."
          buttonLabel="Talk to our development experts"
          buttonLink="/contact"
        />
    </div>
  );
};

export default DevelopmentPage;
