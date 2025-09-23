export interface IBrand {
  image: string;
}

export interface HeroData {
  bgImage: string;
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
  mainImage: string;
}

const heroData: HeroData = {
    bgImage: "/assets/imgs/shape/shape-22.webp",
    mainImage: "/assets/imgs/shape/shape-54.webp",
    titleSpanOne: "Empowering",
    titleText: "Businesses with AI, Cloud, and",
    titleSpanTwo: "Digital Transformation",
    subtitle: "With 10+ years of expertise, we help businesses scale smarter through AI, automation, and cloud innovation.",
    primaryBtnText: "Book a Consultation",
    primaryBtnLink: "/contact",
    secondaryBtnText: "Explore Our Services",
    secondaryBtnLink: "#services",
    brandTitle: "Trusted by 300+ clients worldwide",
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
