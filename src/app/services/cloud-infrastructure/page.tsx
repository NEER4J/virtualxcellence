import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ServiceChallengeSection, { ServiceSection } from "@/components/Services/ServiceSection";
import ServiceProcessSection from "@/components/Services/ProcessSection";
import ServiceIndustrySection from "@/components/Services/IndustrySection";
import ServiceToolsSection from "@/components/Services/ToolsSection";
import ServiceTextSliderSection from "@/components/Services/TextSliderSection";
import ServiceFaqSection from "@/components/Services/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Cloud & Infrastructure Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
    description:
      "Scalable, secure, and future-ready IT foundations with Virtual Xcellence. Cloud migration, modernization, hybrid solutions, DevOps automation, and managed cloud services for enterprise-grade infrastructure.",
    keywords: [
      "Virtual Xcellence cloud services",
      "cloud migration services",
      "infrastructure modernization",
      "hybrid cloud solutions",
      "DevOps automation",
      "cloud security services",
      "AWS migration",
      "Azure cloud services",
      "Google Cloud Platform",
      "infrastructure as code",
      "cloud managed services",
      "multi-cloud solutions",
      "cloud compliance",
      "cloud cost optimization",
      "cloud architecture",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Cloud & Infrastructure Services Page",
    },
  };

  return generateSeoMetadata('/services/cloud-infrastructure', fallbackMetadata);
}

const CloudInfrastructurePage = (): ReactElement => {
  // Challenge Data for Cloud & Infrastructure
  const challengeData = {
    subtitle: "",
    title: "Why Cloud & Infrastructure Matter",
    description: "Virtual Xcellence provides the strategy, tools, and execution needed to transform IT into a competitive advantage.",
    challenges: [
      "Legacy systems slow down agility and increase costs",
      "Modern businesses demand always-on availability and global scalability",
      "Security and compliance are critical for regulated industries",
      "Cloud adoption accelerates innovation, automation, and AI integration",
    ],
  };

  // Service Data for Cloud & Infrastructure
  const serviceData = {
    sectionSubtitle: "",
    sectionTitle: "Our Cloud & Infrastructure Offerings",
    viewAllLink: "#",
    viewAllText: "View All Services",
    services: [
      {
        id: 1,
        number: "01",
        title: "Cloud Migration & Modernization",
        description: "Seamless migration from legacy to AWS, Azure, or GCP.",
        items: [
          "Application re-architecture for cloud-native models",
          "Data migration, integration, and governance",
          "Legacy system modernization"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-1.webp"
      },
      {
        id: 2,
        number: "02",
        title: "Hybrid & Multi-Cloud Solutions",
        description: "Design resilient and cost-optimized IT ecosystems.",
        items: [
          "Balance workloads across public, private, and hybrid clouds",
          "Vendor-agnostic architecture tailored to business needs",
          "Multi-cloud governance and management"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-2.webp"
      },
      {
        id: 3,
        number: "03",
        title: "DevOps & Infrastructure Automation",
        description: "CI/CD pipeline design and management.",
        items: [
          "Infrastructure as Code (IaC) with Terraform, Ansible",
          "Automated deployments and monitoring for faster innovation",
          "Container orchestration with Kubernetes"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-3.webp"
      },
      {
        id: 4,
        number: "04",
        title: "Security & Compliance",
        description: "Zero-trust cloud security frameworks.",
        items: [
          "Compliance with GDPR, HIPAA, ISO standards",
          "Identity & access management (IAM) solutions",
          "Cloud security monitoring and threat detection"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-4.webp"
      },
      {
        id: 5,
        number: "05",
        title: "Scalable Hosting & Managed Services",
        description: "24/7 cloud operations and monitoring.",
        items: [
          "Backup, disaster recovery, and business continuity",
          "Performance tuning and cost optimization",
          "Managed cloud operations and support"
        ],
        detailsLink: "#",
        itemLink: "#",
        image: "/assets/imgs/icon/icon-5.webp"
      }
    ]
  };

  // Process Data for Cloud & Infrastructure
  const processData = [
    {
      title: "Assess",
      text: "Evaluate current infrastructure and cloud readiness",
      number: "01"
    },
    {
      title: "Plan", 
      text: "Design cloud architecture and migration strategy",
      number: "02"
    },
    {
      title: "Migrate",
      text: "Execute seamless cloud migration with minimal downtime",
      number: "03"
    },
    {
      title: "Optimize",
      text: "Fine-tune performance, security, and costs",
      number: "04"
    },
    {
      title: "Manage",
      text: "Provide ongoing monitoring and support",
      number: "05"
    }
  ];

  // Industry Data for Cloud & Infrastructure
  const industryData = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant cloud hosting for patient data",
      number: "01",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Finance",
      description: "Secure multi-cloud solutions for high-frequency transactions",
      number: "02",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-2.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Government",
      description: "Smart city and e-governance platforms hosted on secure clouds",
      number: "03",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-3.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Retail",
      description: "Scalable eCommerce platforms with AI-driven personalization",
      number: "04",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-4.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    },
    {
      title: "Manufacturing",
      description: "Cloud-enabled IoT for Industry 4.0 adoption",
      number: "05",
      link: "#",
      shapeImage: "/assets/imgs/shape/shape-1.webp",
      thumb: "/assets/imgs/gallery/image-52.webp"
    }
  ];

  // Tools Data for Cloud & Infrastructure
  const toolsData = [
    {
      title: "Cloud Providers",
      tools: [
        { name: "AWS", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Azure", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Google Cloud", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Oracle Cloud", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Automation & DevOps", 
      tools: [
        { name: "Terraform", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Ansible", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Jenkins", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Kubernetes", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Docker", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Security Tools",
      tools: [
        { name: "Palo Alto", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Fortinet", icon: "/assets/imgs/client/client-1.webp" },
        { name: "CrowdStrike", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Okta", icon: "/assets/imgs/client/client-1.webp" }
      ]
    },
    {
      title: "Monitoring & Optimization",
      tools: [
        { name: "Datadog", icon: "/assets/imgs/client/client-1.webp" },
        { name: "New Relic", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Prometheus", icon: "/assets/imgs/client/client-1.webp" },
        { name: "Grafana", icon: "/assets/imgs/client/client-1.webp" }
      ]
    }
  ];

  // Text Slider Data for Cloud & Infrastructure
  const textSliderData = {
    items: [
      {
        id: 1,
        text: `Scalable, Secure, and Future-Ready IT Foundations`,
        suffix: `Cloud Computing That Drives Innovation`,
      },
      {
        id: 2,
        text: `Cloud Migration & Modernization`,
        suffix: `Seamless Legacy to Cloud Transformation`,
      },
      {
        id: 3,
        text: `Hybrid & Multi-Cloud Solutions`,
        suffix: `Resilient and Cost-Optimized IT Ecosystems`,
      },
      {
        id: 4,
        text: `DevOps & Infrastructure Automation`,
        suffix: `Faster Innovation Through Automation`,
      },
      {
        id: 5,
        text: `Security & Compliance`,
        suffix: `Zero-Trust Cloud Security Frameworks`,
      },
      {
        id: 6,
        text: `Managed Cloud Services`,
        suffix: `24/7 Operations and Support`,
      },
      {
        id: 7,
        text: `Enterprise-Grade Infrastructure`,
        suffix: `Built to Scale and Perform`,
      },
      {
        id: 8,
        text: `Cost-Optimized Cloud Solutions`,
        suffix: `Maximizing ROI Through Smart Architecture`,
      },
    ],
  };

  // FAQ Data for Cloud & Infrastructure
  const faqData = [
    {
      question: "How long does a typical cloud migration take?",
      answer: "It depends on scale, but most migrations are completed in 3–6 months with minimal downtime.",
    },
    {
      question: "Can you work with our in-house IT team?",
      answer: "Yes ,  we often co-create cloud strategies with client IT departments for smoother adoption.",
    },
    {
      question: "Is cloud really secure?",
      answer: "Yes ,  when designed properly. We implement enterprise-grade security and compliance controls across every deployment.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="CLOUD & INFRASTRUCTURE"
            subTitle="Scalable, Secure, and Future-Ready IT Foundations"
            pageName="CLOUD & INFRASTRUCTURE"
            subtext="In today's digital-first economy, cloud computing is not just about reducing IT costs ,  it's about agility, scalability, and innovation. Virtual Xcellence helps businesses modernize infrastructure, migrate to the cloud, and optimize operations with end-to-end cloud and infrastructure services."
          />
          <ServiceChallengeSection 
            challengeData={challengeData} 
            imageSrc="/assets/imgs/gallery/image-52.webp"
          />
          <ServiceSection serviceData={serviceData} />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Cloud Implementation Approach"
            sectionSubtitle="We follow a proven methodology to ensure successful cloud adoption and optimization"
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
            sectionTitle="Cloud & Infrastructure FAQ"
          />
        </main>
        <FooterSection 
          ctaHeading="Build a cloud-powered foundation for the future."
          buttonLabel="Connect with our cloud architects"
          buttonLink="/contact"
        />
    </div>
  );
};

export default CloudInfrastructurePage;
