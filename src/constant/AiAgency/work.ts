export interface WorkSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
}

export interface SuccessStory {
  industry: string;
  solution: string;
  result: string;
  image: string;
}

export const workSectionContent: WorkSectionContent = {
  subtitle: "SUCCESS STORIES",
  title: "Driving Digital Excellence Across Industries",
  completedProjects: "100%",
  projectsText: "Client Satisfaction",
};

export const portfolioItems: SuccessStory[] = [
  {
    industry: "Retail Chain",
    solution: "AI demand forecasting",
    result: "35% cost savings",
    image: "/assets/imgs/project/project-7.webp",
  },
  {
    industry: "Logistics Provider",
    solution: "Conversational AI",
    result: "65% faster response time",
    image: "/assets/imgs/project/project-20.webp",
  },
  {
    industry: "Financial Institution",
    solution: "Omni Channel customer Experience",
    result: "100% achieved",
    image: "/assets/imgs/project/project-21.webp",
  },
];
