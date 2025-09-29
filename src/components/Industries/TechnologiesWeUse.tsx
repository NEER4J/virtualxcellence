import { ReactElement } from "react";

interface Technology {
  category: string;
  technologies: string[];
}

interface TechnologiesWeUseProps {
  title: string;
  technologies: Technology[];
}

const TechnologiesWeUse = ({ title, technologies }: TechnologiesWeUseProps): ReactElement => {
  return (
    <section className="service-area-6 bg-light">
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

              <div className="technologies-list">
                {technologies.map((tech, index) => (
                  <div key={index} className="technology-category mb-4">
                    <h4 className="technology-category-title mb-3">
                      <span className="technology-bullet">•</span> {tech.category}
                    </h4>
                    <div className="technology-items">
                      {tech.technologies.map((technology, techIndex) => (
                        <span key={techIndex} className="technology-item me-3 mb-2 d-inline-block">
                          {technology}
                        </span>
                      ))}
                    </div>
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

export default TechnologiesWeUse;
