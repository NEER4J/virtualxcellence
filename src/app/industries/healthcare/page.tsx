import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import IndustriesFaqSection from "@/components/Industries/FaqSection";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Healthcare Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Transform healthcare delivery with Virtual Xcellence. Digital health solutions, AI-powered diagnostics, patient management systems, and healthcare technology consulting for modern medical practices.",
    keywords: [
      "Virtual Xcellence healthcare",
      "healthcare technology solutions",
      "digital health transformation",
      "AI healthcare applications",
      "patient management systems",
      "healthcare automation",
      "medical software development",
      "healthcare data analytics",
      "telemedicine solutions",
      "HIPAA compliant healthcare tech",
      "healthcare cloud solutions",
      "medical device integration",
      "healthcare cybersecurity",
      "electronic health records",
      "healthcare AI consulting",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Healthcare Industry Page",
    },
  };

  return generateSeoMetadata('/industries/healthcare', fallbackMetadata);
}

const HealthcarePage = (): ReactElement => {
  // FAQ Data for Healthcare
  const faqData = [
    {
      question: "How do you ensure HIPAA compliance in healthcare solutions?",
      answer: "All our healthcare solutions are built with HIPAA compliance as a core requirement, including data encryption, access controls, and audit trails.",
    },
    {
      question: "Can you integrate with existing EHR systems?",
      answer: "Yes, we have extensive experience integrating with major EHR systems like Epic, Cerner, and Allscripts.",
    },
    {
      question: "Do you provide telemedicine platform development?",
      answer: "Absolutely, we develop secure, scalable telemedicine platforms with video conferencing, appointment scheduling, and patient management features.",
    },
    {
      question: "How do you handle healthcare data security?",
      answer: "We implement multi-layered security including encryption, secure APIs, regular security audits, and compliance with healthcare data protection standards.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="HEALTHCARE"
          subTitle="Transforming Healthcare Through Technology"
          pageName="HEALTHCARE"
          subtext="The healthcare industry is undergoing a digital transformation that's improving patient outcomes, streamlining operations, and reducing costs. At Virtual Xcellence, we help healthcare organizations leverage cutting-edge technology to deliver better care and enhance operational efficiency."
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
                      <h2 className="section-title">Healthcare Technology Solutions</h2>
                    </div>
                  </div>

                  <div className="text-wrapper">
                    <p className="text mb-4">
                      We specialize in developing comprehensive technology solutions tailored specifically for the healthcare industry. Our expertise spans from AI-powered diagnostic tools to patient management systems that improve care delivery and operational efficiency.
                    </p>
                    <p className="text">
                      Our healthcare solutions are designed with HIPAA compliance, data security, and interoperability in mind. We help medical practices, hospitals, and healthcare organizations modernize their technology infrastructure while maintaining the highest standards of patient data protection and regulatory compliance.
                    </p>
                  </div>
                </div>
                
                <div className="section-content fade-anim" data-direction="left">
                  <div className="image-wrapper">
                    <img 
                      src="/assets/imgs/gallery/image-52.webp" 
                      alt="Healthcare Technology Solutions" 
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
          sectionTitle="Healthcare Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your healthcare organization with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default HealthcarePage;
