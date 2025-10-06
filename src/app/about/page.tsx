import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import AboutSection from "@/components/AiAgency/AboutSection";
import VisionMissionSection from "@/components/About/VisionMissionSection";
import LifeAtVXSection from "@/components/About/LifeAtVXSection";
import InnovationSection from "@/components/About/InnovationSection";
import VideoSection from "@/components/About/VideoSection";
import CoreValuesSection from "@/components/About/CoreValuesSection";
import JourneySection from "@/components/About/JourneySection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import FooterSection from "@/components/Home/FooterSection";
import { createPageMetadata } from "@/lib/page-seo";

// component data
import videoData from "@/constant/AiAgency/About/video";
import textSliderData from "@/constant/AiAgency/text-slider";

// Dynamic SEO metadata - will use database data if available, fallback to defaults
export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata('/about', {
    title: "About Us || Virtual Xcellence - AI, Cloud & Digital Transformation Solutions",
    description: "Explore the About Us page of Virtual Xcellence – a modern, high-performance agency template built with Next.js. Meet the team, learn our mission, and discover why Virtual Xcellence is trusted by creative professionals and businesses.",
    keywords: [
      "Virtual Xcellence About Us",
      "NextJS about page",
      "agency template",
      "digital agency",
      "creative team template",
      "business website template",
      "responsive NextJS template",
      "modern agency design",
      "SEO friendly template",
      "professional web agency",
      "agency team page",
      "company profile",
      "NextJS clean UI",
      "startup website",
      "web design agency",
      "agency portfolio",
      "fast NextJS website",
      "customizable template",
      "about page design",
      "Virtual Xcellence template",
    ],
    ogImage: "https://virtualxcellence.com/about-og.jpg",
    canonicalUrl: "https://virtualxcellence.com/about"
  });
}

const AboutPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      
        <main>
          <Breadcrumb 
            title="ABOUT" 
            subTitle="Your Trusted Partner in Digital Transformation and Technology Innovation" 
            pageName="ABOUT"
            subtext="Headquartered in Ontario, Canada, Virtual Xcellence has been helping organizations for over a decade to innovate, automate, and transform with cutting-edge digital solutions. We specialize in delivering comprehensive technology solutions that drive business growth, enhance operational efficiency, and create sustainable competitive advantages in today's rapidly evolving digital landscape."
          />
          <AboutSection />
          <VideoSection data={videoData} />
          <VisionMissionSection />
          <LifeAtVXSection />
          <InnovationSection />
          <CoreValuesSection />
          <TextSliderSection data={textSliderData} />
          <JourneySection />
          <FooterSection />
        </main>
      
    </div>
  );
};
export default AboutPage;

