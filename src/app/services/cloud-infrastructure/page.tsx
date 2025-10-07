import { ReactElement } from "react";
import { Metadata } from "next";
import { createRuntimePageMetadata } from '@/lib/runtime-seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'
import ServiceChallengeSection, { ServiceSection, BusinessImpactSection, IndustryApplicationsSection, WhyWorkWithUsSection } from "@/components/Services/ServiceSection";
import ServiceProcessSection from "@/components/Services/ProcessSection";
import ServiceToolsSection from "@/components/Services/ToolsSection";
import ServiceTextSliderSection from "@/components/Services/TextSliderSection";
import ServiceFaqSection from "@/components/Services/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  return createRuntimePageMetadata('/services/cloud-infrastructure', {
    title: "Cloud & Infrastructure Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
    description: "Scalable, secure, and future-ready IT foundations with Virtual Xcellence. Cloud migration, modernization, hybrid solutions, DevOps automation, and managed cloud services for enterprise-grade infrastructure.",
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
    canonicalUrl: "https://virtualxcellence.com/services/cloud-infrastructure"
  });
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
        image: "/assets/imgs/services/cloud-infrastructure/cloud-migration.png"
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
        image: "/assets/imgs/services/cloud-infrastructure/hybrid-multi-cloud.png"
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
        image: "/assets/imgs/services/cloud-infrastructure/devops.png"
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
        image: "/assets/imgs/services/cloud-infrastructure/security-compliance.png"
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
        image: "/assets/imgs/services/cloud-infrastructure/scalable-hosting.png"
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

  

  // Tools Data for Cloud & Infrastructure
  const toolsData = [
    {
      title: "Cloud Providers",
      tools: [
        { name: "AWS", icon: "/assets/imgs/tools/aws.png" },
        { name: "Azure", icon: "/assets/imgs/tools/azure.png" },
        { name: "Google Cloud", icon: "/assets/imgs/tools/google-cloude.png" },
        { name: "Oracle Cloud", icon: "/assets/imgs/tools/oracle-cloud.png" }
      ]
    },
    {
      title: "Automation & DevOps", 
      tools: [
        { name: "Terraform", icon: "/assets/imgs/tools/terraform.jpg" },
        { name: "Ansible", icon: "/assets/imgs/tools/ansible.jpg" },
        { name: "Jenkins", icon: "/assets/imgs/tools/jenkins.jpg" },
        { name: "Kubernetes", icon: "/assets/imgs/tools/kubernetes.jpg" },
        { name: "Docker", icon: "/assets/imgs/tools/docker.jpg" }
      ]
    },
    {
      title: "Security Tools",
      tools: [
        { name: "Palo Alto", icon: "/assets/imgs/tools/palo-alto.png" },
        { name: "Fortinet", icon: "/assets/imgs/tools/fortinet.png" },
        { name: "CrowdStrike", icon: "/assets/imgs/tools/crowd-strike.png" },
        { name: "Okta", icon: "/assets/imgs/tools/okta.png" }
      ]
    },
    {
      title: "Monitoring & Optimization",
      tools: [
        { name: "Datadog", icon: "/assets/imgs/tools/datadog.png" },
        { name: "New Relic", icon: "/assets/imgs/tools/new-relic.png" },
        { name: "Prometheus", icon: "/assets/imgs/tools/prometheus.png" },
        { name: "Grafana", icon: "/assets/imgs/tools/grafana.png" }
      ]
    }
  ];

  // Business Impact Data for Cloud & Infrastructure
  const businessImpactData = {
    title: "The Business Impact of Cloud Infrastructure",
    description: "Our cloud solutions drive operational efficiency and competitive advantage. Organizations see immediate improvements in scalability, security, and cost optimization.",
    description2: "We help achieve 50% cost reduction, 99.9% uptime, and 3x faster deployment cycles. Our clients report improved agility, reduced infrastructure costs, and enhanced security through our cloud-native solutions and managed services."
  };

  // Industry Applications Data for Cloud & Infrastructure
  const industryApplicationsData = {
    title: "Industry Applications",
    description: "Our cloud infrastructure solutions are tailored to meet the unique requirements and challenges across different industries.",
    description2: "From healthcare with HIPAA-compliant cloud hosting for patient data, to finance with secure multi-cloud solutions for high-frequency transactions, government with smart city and e-governance platforms, retail with scalable eCommerce platforms, and manufacturing with cloud-enabled IoT for Industry 4.0. Our industry expertise ensures solutions that drive real business value."
  };

  // Why Work With Us Data for Cloud & Infrastructure
  const whyWorkWithUsData = {
    title: "Why Work With Us",
    description: "We combine cloud expertise with proven methodologies to deliver exceptional infrastructure solutions. Our experienced team ensures seamless cloud adoption and optimization.",
    description2: "Our proven track record includes 200+ successful cloud migrations, multi-cloud expertise, and comprehensive support from strategy to operations. We provide ongoing monitoring, optimization, and scaling support to ensure your cloud infrastructure grows with your business."
  };

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
            imageSrc="/assets/imgs/services/cloud-infrastructure/why-cloud.png"
          />
          <ServiceSection serviceData={serviceData} />
          <BusinessImpactSection 
            impactData={businessImpactData} 
            imageSrc="/assets/imgs/services/cloud-infrastructure/business-impact.png"
          />
          <ServiceProcessSection 
            processData={processData}
            sectionTitle="Our Cloud Implementation Approach"
            sectionSubtitle="We follow a proven methodology to ensure successful cloud adoption and optimization"
          />
          <IndustryApplicationsSection 
            applicationsData={industryApplicationsData} 
            imageSrc="/assets/imgs/services/cloud-infrastructure/industry-application.png"
          />
        
          <ServiceToolsSection 
            toolsData={toolsData}
            sectionTitle="Tools & Technologies We Use"
          />
          <WhyWorkWithUsSection 
            whyWorkWithUsData={whyWorkWithUsData} 
            imageSrc="/assets/imgs/services/cloud-infrastructure/why-us.png"
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
