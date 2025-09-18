import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/AiAgency/Header";
import AboutTwoSection from "@/components/AiAgency/AboutTwoSection";
import BlogSection from "@/components/AiAgency/BlogSection";
import FooterSection from "@/components/AiAgency/FooterSection";
import HeroSection from "@/components/AiAgency/HeroSection";
import ProcessSection from "@/components/AiAgency/ProcessSection";
import ServiceSection from "@/components/AiAgency/ServiceSection";
import ServiceArea5Section from "@/components/AiAgency/ServiceArea5Section";
import TeamSection from "@/components/AiAgency/TeamSection";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import WorkSection from "@/components/AiAgency/WorkSection";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";
import DigitalAboutSection from "@/components/DigitalAgency/AboutSection";

export const metadata: Metadata = {
  title: "Virtual Xcellence - AI, Cloud & Digital Transformation Solutions",
  description:
    "Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation. With 10+ years of experience, we deliver solutions that create measurable impact and long-term growth.",
  keywords: [
    "AI solutions",
    "cloud transformation",
    "digital transformation",
    "business automation",
    "technology consulting",
    "AI implementation",
    "cloud migration",
    "business innovation",
    "Canada technology company",
    "enterprise solutions",
    "AI consulting",
    "cloud services",
    "digital strategy",
    "technology consulting",
    "business transformation",
    "AI automation",
    "cloud computing",
    "digital innovation",
    "technology solutions",
    "business growth",
  ],
  creator: "Virtual Xcellence",
  other: {
    developer: "Virtual Xcellence",
    section: "Home",
  },
};

// all data 
import heroData from "@/constant/AiAgency/hero";
import textSliderData from "@/constant/AiAgency/text-slider";
import aboutTwoData from "@/constant/AiAgency/about2";
import processData from "@/constant/AiAgency/process";
import testimonialData from "@/constant/AiAgency/testimonial";
import blogData from "@/constant/AiAgency/blog";
import footerData from "@/constant/AiAgency/footer";


const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-ai-agency">
      <Header />
      <SmoothScroll>
        <main>
          <HeroSection data={heroData}/>
          <TextSliderSection data={textSliderData}/>
          {/* <AboutTwoSection data={aboutTwoData}/> */}
          <DigitalAboutSection />
          <ServiceSection />
          <ServiceArea5Section />
          <WorkSection />
          <TeamSection />
          <ProcessSection data={processData}/>
          <TestimonialSlider data={testimonialData}/>
          <BlogSection data={blogData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;
