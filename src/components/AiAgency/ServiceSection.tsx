"use client";
import Link from "next/link";
import { Container } from "react-bootstrap";

const ServiceSection: React.FC = () => {
  const serviceSectionData = {
    subtitle: "Our Services",
    title: "Comprehensive Technology Solutions",
    exploreLink: "/ai-agency/services",
  };

  const servicesData = [ 
    {
      id: "ai-automation",
      title: "AI & Automation",
      image: "/assets/imgs/home-pages/services/ai.jpg",
      description:
        "Conversational AI, predictive analytics, and RPA solutions. Leverage artificial intelligence to automate processes, gain insights, and enhance customer experiences.",
      detailLink: "/services/ai-automation",
    },
    {
      id: "integration-and-professional-services",
      title: "Integration & Professional Services",
      image: "/assets/imgs/home-pages/services/integration.jpg",
      description:
        "Expert integration and professional services for Zoho, OpenAI, DataDog, Google Gemma 2, Meta AI, Command R+, and BLOOM platforms. Seamless AI integration and professional consulting.",
      detailLink: "/services/integration-and-professional-services",
    },
    {
      id: "consultation",
      title: "Consultation",
      image: "/assets/imgs/home-pages/services/consultation.jpg",
      description:
        "Strategic technology advisory to help you make informed decisions. Our experts provide guidance on technology roadmaps, digital transformation, and innovation strategies.",
      detailLink: "/services/consultation",
    },
    {
      id: "fractional-cto",
      title: "Fractional CTO",
      image: "/assets/imgs/home-pages/services/cto.jpg",
      description:
        "On-demand technology leadership for growing companies. Get access to senior-level technical expertise without the full-time commitment, perfect for scaling your tech operations.",
      detailLink: "/services/fractional-cto",
    },
    {
      id: "development",
      title: "Development",
      image: "/assets/imgs/home-pages/services/development.jpg",
      description:
        "Custom software, web & mobile solutions tailored to your business needs. We build scalable, secure, and user-friendly applications that drive growth and efficiency.",
      detailLink: "/services/development",
    },
    {
      id: "fractional-cfo",
      title: "Fractional CFO",
      image: "/assets/imgs/home-pages/services/cfo.jpg",
      description:
        "Financial strategy & transformation services. We help optimize your financial operations, implement cost-effective solutions, and drive sustainable business growth.",
      detailLink: "/services/fractional-cfo",
    },
    {
      id: "business-transformation",
      title: "Business Transformation",
      image: "/assets/imgs/home-pages/services/business-transformation-min.jpg",
      description:
        "Process redesign, automation, and AI integration to modernize your operations. We help streamline workflows, reduce costs, and improve overall business efficiency.",
      detailLink: "/services/business-transformation",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      image: "/assets/imgs/home-pages/services/cybersecurity.jpg",
      description:
        "Comprehensive risk management and data protection solutions. We safeguard your digital assets with advanced security measures and compliance frameworks.",
      detailLink: "/services/cybersecurity",
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud & Infrastructure",
      image: "/assets/imgs/home-pages/services/cloud-infrastructure.jpg",
      description:
        "Cloud migration, DevOps, and managed services for scalable infrastructure. We help you transition to the cloud and maintain reliable, secure, and cost-effective systems.",
      detailLink: "/services/cloud-infrastructure",
    },
    {
      id: "business-process-outsourcing",
      title: "BPO & Support Services",
      image: "/assets/imgs/home-pages/services/bpo-min.jpg",
      description:
        "Transform your operations with scalable, cost-effective outsourcing. Customer support, back-office operations, sales & lead generation, and AI-powered solutions.",
      detailLink: "/services/business-process-outsourcing",
    },
  ];

  return (
    <div className="service-area-4" >
      <div className="service-area-4-inner section-spacing" id="services">
        <Container>
          <div className="section-header" >
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {serviceSectionData?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">
                  {serviceSectionData?.title}
                </h2>
              </div>
            </div>
       
          </div>
        </Container>

        <div className="services-wrapper-box fade-anim" suppressHydrationWarning={true}>
          <Container>
            <div className="services-wrapper">
              <div className="row">
                {servicesData?.map((service) => (
                  <div key={service?.id} className="col-lg-4 col-md-6 mb-4 home-services-box">
                    <div className="service-box-4 h-100">
                      <div className="thumb">
                        <img
                          src={service?.image}
                          alt={service?.title || "Service image"}
                        />
                      </div>
                       <div className="content">
                         <h3 className="title">{service?.title}</h3>
                         <div className="t-btn-group">
                          <Link
                            className="t-btn t-btn-circle"
                            href={service?.detailLink || "#"}
                          >
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                          <Link
                            className="t-btn t-btn-primary"
                            href={service?.detailLink || "#"}
                          >
                            View Details
                          </Link>
                          <Link
                            className="t-btn t-btn-circle"
                            href={service?.detailLink || "#"}
                          >
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
