import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";
import { createPageMetadata } from "@/lib/page-seo";
import CareersSection from "@/components/Careers/CareersSection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import textSliderData from "@/constant/AiAgency/text-slider";

// Dynamic SEO metadata
export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata('/careers', {
    title: "Careers || Virtual Xcellence - Join Our Team",
    description: "Explore exciting career opportunities at Virtual Xcellence. Join our team of innovative professionals working on cutting-edge AI, cloud, and digital transformation solutions. Discover open positions and apply today.",
    keywords: [
      "careers",
      "jobs",
      "employment",
      "Virtual Xcellence careers",
      "AI jobs",
      "cloud jobs",
      "tech careers",
      "remote jobs",
      "software engineering",
      "data science",
      "cloud architecture",
      "digital transformation",
      "technology careers",
      "Canada tech jobs",
      "engineering positions",
      "consulting careers",
      "innovation jobs",
      "startup careers",
      "tech company jobs",
      "professional opportunities"
    ],
    ogImage: "https://virtualxcellence.com/careers-og.jpg",
    canonicalUrl: "https://virtualxcellence.com/careers"
  });
}

const CareersPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb 
          title="We are hiring!" 
          subTitle="Join Our Team of Innovators" 
          pageName="CAREERS"
          subtext="At Virtual Xcellence, we're building the future of technology. Join our team of passionate professionals who are transforming businesses through AI, cloud solutions, and digital innovation. Discover exciting career opportunities and be part of our mission to drive technological excellence."
        />
        <CareersSection />
        <TextSliderSection data={textSliderData} />
        <FooterSection />
      </main>
    </div>
  );
};

export default CareersPage;
