import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import AboutSection from "@/components/DigitalAgency/AboutSection";
import VideoSection from "@/components/DigitalAgency/About/VideoSection";
import BrandSection from "@/components/DigitalAgency/BrandSection";
import TeamsSection from "@/components/DigitalAgency/TeamsSection";
import TextSliderSection from "@/components/DigitalAgency/TextSliderSection";
import BlogSection from "@/components/DigitalAgency/BlogSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

// component data
import aboutData from "@/constant/DigitalAgency/about";
import videoData from "@/constant/DigitalAgency/About/video";
import brandData from "@/constant/DigitalAgency/brand";
import teamData from "@/constant/DigitalAgency/teams";
import textSliderData from "@/constant/DigitalAgency/textSlider";
import blogData from "@/constant/DigitalAgency/blog";
import footerData from "@/constant/DigitalAgency/footer";

export const metadata: Metadata = {
  title: "About Us || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Explore the About Us page of Virtual Xcellence – a modern, high-performance agency template built with Next.js. Meet the team, learn our mission, and discover why Virtual Xcellence is trusted by creative professionals and businesses.",
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
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "About Page",
  },
};


const AboutPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb title="ABOUT" subTitle="Agency" pageName="ABOUT AGENCY" />
          <AboutSection className="page-about" data={aboutData} />
          <VideoSection data={videoData}/>
          <BrandSection data={brandData} />
          <TeamsSection data={teamData} />
          <TextSliderSection data={textSliderData} />
          <BlogSection data={blogData} />
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;
