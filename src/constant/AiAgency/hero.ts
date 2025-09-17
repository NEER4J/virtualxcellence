export interface IBrand {
  image: string;
}

export interface HeroData {
  bgImage: string;
  shape1: string;
  shape2: string;
  titleSpanOne: string;
  titleText: string;
  titleSpanTwo: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  brandTitle: string;
  brands: IBrand[];
}

const heroData: HeroData = {
    bgImage: "/assets/imgs/shape/shape-22.webp",
    shape1: "/assets/imgs/shape/shape-20.webp",
    shape2: "/assets/imgs/shape/shape-21.webp",
    titleSpanOne: "Empowering",
    titleText: "Businesses with AI, Cloud, and",
    titleSpanTwo: "Digital Transformation",
    subtitle: "Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation. With 10+ years of experience, we deliver solutions that create measurable impact and long-term growth.",
    primaryBtnText: "Book a Consultation",
    primaryBtnLink: "/ai-agency/contact",
    secondaryBtnText: "Explore Our Services",
    secondaryBtnLink: "/ai-agency/services",
    brandTitle: "300+ Trusted Clients Over Worldwide",
    brands: [
      { image: "/assets/imgs/brand/brand-10.webp" },
      { image: "/assets/imgs/brand/brand-11.webp" },
      { image: "/assets/imgs/brand/brand-12.webp" },
      { image: "/assets/imgs/brand/brand-13.webp" },
      { image: "/assets/imgs/brand/brand-14.webp" },
      { image: "/assets/imgs/brand/brand-10.webp" },
      { image: "/assets/imgs/brand/brand-11.webp" },
      { image: "/assets/imgs/brand/brand-12.webp" },
      { image: "/assets/imgs/brand/brand-13.webp" },
      { image: "/assets/imgs/brand/brand-14.webp" },
    ],
  };  
  
  export default heroData;
