import { ReactElement } from "react";
import { Metadata } from "next";
import { createRuntimePageMetadata } from '@/lib/runtime-seo'
import Header from "@/components/Home/Header";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  return createRuntimePageMetadata('/services', {
    title: "Services || Virtual Xcellence - AI, Automation & Business Transformation",
    description: "Explore Virtual Xcellence's comprehensive technology services including AI automation, cybersecurity, cloud infrastructure, business transformation, and fractional CTO/CFO services.",
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
    canonicalUrl: "https://virtualxcellence.com/services"
  });
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
                  
                  {/* Services Grid */}
                  <div className="services-grid">
                    <div className="row">
                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/ai.jpg" alt="AI & Automation" />
                          </div>
                          <h3 className="service-title">AI & Automation</h3>
                          <p className="service-description">
                            Conversational AI, predictive analytics, and RPA solutions. Leverage artificial intelligence to automate processes, gain insights, and enhance customer experiences.
                          </p>
                          <ul className="service-features">
                            <li>Conversational AI solutions</li>
                            <li>Predictive analytics and insights</li>
                            <li>Robotic Process Automation (RPA)</li>
                          </ul>
                          <a href="/services/ai-automation" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/cybersecurity.jpg" alt="Cybersecurity" />
                          </div>
                          <h3 className="service-title">Cybersecurity</h3>
                          <p className="service-description">
                            Comprehensive risk management and data protection solutions. We safeguard your digital assets with advanced security measures and compliance frameworks.
                          </p>
                          <ul className="service-features">
                            <li>Risk management and assessment</li>
                            <li>Data protection and compliance</li>
                            <li>Advanced security frameworks</li>
                          </ul>
                          <a href="/services/cybersecurity" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/development.jpg" alt="Development" />
                          </div>
                          <h3 className="service-title">Development</h3>
                          <p className="service-description">
                            Custom software, web & mobile solutions tailored to your business needs. We build scalable, secure, and user-friendly applications that drive growth and efficiency.
                          </p>
                          <ul className="service-features">
                            <li>Custom web and mobile applications</li>
                            <li>Scalable and secure solutions</li>
                            <li>User-friendly interface design</li>
                          </ul>
                          <a href="/services/development" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/consultation.jpg" alt="Consultation" />
                          </div>
                          <h3 className="service-title">Consultation</h3>
                          <p className="service-description">
                            Strategic technology advisory to help you make informed decisions. Our experts provide guidance on technology roadmaps, digital transformation, and innovation strategies.
                          </p>
                          <ul className="service-features">
                            <li>Strategic technology advisory</li>
                            <li>Technology roadmap planning</li>
                            <li>Digital transformation guidance</li>
                          </ul>
                          <a href="/services/consultation" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/cto.jpg" alt="Fractional CTO" />
                          </div>
                          <h3 className="service-title">Fractional CTO</h3>
                          <p className="service-description">
                            On-demand technology leadership for growing companies. Get access to senior-level technical expertise without the full-time commitment, perfect for scaling your tech operations.
                          </p>
                          <ul className="service-features">
                            <li>On-demand technology leadership</li>
                            <li>Senior-level technical expertise</li>
                            <li>Scaling tech operations</li>
                          </ul>
                          <a href="/services/fractional-cto" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/cfo.jpg" alt="Fractional CFO" />
                          </div>
                          <h3 className="service-title">Fractional CFO</h3>
                          <p className="service-description">
                            Financial strategy & transformation services. We help optimize your financial operations, implement cost-effective solutions, and drive sustainable business growth.
                          </p>
                          <ul className="service-features">
                            <li>Financial strategy and transformation</li>
                            <li>Cost-effective solutions</li>
                            <li>Sustainable business growth</li>
                          </ul>
                          <a href="/services/fractional-cfo" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/business-transformation-min.jpg" alt="Business Transformation" />
                          </div>
                          <h3 className="service-title">Business Transformation</h3>
                          <p className="service-description">
                            Process redesign, automation, and AI integration to modernize your operations. We help streamline workflows, reduce costs, and improve overall business efficiency.
                          </p>
                          <ul className="service-features">
                            <li>Process redesign and automation</li>
                            <li>AI integration and modernization</li>
                            <li>Workflow optimization</li>
                          </ul>
                          <a href="/services/business-transformation" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/cloud-infrastructure.jpg" alt="Cloud Infrastructure" />
                          </div>
                          <h3 className="service-title">Cloud & Infrastructure</h3>
                          <p className="service-description">
                            Cloud migration, DevOps, and managed services for scalable infrastructure. We help you transition to the cloud and maintain reliable, secure, and cost-effective systems.
                          </p>
                          <ul className="service-features">
                            <li>Cloud migration and DevOps</li>
                            <li>Managed services and support</li>
                            <li>Reliable and secure systems</li>
                          </ul>
                          <a href="/services/cloud-infrastructure" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/bpo-min.jpg" alt="Business Process Outsourcing" />
                          </div>
                          <h3 className="service-title">BPO & Support Services</h3>
                          <p className="service-description">
                            Transform your operations with scalable, cost-effective outsourcing. Customer support, back-office operations, sales & lead generation, and AI-powered solutions.
                          </p>
                          <ul className="service-features">
                            <li>Customer support and service</li>
                            <li>Back-office operations</li>
                            <li>Sales and lead generation</li>
                          </ul>
                          <a href="/services/business-process-outsourcing" className="service-link">View Details</a>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-card">
                          <div className="service-card-icon">
                            <img src="/assets/imgs/home-pages/services/integration.jpg" alt="Integration & Professional Services" />
                          </div>
                          <h3 className="service-title">Integration & Professional Services</h3>
                          <p className="service-description">
                            Expert integration and professional services for Zoho, OpenAI, DataDog, Google Gemma 2, Meta AI, Command R+, and BLOOM platforms. Seamless AI integration and professional consulting.
                          </p>
                          <ul className="service-features">
                            <li>AI platform integration</li>
                            <li>Professional consulting services</li>
                            <li>Seamless system integration</li>
                          </ul>
                          <a href="/services/integration-and-professional-services" className="service-link">View Details</a>
                        </div>
                      </div>
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
