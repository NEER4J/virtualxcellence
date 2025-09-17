import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import BlogGridSection from "@/components/CreativeAgency/Blog/BlogGridSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/common/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// all data 
import blogListData from "@/constant/CreativeAgency/blog/BlogGridData";

export const metadata:Metadata = {
  title: "Blog Grid || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Explore a modern blog grid layout showcasing the latest articles, design trends, and development insights from Virtual Xcellence. Perfect for agencies and startups looking for an engaging blog format.",
  keywords: [
    "Virtual Xcellence blog grid",
    "NextJS blog listing",
    "blog grid layout",
    "agency blog design",
    "modern blog page",
    "responsive blog grid",
    "NextJS blog template",
    "digital agency blog",
    "frontend blog layout",
    "creative blog design",
    "startup blog grid",
    "blog post grid",
    "web development blog",
    "SEO friendly blog",
    "blog overview page",
    "NextJS blog listing page",
    "Virtual Xcellence template blog",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Blog Grid Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb title="BLOGS" subTitle="Grid" pageName="BLOGS GRID" />
          <BlogGridSection data={blogListData}/>
        </main>
        <Footer/>
      </SmoothScroll>
    </div>
  );
};
export default Home;
