import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import IndustriesFaqSection from "@/components/Industries/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Manufacturing Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Transform manufacturing with Virtual Xcellence. Industry 4.0 solutions, IoT integration, smart factory automation, and manufacturing technology consulting for modern production facilities.",
    keywords: [
      "Virtual Xcellence manufacturing",
      "Industry 4.0 solutions",
      "smart factory automation",
      "IoT manufacturing",
      "manufacturing technology consulting",
      "production optimization",
      "predictive maintenance",
      "manufacturing software development",
      "supply chain automation",
      "quality control systems",
      "manufacturing data analytics",
      "robotic process automation",
      "manufacturing cybersecurity",
      "digital twin solutions",
      "manufacturing AI",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Manufacturing Industry Page",
    },
  };

  return generateSeoMetadata('/industries/manufacturing', fallbackMetadata);
}

const ManufacturingPage = (): ReactElement => {
  // FAQ Data for Manufacturing
  const faqData = [
    {
      question: "How do you implement Industry 4.0 solutions in manufacturing?",
      answer: "We help manufacturers implement Industry 4.0 by integrating IoT sensors, AI-powered analytics, and automation systems to create smart, connected production facilities.",
    },
    {
      question: "Can you integrate with existing manufacturing equipment?",
      answer: "Yes, we specialize in integrating new technology solutions with legacy manufacturing equipment and systems to maximize your existing investments.",
    },
    {
      question: "Do you provide predictive maintenance solutions?",
      answer: "Absolutely, we develop AI-powered predictive maintenance systems that help prevent equipment failures and optimize maintenance schedules.",
    },
    {
      question: "How do you ensure manufacturing data security?",
      answer: "We implement comprehensive security measures including network segmentation, data encryption, and access controls to protect your manufacturing data and intellectual property.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="MANUFACTURING"
          subTitle="Revolutionizing Production Through Technology"
          pageName="MANUFACTURING"
          subtext="The manufacturing industry is experiencing a digital revolution with Industry 4.0 technologies transforming how products are designed, produced, and delivered. At Virtual Xcellence, we help manufacturers leverage smart technologies to improve efficiency, reduce costs, and enhance product quality."
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
                      <h2 className="section-title">Manufacturing Technology Solutions</h2>
                    </div>
                  </div>

                  <div className="text-wrapper">
                    <p className="text mb-4">
                      We specialize in developing cutting-edge technology solutions for the manufacturing industry. Our expertise spans from IoT integration to AI-powered predictive analytics that optimize production processes and improve operational efficiency.
                    </p>
                    <p className="text">
                      Our manufacturing solutions are designed to help companies embrace Industry 4.0 principles, including smart factories, predictive maintenance, and automated quality control. We help manufacturers modernize their operations while maintaining the highest standards of security and reliability.
                    </p>
                  </div>
                </div>
                
                <div className="section-content fade-anim" data-direction="left">
                  <div className="image-wrapper">
                    <img 
                      src="/assets/imgs/gallery/image-52.webp" 
                      alt="Manufacturing Technology Solutions" 
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
          sectionTitle="Manufacturing Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your manufacturing operations with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ManufacturingPage;
