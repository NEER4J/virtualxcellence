import { ReactElement } from "react";
import { Leaf, Accessibility, Heart, Globe, Lightbulb, Users } from "lucide-react";

const InnovationSection = (): ReactElement => {
  return (
    <section className="innovation-section">
      <div className="container">
        <div className="innovation-inner section-spacing-top">
          <div className="section-header text-center">
            <h2 className="section-title">We innovate for better lives</h2>
          </div>
          
          <div className="innovation-grid">
            <div className="innovation-card">
              <div className="card-icon card-icon-gray">
                <Leaf className="icon" />
              </div>
              <h3 className="card-title">Sustainable Solutions</h3>
              <p className="card-description">
                Creating technologies that minimize environmental impact and promote a greener future. 
                We develop solutions that help businesses reduce their carbon footprint while maintaining efficiency.
              </p>
            </div>
            
            <div className="innovation-card">
              <div className="card-icon card-icon-black">
                <Accessibility className="icon" />
              </div>
              <h3 className="card-title">Accessibility for All</h3>
              <p className="card-description">
                Designing inclusive solutions that empower people of all abilities to thrive in a digital world. 
                Our technology ensures equal access and opportunity for everyone.
              </p>
            </div>
            
            <div className="innovation-card">
              <div className="card-icon card-icon-red">
                <Heart className="icon" />
              </div>
              <h3 className="card-title">Social Impact Initiatives</h3>
              <p className="card-description">
                Spearheading projects that address societal challenges and improve quality of life for communities worldwide. 
                We believe technology should serve humanity&apos;s greatest needs.
              </p>
            </div>
          </div>
          
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <Globe className="icon" />
              </div>
              <div className="stat-content">
                <h4 className="stat-number">10+</h4>
                <p className="stat-label">Years of Innovation</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Users className="icon" />
              </div>
              <div className="stat-content">
                <h4 className="stat-number">500+</h4>
                <p className="stat-label">Projects Delivered</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Lightbulb className="icon" />
              </div>
              <div className="stat-content">
                <h4 className="stat-number">50+</h4>
                <p className="stat-label">Technologies Mastered</p>
              </div>
            </div>
          </div>
          
          <div className="innovation-approach section-spacing">
            <div className="approach-header">
              <h3 className="approach-title">Our Innovation Approach</h3>
            </div>
            
            <div className="approach-steps">
              <div className="step-item">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4 className="step-title">DISCOVER</h4>
                  <p className="step-description">
                    We delve deep into your business objectives and challenges to craft tailored digital solutions. 
                    Our process involves detailed discussions and analysis to ensure we understand your needs, industry trends, and competitors.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4 className="step-title">DESIGN</h4>
                  <p className="step-description">
                    With a clear understanding of your goals, our designers create visually striking and user-friendly designs 
                    that reflect your brand. We focus on creating a seamless user experience to enhance engagement and drive conversions.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4 className="step-title">DEVELOP</h4>
                  <p className="step-description">
                    Our development team uses cutting-edge technologies to bring your vision to life. Whether it&apos;s a website, 
                    mobile app, or custom software, we ensure the final product is robust, scalable, and exceeds your expectations.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4 className="step-title">DEPLOY</h4>
                  <p className="step-description">
                    We manage the final step of launching your digital solution. Our team ensures a smooth transition and provides 
                    ongoing support. Our goal is a seamless deployment so you can start benefiting immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
