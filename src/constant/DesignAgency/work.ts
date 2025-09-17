export interface IProject {
  title: string;
  image: string;
  tags: string[];
  link: string;
}
export interface WorkData {
  subtitle: string;
  title: string;
  description: string;
  projects: IProject[];
}
const workData: WorkData = {
  subtitle: "OUR PORTFOLIO",
  title: "Experience the Virtual Xcellence effect",
  description:
    "Our portfolio is a testament to the bold ideas and artistic passion that define Virtual Xcellence.",
  projects: [
    {
      title: "Vision and innovation",
      image: "/assets/imgs/project/project-16.webp",
      tags: ["BRANDING", "PRODUCT"],
      link: "/design-agency/portfolio-details",
    },
    {
      title: "Vision and innovation",
      image: "/assets/imgs/project/project-17.webp",
      tags: ["BRANDING", "PRODUCT"],
      link: "/design-agency/portfolio-details",
    },
    {
      title: "Vision and innovation",
      image: "/assets/imgs/project/project-18.webp",
      tags: ["BRANDING", "PRODUCT"],
      link: "/design-agency/portfolio-details",
    },
    {
      title: "Vision and innovation",
      image: "/assets/imgs/project/project-16.webp",
      tags: ["BRANDING", "PRODUCT"],
      link: "/design-agency/portfolio-details",
    },
    {
      title: "Vision and innovation",
      image: "/assets/imgs/project/project-17.webp",
      tags: ["BRANDING", "PRODUCT"],
      link: "/design-agency/portfolio-details",
    },
    {
      title: "Vision and innovation",
      image: "/assets/imgs/project/project-18.webp",
      tags: ["BRANDING", "PRODUCT"],
      link: "/design-agency/portfolio-details",
    },
  ],
};
export default workData;
