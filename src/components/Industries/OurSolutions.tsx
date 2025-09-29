import { ReactElement } from "react";

interface Solution {
  title: string;
  items: string[];
}

interface OurSolutionsProps {
  title: string;
  solutions: Solution[];
}

const OurSolutions = ({ title, solutions }: OurSolutionsProps): ReactElement => {
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

              <div className="solutions-list">
                {solutions.map((solution, index) => (
                  <div key={index} className="solution-item mb-4">
                    <h4 className="solution-title mb-3">{solution.title}</h4>
                    <ul className="list-unstyled">
                      {solution.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="solution-item-text d-flex align-items-start mb-2">
                          <span className="solution-icon me-3">o</span>
                          <span className="solution-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
