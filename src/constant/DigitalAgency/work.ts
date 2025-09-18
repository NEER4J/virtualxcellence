
export interface IProject {
  id: number;
  title: string;
  result: string;
  tags: string[];
  image: string;
  link: string;
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: IProject[];
}

const workData:WorkData = {
    sectionSubtitle: "SUCCESS STORIES",
    sectionTitle: "Driving Digital Excellence Across Industries",
    viewAllText: "View All Case Studies",
    viewAllLink: "/portfolio",
    projects: [
      {
        id: 1,
        title: "Retail Chain: AI demand forecasting",
        result: "35% cost savings",
        tags: ["RETAIL", "AI"],
        image: "/assets/imgs/project/project-1.webp",
        link: "/ai-agency/portfolio-details",
      },
      {
        id: 2,
        title: "Logistics Provider: Conversational AI",
        result: "65% faster response time",
        tags: ["LOGISTICS", "AI"],
        image: "/assets/imgs/project/project-2.webp",
        link: "/ai-agency/portfolio-details",
      },
      {
        id: 3,
        title: "Financial Institution: Omni Channel customer Experience",
        result: "100% achieved",
        tags: ["FINANCE", "OMNI-CHANNEL"],
        image: "/assets/imgs/project/project-3.webp",
        link: "/ai-agency/portfolio-details",
      },
      {
        id: 4,
        title: "Healthcare Provider: AI-powered diagnostics",
        result: "40% accuracy improvement",
        tags: ["HEALTHCARE", "AI"],
        image: "/assets/imgs/project/project-4.webp",
        link: "/ai-agency/portfolio-details",
      },
    ],
  };
  
  export default workData;
  
