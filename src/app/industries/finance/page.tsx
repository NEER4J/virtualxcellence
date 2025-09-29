import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import IndustriesFaqSection from "@/components/Industries/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Financial Services Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Revolutionize financial services with Virtual Xcellence. Fintech solutions, digital banking platforms, payment systems, and financial technology consulting for modern financial institutions.",
    keywords: [
      "Virtual Xcellence financial services",
      "fintech solutions",
      "digital banking platforms",
      "payment processing systems",
      "financial technology consulting",
      "banking software development",
      "financial data analytics",
      "regulatory compliance solutions",
      "blockchain financial services",
      "mobile banking apps",
      "financial cybersecurity",
      "trading platform development",
      "wealth management software",
      "insurance technology",
      "financial AI solutions",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Financial Services Industry Page",
    },
  };

  return generateSeoMetadata('/industries/financial-services', fallbackMetadata);
}

const FinancialServicesPage = (): ReactElement => {
  // FAQ Data for Financial Services
  const faqData = [
    {
      question: "How do you ensure PCI-DSS compliance in financial solutions?",
      answer: "All our financial solutions are built with PCI-DSS compliance as a core requirement, including secure payment processing, data encryption, and regular security audits.",
    },
    {
      question: "Can you integrate with existing banking core systems?",
      answer: "Yes, we have extensive experience integrating with major banking core systems and can work with your existing infrastructure.",
    },
    {
      question: "Do you provide mobile banking app development?",
      answer: "Absolutely, we develop secure, user-friendly mobile banking applications with features like account management, payments, and financial planning tools.",
    },
    {
      question: "How do you handle financial data security and compliance?",
      answer: "We implement enterprise-grade security measures including encryption, multi-factor authentication, and compliance with financial regulations like SOX, GDPR, and PCI-DSS.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="FINANCIAL SERVICES"
          subTitle="Revolutionizing Finance Through Technology"
          pageName="FINANCIAL SERVICES"
          subtext="The financial services industry is at the forefront of digital transformation, with fintech innovations reshaping how people and businesses manage money. At Virtual Xcellence, we help financial institutions leverage cutting-edge technology to enhance customer experiences, improve operational efficiency, and ensure regulatory compliance."
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
                      <h2 className="section-title">Financial Technology Solutions</h2>
                    </div>
                  </div>

                  <div className="text-wrapper">
                    <p className="text mb-4">
                      We specialize in developing innovative technology solutions for the financial services industry. Our expertise spans from digital banking platforms to payment processing systems that enhance customer experiences and drive business growth.
                    </p>
                    <p className="text">
                      Our financial solutions are built with security, compliance, and scalability in mind. We help banks, credit unions, fintech startups, and financial institutions modernize their technology infrastructure while maintaining the highest standards of data protection and regulatory compliance.
                    </p>
                  </div>
                </div>
                
                <div className="section-content fade-anim" data-direction="left">
                  <div className="image-wrapper">
                    <img 
                      src="/assets/imgs/gallery/image-52.webp" 
                      alt="Financial Technology Solutions" 
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
          sectionTitle="Financial Services Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your financial services with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default FinancialServicesPage;
