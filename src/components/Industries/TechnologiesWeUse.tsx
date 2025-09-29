import { ReactElement } from "react";

interface TechnologyItem {
  name: string;
  icon: string;
}

interface TechnologyCategory {
  title: string;
  technologies: TechnologyItem[];
}

interface TechnologiesWeUseProps {
  title: string;
  technologies: TechnologyCategory[];
}

const TechnologiesWeUse = ({ title, technologies }: TechnologiesWeUseProps): ReactElement => {
  return (
    <section className="process-area-3">
      <div className="container">
        <div className="process-area-3-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="title-wrapper">
                <h2 className="section-title">{title}</h2>
              </div>
            </div>
          </div>
          <div className="process-wrapper-box">
            <div className="tools-wrapper">
              {technologies.map((category, index) => (
                <div key={index} className="tools-wrapper-box">
                  <div className="content">
                    <h3 className="title">{category.title}</h3>
                    <div className="tools-grid">
                      {category.technologies.map((technology, techIndex) => (
                        <div key={techIndex} className="tool-item">
                          <div className="tool-icon">
                            <img src={technology.icon} alt={technology.name} />
                          </div>
                          <span className="tool-name">{technology.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesWeUse;
