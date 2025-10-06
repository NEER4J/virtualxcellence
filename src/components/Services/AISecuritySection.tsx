import { ReactElement } from "react";
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, FileCheck } from "lucide-react";

const AISecuritySection = (): ReactElement => {
  return (
    <section className="ai-security-section">
      <div className="container">
        <div className="ai-security-inner section-spacing">
          <div className="section-header">
            <h2 className="section-title">AI Security & Compliance</h2>
            <p className="section-description">
              Enterprise-grade security and compliance frameworks ensure your AI implementations are safe, ethical, and regulatory-compliant.
            </p>
          </div>
          
          <div className="security-grid">
            <div className="security-item">
              <div className="security-icon security-icon-red">
                <Shield className="icon" />
              </div>
              <div className="security-content">
                <h3 className="security-title">Data Protection</h3>
                <p className="security-description">
                  End-to-end encryption and secure data handling protocols protect sensitive information throughout the AI lifecycle.
                </p>
                <ul className="security-features">
                  <li>GDPR compliance</li>
                  <li>Data anonymization</li>
                  <li>Secure model training</li>
                </ul>
              </div>
            </div>
            
            <div className="security-item">
              <div className="security-icon security-icon-gray">
                <Lock className="icon" />
              </div>
              <div className="security-content">
                <h3 className="security-title">Access Control</h3>
                <p className="security-description">
                  Multi-layered authentication and role-based access controls ensure only authorized personnel can access AI systems.
                </p>
                <ul className="security-features">
                  <li>Multi-factor authentication</li>
                  <li>Role-based permissions</li>
                  <li>Audit logging</li>
                </ul>
              </div>
            </div>
            
            <div className="security-item">
              <div className="security-icon security-icon-black">
                <Eye className="icon" />
              </div>
              <div className="security-content">
                <h3 className="security-title">AI Governance</h3>
                <p className="security-description">
                  Comprehensive governance frameworks ensure ethical AI deployment and transparent decision-making processes.
                </p>
                <ul className="security-features">
                  <li>Ethical AI guidelines</li>
                  <li>Bias detection</li>
                  <li>Model explainability</li>
                </ul>
              </div>
            </div>
            
            <div className="security-item">
              <div className="security-icon security-icon-red">
                <CheckCircle className="icon" />
              </div>
              <div className="security-content">
                <h3 className="security-title">Compliance Standards</h3>
                <p className="security-description">
                  Adherence to industry standards and regulatory requirements ensures your AI solutions meet all compliance obligations.
                </p>
                <ul className="security-features">
                  <li>SOX compliance</li>
                  <li>HIPAA certification</li>
                  <li>ISO 27001 standards</li>
                </ul>
              </div>
            </div>
            
            <div className="security-item">
              <div className="security-icon security-icon-gray">
                <AlertTriangle className="icon" />
              </div>
              <div className="security-content">
                <h3 className="security-title">Risk Management</h3>
                <p className="security-description">
                  Proactive risk assessment and mitigation strategies protect against potential AI-related vulnerabilities and threats.
                </p>
                <ul className="security-features">
                  <li>Threat modeling</li>
                  <li>Vulnerability scanning</li>
                  <li>Incident response</li>
                </ul>
              </div>
            </div>
            
            <div className="security-item">
              <div className="security-icon security-icon-black">
                <FileCheck className="icon" />
              </div>
              <div className="security-content">
                <h3 className="security-title">Audit & Monitoring</h3>
                <p className="security-description">
                  Continuous monitoring and regular audits ensure AI systems maintain security standards and regulatory compliance.
                </p>
                <ul className="security-features">
                  <li>Real-time monitoring</li>
                  <li>Automated compliance checks</li>
                  <li>Regular security audits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISecuritySection;
