import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import WorkSection from "@/components/AiAgency/WorkSection";
import FooterSection from "@/components/AiAgency/FooterSection";
import Header from "@/components/AiAgency/common/Header";


// all data 
import footerData from "@/constant/AiAgency/footer";

export const metadata: Metadata = {
  title: "Portfolio || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Showcase your creative work and projects with the Virtual Xcellence Portfolio template. Designed to highlight your skills, case studies, and achievements with a modern, responsive, and SEO-friendly Next.js layout.",
  keywords: [
    "Virtual Xcellence portfolio page",
    "NextJS portfolio template",
    "creative portfolio website",
    "project showcase",
    "responsive portfolio design",
    "SEO optimized portfolio",
    "digital agency portfolio",
    "startup portfolio",
    "professional portfolio layout",
    "case studies showcase",
    "frontend developer portfolio",
    "creative work display",
    "NextJS personal portfolio",
    "modern portfolio website",
    "portfolio landing page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      
        <main>
          <Breadcrumb
            title="AGENCY"
            subTitle="Portfolio"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkSection all={true} type="v2"/>
        </main>
        <FooterSection data={footerData}/>
      
    </div>
  );
};
export default Home;

