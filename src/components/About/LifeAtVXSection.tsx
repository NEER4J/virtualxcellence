import { ReactElement } from "react";
import { Users, Coffee, BookOpen, Trophy } from "lucide-react";

const LifeAtVXSection = (): ReactElement => {
  return (
    <section className="life-at-vx-section">
      <div className="container">
        <div className="life-at-vx-inner section-spacing">
          <div className="section-header text-center">
            <h2 className="section-title">Life at Virtual Xcellence</h2>
          </div>
          
          <div className="culture-highlights">
            <div className="highlight-item">
              <div className="highlight-icon highlight-icon-red">
                <Users className="icon" />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Diverse Team</h3>
                <p className="highlight-text">
                  Our diverse team shares a passion for excellence, fostering creativity and innovation across all departments.
                </p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon highlight-icon-gray">
                <Coffee className="icon" />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Collaborative Environment</h3>
                <p className="highlight-text">
                  From team-building activities to professional development, we support every employee&apos;s journey to success.
                </p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon highlight-icon-black">
                <BookOpen className="icon" />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Continuous Learning</h3>
                <p className="highlight-text">
                  We invest in our team&apos;s growth through training programs, certifications, and access to cutting-edge technologies.
                </p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon highlight-icon-red">
                <Trophy className="icon" />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Recognition & Growth</h3>
                <p className="highlight-text">
                  We celebrate achievements and provide clear career paths for professional advancement and personal development.
                </p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default LifeAtVXSection;
