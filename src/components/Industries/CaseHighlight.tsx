import { ReactElement } from "react";

interface CaseHighlightProps {
  title: string;
  caseStudy: {
    title: string;
    description: string;
    impact: string;
  };
}

const CaseHighlight = ({ title, caseStudy }: CaseHighlightProps): ReactElement => {
  return (
    <section className="service-area-6">
      <div className="container">
        <div className="service-area-6-inner section-spacing">
          <div className="section-content-wrapper">
            
            <div
              className="services-wrapper-box fade-anim"
              data-direction="right"
            >
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">{title}</h2>
                </div>
              </div>

              <div className="case-study-content">
                <div className="case-study-card p-4 border rounded">
                  <h4 className="case-study-title mb-3">{caseStudy.title}</h4>
                  <p className="case-study-description mb-3">{caseStudy.description}</p>
                  <div className="case-study-impact">
                    <strong>Impact:</strong> {caseStudy.impact}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseHighlight;
