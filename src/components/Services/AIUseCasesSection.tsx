import { ReactElement } from "react";
import { MessageSquare, FileText, ShoppingCart, Stethoscope, Building, Factory, GraduationCap, CreditCard } from "lucide-react";

const AIUseCasesSection = (): ReactElement => {
  return (
    <section className="ai-use-cases-section">
      <div className="container">
        <div className="ai-use-cases-inner section-spacing">
          <div className="section-header">
            <h2 className="section-title">Industry Applications</h2>
            <p className="section-description">
              Our AI and automation solutions are tailored to meet the unique challenges and opportunities across different industries.
            </p>
          </div>
          
          <div className="use-cases-grid">
            <div className="use-case-item">
              <div className="use-case-icon use-case-icon-red">
                <Stethoscope className="icon" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Healthcare</h3>
                <p className="use-case-description">AI-powered diagnostics, patient monitoring, and treatment optimization</p>
                <ul className="use-case-features">
                  <li>Medical image analysis</li>
                  <li>Predictive health analytics</li>
                  <li>Automated patient scheduling</li>
                </ul>
              </div>
            </div>
            
            <div className="use-case-item">
              <div className="use-case-icon use-case-icon-gray">
                <CreditCard className="icon" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Finance</h3>
                <p className="use-case-description">Fraud detection, risk assessment, and automated trading systems</p>
                <ul className="use-case-features">
                  <li>Real-time fraud prevention</li>
                  <li>Credit risk modeling</li>
                  <li>Algorithmic trading</li>
                </ul>
              </div>
            </div>
            
            <div className="use-case-item">
              <div className="use-case-icon use-case-icon-black">
                <ShoppingCart className="icon" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Retail</h3>
                <p className="use-case-description">Personalized shopping experiences and inventory optimization</p>
                <ul className="use-case-features">
                  <li>Recommendation engines</li>
                  <li>Demand forecasting</li>
                  <li>Chatbot customer service</li>
                </ul>
              </div>
            </div>
            
            <div className="use-case-item">
              <div className="use-case-icon use-case-icon-red">
                <Factory className="icon" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Manufacturing</h3>
                <p className="use-case-description">Predictive maintenance and quality control automation</p>
                <ul className="use-case-features">
                  <li>Predictive maintenance</li>
                  <li>Quality inspection</li>
                  <li>Supply chain optimization</li>
                </ul>
              </div>
            </div>
            
            <div className="use-case-item">
              <div className="use-case-icon use-case-icon-gray">
                <Building className="icon" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Government</h3>
                <p className="use-case-description">Citizen service automation and data-driven policy making</p>
                <ul className="use-case-features">
                  <li>Citizen service chatbots</li>
                  <li>Document processing</li>
                  <li>Policy impact analysis</li>
                </ul>
              </div>
            </div>
            
            <div className="use-case-item">
              <div className="use-case-icon use-case-icon-black">
                <GraduationCap className="icon" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Education</h3>
                <p className="use-case-description">Personalized learning and intelligent tutoring systems</p>
                <ul className="use-case-features">
                  <li>Adaptive learning paths</li>
                  <li>Automated grading</li>
                  <li>Student performance analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIUseCasesSection;
