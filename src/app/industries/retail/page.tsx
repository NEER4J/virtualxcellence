import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import IndustriesFaqSection from "@/components/Industries/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Retail & E-commerce Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Transform retail and e-commerce with Virtual Xcellence. Digital commerce platforms, omnichannel solutions, customer experience optimization, and retail technology consulting for modern businesses.",
    keywords: [
      "Virtual Xcellence retail ecommerce",
      "e-commerce platform development",
      "omnichannel retail solutions",
      "digital commerce technology",
      "retail technology consulting",
      "e-commerce software development",
      "customer experience optimization",
      "inventory management systems",
      "payment processing solutions",
      "retail analytics",
      "mobile commerce apps",
      "retail automation",
      "e-commerce cybersecurity",
      "personalization engines",
      "retail AI solutions",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Retail & E-commerce Industry Page",
    },
  };

  return generateSeoMetadata('/industries/retail-ecommerce', fallbackMetadata);
}

const RetailEcommercePage = (): ReactElement => {
  // FAQ Data for Retail & E-commerce
  const faqData = [
    {
      question: "How do you create omnichannel retail experiences?",
      answer: "We develop integrated solutions that connect online and offline channels, providing seamless customer experiences across all touchpoints including web, mobile, and physical stores.",
    },
    {
      question: "Can you integrate with existing e-commerce platforms?",
      answer: "Yes, we have extensive experience integrating with major e-commerce platforms like Shopify, Magento, WooCommerce, and custom solutions to enhance functionality.",
    },
    {
      question: "Do you provide mobile commerce app development?",
      answer: "Absolutely, we develop native and cross-platform mobile commerce applications with features like product catalogs, secure payments, and personalized shopping experiences.",
    },
    {
      question: "How do you handle retail data security and PCI compliance?",
      answer: "We implement comprehensive security measures including PCI-DSS compliance, data encryption, secure payment processing, and regular security audits to protect customer data.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="RETAIL & E-COMMERCE"
          subTitle="Transforming Commerce Through Technology"
          pageName="RETAIL & E-COMMERCE"
          subtext="The retail and e-commerce industry is rapidly evolving with digital technologies reshaping how customers discover, purchase, and interact with brands. At Virtual Xcellence, we help retailers and e-commerce businesses leverage cutting-edge technology to create seamless, personalized shopping experiences."
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
                      <h2 className="section-title">Retail & E-commerce Technology Solutions</h2>
                    </div>
                  </div>

                  <div className="text-wrapper">
                    <p className="text mb-4">
                      We specialize in developing comprehensive technology solutions for the retail and e-commerce industry. Our expertise spans from omnichannel platforms to AI-powered personalization engines that enhance customer engagement and drive sales growth.
                    </p>
                    <p className="text">
                      Our retail solutions are designed to create seamless shopping experiences across all channels, including online stores, mobile apps, and physical locations. We help retailers and e-commerce businesses modernize their technology infrastructure while maintaining the highest standards of security and performance.
                    </p>
                  </div>
                </div>
                
                <div className="section-content fade-anim" data-direction="left">
                  <div className="image-wrapper">
                    <img 
                      src="/assets/imgs/gallery/image-52.webp" 
                      alt="Retail & E-commerce Technology Solutions" 
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
          sectionTitle="Retail & E-commerce Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your retail and e-commerce business with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default RetailEcommercePage;
