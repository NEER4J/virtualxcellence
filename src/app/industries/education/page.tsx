import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import IndustriesFaqSection from "@/components/Industries/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Education Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Transform education with Virtual Xcellence. EdTech solutions, learning management systems, virtual classrooms, and educational technology consulting for modern learning institutions.",
    keywords: [
      "Virtual Xcellence education",
      "EdTech solutions",
      "learning management systems",
      "virtual classroom platforms",
      "educational technology consulting",
      "online learning platforms",
      "student information systems",
      "educational software development",
      "learning analytics",
      "educational AI solutions",
      "school management systems",
      "educational cybersecurity",
      "digital learning tools",
      "educational data analytics",
      "e-learning platforms",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Education Industry Page",
    },
  };

  return generateSeoMetadata('/industries/education', fallbackMetadata);
}

const EducationPage = (): ReactElement => {
  // FAQ Data for Education
  const faqData = [
    {
      question: "How do you create engaging virtual learning experiences?",
      answer: "We develop interactive virtual classroom platforms with features like video conferencing, real-time collaboration tools, and AI-powered learning analytics to enhance student engagement.",
    },
    {
      question: "Can you integrate with existing school management systems?",
      answer: "Yes, we have extensive experience integrating with major school management systems and can work with your existing infrastructure to create seamless workflows.",
    },
    {
      question: "Do you provide mobile learning app development?",
      answer: "Absolutely, we develop mobile learning applications that enable students to access course materials, participate in discussions, and complete assignments on any device.",
    },
    {
      question: "How do you ensure student data privacy and FERPA compliance?",
      answer: "We implement comprehensive data protection measures including FERPA compliance, data encryption, access controls, and regular security audits to protect student information.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="EDUCATION"
          subTitle="Transforming Learning Through Technology"
          pageName="EDUCATION"
          subtext="The education industry is undergoing a digital transformation that's revolutionizing how students learn and educators teach. At Virtual Xcellence, we help educational institutions leverage cutting-edge technology to create engaging, accessible, and effective learning experiences."
        />
        
        {/* Main Content Section */}
        <section className="service-area-6">
          <div className="container">
            <div className="service-area-6-inner section-spacing">
              <div className="section-content-wrapper">
                
                <div
                  className="services-wrapper-box fade-anim"
                  data-direction="right"
                >
                  <div className="section-title-wrapper">
                    <div className="title-wrapper">
                      <h2 className="section-title">Education Technology Solutions</h2>
                    </div>
                  </div>

                  <div className="text-wrapper">
                    <p className="text mb-4">
                      We specialize in developing innovative technology solutions for the education industry. Our expertise spans from learning management systems to AI-powered educational tools that enhance teaching effectiveness and student outcomes.
                    </p>
                    <p className="text">
                      Our education solutions are designed to support both traditional and online learning environments, providing educators with powerful tools to create engaging content and track student progress. We help educational institutions modernize their technology infrastructure while maintaining the highest standards of data security and accessibility.
                    </p>
                  </div>
                </div>
                
                <div className="section-content fade-anim" data-direction="left">
                  <div className="image-wrapper">
                    <img 
                      src="/assets/imgs/gallery/image-52.webp" 
                      alt="Education Technology Solutions" 
                      className="fade-anim"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <IndustriesFaqSection 
          faqData={faqData}
          type={2}
          sectionTitle="Education Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your educational institution with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default EducationPage;
