import { ReactElement } from "react";
import { TrendingUp, DollarSign, Clock, Target, Users, BarChart3 } from "lucide-react";

const AIMetricsSection = (): ReactElement => {
  return (
    <section className="ai-metrics-section">
      <div className="container">
        <div className="ai-metrics-inner section-spacing">
          <div className="section-header">
            <h2 className="section-title">Measurable ROI from AI</h2>
            <p className="section-description">
              Proving Value Through Results - Our AI implementations deliver quantifiable business impact.
            </p>
          </div>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon metric-icon-red">
                <DollarSign className="icon" />
              </div>
              <div className="metric-content">
                <h3 className="metric-number">40%</h3>
                <p className="metric-label">Cost Reduction</p>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon metric-icon-gray">
                <Clock className="icon" />
              </div>
              <div className="metric-content">
                <h3 className="metric-number">60%</h3>
                <p className="metric-label">Faster Processing</p>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon metric-icon-black">
                <Target className="icon" />
              </div>
              <div className="metric-content">
                <h3 className="metric-number">95%</h3>
                <p className="metric-label">Accuracy Rate</p>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon metric-icon-red">
                <Users className="icon" />
              </div>
              <div className="metric-content">
                <h3 className="metric-number">85%</h3>
                <p className="metric-label">Employee Satisfaction</p>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon metric-icon-gray">
                <BarChart3 className="icon" />
              </div>
              <div className="metric-content">
                <h3 className="metric-number">3x</h3>
                <p className="metric-label">Productivity Boost</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AIMetricsSection;
