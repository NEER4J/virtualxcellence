export interface ServiceSectionData {
  subtitle: string;
  title: string;
  exploreLink: string;
}

export interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  detailLink: string;
}

export const serviceSectionData: ServiceSectionData = {
  subtitle: "Our Services",
  title: "Comprehensive Technology Solutions",
  exploreLink: "/ai-agency/services",
};

export const servicesData: Service[] = [
  {
    id: "development",
    title: "Development",
    image: "/assets/imgs/gallery/image-17.webp",
    description:
      "Custom software, web & mobile solutions tailored to your business needs. We build scalable, secure, and user-friendly applications that drive growth and efficiency.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "consultation",
    title: "Consultation",
    image: "/assets/imgs/gallery/image-47.webp",
    description:
      "Strategic technology advisory to help you make informed decisions. Our experts provide guidance on technology roadmaps, digital transformation, and innovation strategies.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "fractional-cto",
    title: "Fractional CTO",
    image: "/assets/imgs/gallery/image-46.webp",
    description:
      "On-demand technology leadership for growing companies. Get access to senior-level technical expertise without the full-time commitment, perfect for scaling your tech operations.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "fractional-cfo",
    title: "Fractional CFO",
    image: "/assets/imgs/gallery/image-45.webp",
    description:
      "Financial strategy & transformation services. We help optimize your financial operations, implement cost-effective solutions, and drive sustainable business growth.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "business-transformation",
    title: "Business Transformation",
    image: "/assets/imgs/gallery/image-17.webp",
    description:
      "Process redesign, automation, and AI integration to modernize your operations. We help streamline workflows, reduce costs, and improve overall business efficiency.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    image: "/assets/imgs/gallery/image-47.webp",
    description:
      "Comprehensive risk management and data protection solutions. We safeguard your digital assets with advanced security measures and compliance frameworks.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    image: "/assets/imgs/gallery/image-46.webp",
    description:
      "Conversational AI, predictive analytics, and RPA solutions. Leverage artificial intelligence to automate processes, gain insights, and enhance customer experiences.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    image: "/assets/imgs/gallery/image-45.webp",
    description:
      "Cloud migration, DevOps, and managed services for scalable infrastructure. We help you transition to the cloud and maintain reliable, secure, and cost-effective systems.",
    detailLink: "/ai-agency/service-details",
  },
];
