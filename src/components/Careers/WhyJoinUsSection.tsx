import { ReactElement } from "react";
import { 
  Users, 
  Heart, 
  TrendingUp, 
  Globe, 
  Award, 
  Coffee,
  Lightbulb,
  Shield
} from "lucide-react";

const WhyJoinUsSection = (): ReactElement => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Team",
      description: "Work with talented professionals who share your passion for innovation and excellence."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to help you maintain a healthy work-life balance."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression paths for your professional development."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Contribute to projects that make a real difference in how businesses operate worldwide."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Your contributions are valued and recognized through various reward and recognition programs."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Great Culture",
      description: "Join a supportive, inclusive culture that encourages creativity, innovation, and personal growth."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Work with cutting-edge technologies and be part of shaping the future of digital transformation."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Benefits",
      description: "Comprehensive health benefits, retirement plans, and job security in a growing company."
    }
  ];

  return (
    <section className="why-join-us-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Join Virtual Xcellence?</h2>
          <span className="section-subtitle">
            Be part of a team that&apos;s transforming the future of technology
          </span>
        </div>

        <div className="benefits-grid">
          <div className="row">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-6">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section text-center mt-12">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Make an Impact?</h3>
            <p className="cta-description">
              Join our team and help shape the future of technology. We&apos;re always looking for passionate individuals who want to make a difference.
            </p>
            <div className="cta-buttons">
              <a href="#careers" className="btn btn-primary">
                View Open Positions
              </a>
              <a href="/contact" className="btn btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
