import { ReactElement } from "react";
import { Metadata } from "next";
import HeroSection from "@/components/AiAgency/HeroSection";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'
import ServiceSection from "@/components/AiAgency/ServiceSection";
import ServiceArea5Section from "@/components/AiAgency/ServiceArea5Section";
import WhyChooseUsSection from "@/components/AiAgency/WhyChooseUsSection";
import WhyChooseUsSecondRow from "@/components/AiAgency/WhyChooseUsSecondRow";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import WorkSection from "@/components/AiAgency/WorkSection";
import DigitalAboutSection from "@/components/DigitalAgency/AboutSection";
import DigitalWorkSection from "@/components/DigitalAgency/WorkSection";
import ClientsSection from "@/components/AiAgency/ClientsSection";
import FooterSection from "@/components/Home/FooterSection";
import { createRuntimePageMetadata } from "@/lib/runtime-seo";

// Runtime Dynamic SEO metadata - updates immediately without rebuild
export async function generateMetadata(): Promise<Metadata> {
  return createRuntimePageMetadata('/', {
    title: "Virtual Xcellence - AI, Cloud & Digital Transformation Solutions",
    description: "Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation. With 21+ years of experience, we deliver solutions that create measurable impact and long-term growth.",
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
    ogImage: "https://virtualxcellence.com/og-home.jpg",
    canonicalUrl: "https://virtualxcellence.com"
  });
}

// all data 
import heroData from "@/constant/AiAgency/hero";
import textSliderData from "@/constant/AiAgency/text-slider";
import testimonialData from "@/constant/AiAgency/testimonial";
import digitalWorkData from "@/constant/DigitalAgency/work";


const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-ai-agency">
      <main>
        <HeroSection data={heroData}/>
        <TextSliderSection data={textSliderData}/>
        <DigitalAboutSection />
        <ServiceSection />
        <ServiceArea5Section />
        <WorkSection />
        <DigitalWorkSection pageInnerSlider={true} data={digitalWorkData} />
        <WhyChooseUsSection />
        <WhyChooseUsSecondRow />
        {/* <TestimonialSlider data={testimonialData}/> */}
        <ClientsSection />
      </main>
      <FooterSection />
    </div>
  );
};
export default Home;

