import { ReactElement } from "react";
import { Metadata } from "next";
import { createRuntimePageMetadata } from '@/lib/runtime-seo'
import Header from "@/components/Home/Header";
import { 
  Heart, 
  CreditCard, 
  Factory, 
  ShoppingCart, 
  GraduationCap 
} from "lucide-react";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  return createRuntimePageMetadata('/industries', {
    title: "Industries || Virtual Xcellence - Healthcare, Finance, Manufacturing & More",
    description: "Explore Virtual Xcellence's industry-specific technology solutions for Healthcare, Finance, Manufacturing, Retail & E-commerce, and Education sectors.",
    keywords: [
      "Virtual Xcellence industries",
      "healthcare technology solutions",
      "fintech and banking solutions",
      "manufacturing automation",
      "retail e-commerce platforms",
      "education technology",
      "industry-specific solutions",
      "healthcare IT",
      "financial technology",
      "industrial automation",
      "digital commerce",
      "EdTech solutions",
    ],
    canonicalUrl: "https://virtualxcellence.com/industries"
  });
}

const IndustriesPage = (): ReactElement => {
  const industriesData = [
    {
      id: "healthcare",
      title: "Healthcare",
      icon: Heart,
      description: "Transform healthcare delivery with cutting-edge technology solutions. We provide comprehensive healthcare IT services including electronic health records, telemedicine platforms, and AI-powered diagnostic tools.",
      features: [
        "Electronic Health Records (EHR) systems",
        "Telemedicine and remote patient monitoring",
        "AI-powered diagnostic and treatment tools"
      ],
      link: "/industries/healthcare"
    },
    {
      id: "finance",
      title: "Finance",
      icon: CreditCard,
      description: "Revolutionize financial services with advanced fintech solutions. Our expertise includes digital banking platforms, payment processing systems, and regulatory compliance automation.",
      features: [
        "Digital banking and payment solutions",
        "Regulatory compliance automation",
        "Risk management and fraud detection"
      ],
      link: "/industries/finance"
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: Factory,
      description: "Optimize manufacturing operations with Industry 4.0 technologies. We deliver IoT solutions, predictive maintenance systems, and smart factory automation to enhance productivity and efficiency.",
      features: [
        "Industrial IoT and smart sensors",
        "Predictive maintenance systems",
        "Smart factory automation"
      ],
      link: "/industries/manufacturing"
    },
    {
      id: "retail",
      title: "Retail & E-commerce",
      icon: ShoppingCart,
      description: "Enhance customer experience with innovative retail technology. Our solutions include e-commerce platforms, inventory management systems, and AI-powered customer analytics.",
      features: [
        "E-commerce platform development",
        "Inventory and supply chain management",
        "AI-powered customer analytics"
      ],
      link: "/industries/retail"
    },
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      description: "Transform education with modern EdTech solutions. We create learning management systems, virtual classrooms, and personalized learning platforms to enhance educational outcomes.",
      features: [
        "Learning Management Systems (LMS)",
        "Virtual classroom and online learning",
        "Personalized learning platforms"
      ],
      link: "/industries/education"
    }
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb
          title="Our Industries"
          subTitle="Virtual Xcellence"
          pageName="INDUSTRIES"
          subtitle=""
          subtext="Industry-specific technology solutions designed to transform businesses across Healthcare, Finance, Manufacturing, Retail, and Education sectors."
        />
        
        <section className="industries-overview-section section-spacing">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="industries-content">
                  
                  {/* Industries Grid */}
                  <div className="industries-grid">
                    <div className="row">
                      {industriesData.map((industry) => (
                        <div key={industry.id} className="col-md-6 col-lg-4 mb-4">
                          <div className="industry-card">
                            <div className="industry-card-icon">
                              <industry.icon className="industry-icon" />
                            </div>
                            <h3 className="industry-title">{industry.title}</h3>
                            <p className="industry-description">
                              {industry.description}
                            </p>
                            <ul className="industry-features">
                              {industry.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                            <a href={industry.link} className="industry-link">View Details</a>
                          </div>
                        </div>
                      ))}
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

export default IndustriesPage;
