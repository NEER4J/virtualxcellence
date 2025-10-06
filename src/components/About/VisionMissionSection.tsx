import { ReactElement } from "react";
import { Target, Eye, Lightbulb, Users, Shield, TrendingUp } from "lucide-react";

const VisionMissionSection = (): ReactElement => {
  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="vision-mission-inner section-spacing">
          <div className="section-header text-center">
            <h2 className="section-title">Vision & Mission</h2>
          </div>
          
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="icon-wrapper">
                <Eye className="vision-icon" />
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To be the global leader in digital transformation, empowering businesses worldwide to embrace technology as a catalyst for sustainable growth and innovation.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="icon-wrapper">
                <Target className="mission-icon" />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To deliver cutting-edge technology solutions that transform businesses, enhance operational efficiency, and create sustainable competitive advantages in the digital landscape.
              </p>
            </div>
          </div>
          
          <div className="values-preview">
            <div className="value-item">
              <div className="value-icon value-icon-red">
                <Lightbulb className="icon" />
              </div>
              <div className="value-content">
                <h4 className="value-title">Innovation First</h4>
                <p className="value-text">We embrace emerging technologies to stay ahead</p>
              </div>
            </div>
            
            <div className="value-item">
              <div className="value-icon value-icon-gray">
                <Users className="icon" />
              </div>
              <div className="value-content">
                <h4 className="value-title">Client-Centricity</h4>
                <p className="value-text">Every solution is designed with your business goals in mind</p>
              </div>
            </div>
            
            <div className="value-item">
              <div className="value-icon value-icon-black">
                <Shield className="icon" />
              </div>
              <div className="value-content">
                <h4 className="value-title">Integrity & Trust</h4>
                <p className="value-text">Transparent, ethical, and reliable partnerships</p>
              </div>
            </div>
            
            <div className="value-item">
              <div className="value-icon value-icon-gray">
                <TrendingUp className="icon" />
              </div>
              <div className="value-content">
                <h4 className="value-title">Scalability</h4>
                <p className="value-text">Building future-ready solutions that evolve with your growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
