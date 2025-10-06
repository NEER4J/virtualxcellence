import { ReactElement } from "react";
import { Clock, DollarSign, BarChart3, Users, Shield, Lightbulb } from "lucide-react";

const AIBenefitsSection = (): ReactElement => {
  return (
    <section className="ai-benefits-section">
      <div className="container">
        <div className="ai-benefits-inner section-spacing">
          <div className="section-header">
            <h2 className="section-title">Why AI & Automation Matter</h2>
            <p className="section-description">
              Virtual Xcellence bridges the gap by combining AI innovation with business-first thinking.
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon benefit-icon-red">
                <Clock className="icon" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Actual process time down great!</h3>
                <p className="benefit-description">
                  Reduce manual processing time by up to 80% with intelligent automation workflows.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon benefit-icon-gray">
                <BarChart3 className="icon" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Increase AI-driven insights into productivity</h3>
                <p className="benefit-description">
                  Transform raw data into actionable insights that drive strategic decision-making.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon benefit-icon-black">
                <Users className="icon" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Customer-centric and personalized experiences</h3>
                <p className="benefit-description">
                  Deliver hyper-personalized experiences that increase customer satisfaction and loyalty.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon benefit-icon-red">
                <DollarSign className="icon" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Drive change in demand and optimize resource</h3>
                <p className="benefit-description">
                  Optimize resource allocation and predict demand patterns for maximum efficiency.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon benefit-icon-gray">
                <Shield className="icon" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Enhanced security and compliance</h3>
                <p className="benefit-description">
                  AI-powered security monitoring and automated compliance reporting.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon benefit-icon-black">
                <Lightbulb className="icon" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Innovation acceleration</h3>
                <p className="benefit-description">
                  Accelerate innovation cycles and bring new products to market faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;
