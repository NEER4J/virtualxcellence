import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Header from "@/components/Home/Header";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Services || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Explore Virtual Xcellence's comprehensive technology services including AI automation, cybersecurity, cloud infrastructure, business transformation, and fractional CTO/CFO services.",
    keywords: [
      "Virtual Xcellence services",
      "AI automation services",
      "cybersecurity solutions",
      "cloud infrastructure",
      "business transformation",
      "fractional CTO",
      "fractional CFO",
      "technology consulting",
      "digital transformation",
      "business process outsourcing",
      "AI consulting",
      "cloud consulting",
      "cybersecurity consulting",
      "technology solutions",
      "digital solutions",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Services Page",
    },
  };

  return generateSeoMetadata('/services', fallbackMetadata);
}

const ServicesPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb
          title="Our Services"
          subTitle="Virtual Xcellence"
          pageName="SERVICES"
          subtitle=""
          subtext="Comprehensive technology solutions to transform your business with AI, automation, cloud infrastructure, and expert consulting services."
        />
        
        <section className="services-overview-section section-spacing">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="services-content">
                  
                  {/* Introduction */}
                  <div className="services-intro mb-5">
                    <h2 className="section-title mb-4">Transform Your Business with Technology</h2>
                    <p className="mb-3">
                      At Virtual Xcellence, we provide comprehensive technology solutions to help organizations 
                      transform their operations, improve efficiency, and drive growth. Our expert team delivers 
                      cutting-edge solutions across multiple domains.
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="services-grid">
                    <div className="row">
                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">AI & Automation</h3>
                          <p className="service-description">
                            Leverage artificial intelligence and automation to streamline processes and improve efficiency.
                          </p>
                          <a href="/services/ai-automation" className="service-link">Learn More</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">Cybersecurity</h3>
                          <p className="service-description">
                            Protect your digital assets with comprehensive cybersecurity solutions and best practices.
                          </p>
                          <a href="/services/cybersecurity" className="service-link">Learn More</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">Development</h3>
                          <p className="service-description">
                            Custom software development and digital solutions tailored to your business needs.
                          </p>
                          <a href="/services/development" className="service-link">Learn More</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">Consultation</h3>
                          <p className="service-description">
                            Expert technology consulting to guide your digital transformation journey.
                          </p>
                          <a href="/services/consultation" className="service-link">Learn More</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">Fractional CTO</h3>
                          <p className="service-description">
                            Access experienced CTO expertise on a part-time basis to drive your technology strategy.
                          </p>
                          <a href="/services/fractional-cto" className="service-link">Learn More</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">Fractional CFO</h3>
                          <p className="service-description">
                            Strategic financial leadership and analysis to optimize your business performance.
                          </p>
                          <a href="/services/fractional-cfo" className="service-link">Learn More</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">Business Transformation</h3>
                          <p className="service-description">
                            Complete business process transformation to modernize your operations.
                          </p>
                          <a href="/services/business-transformation" className="service-link">Learn More</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">Cloud Infrastructure</h3>
                          <p className="service-description">
                            Scalable cloud solutions to modernize your infrastructure and reduce costs.
                          </p>
                          <a href="/services/cloud-infrastructure" className="service-link">Learn More</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <h3 className="service-title">Business Process Outsourcing</h3>
                          <p className="service-description">
                            Streamline operations with our comprehensive business process outsourcing services.
                          </p>
                          <a href="/services/business-process-outsourcing" className="service-link">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="services-cta mt-5">
                    <div className="cta-content text-center">
                      <h3 className="cta-title">Ready to Transform Your Business?</h3>
                      <p className="cta-description">
                        Contact us today to discuss how our services can help your organization achieve its goals.
                      </p>
                      <a href="/contact" className="btn btn-primary">Get Started</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterSection 
          ctaHeading="Ready to transform your business with technology?"
          buttonLabel="Contact Us"
          buttonLink="/contact"
        />
      </main>
    </div>
  );
};

export default ServicesPage;
