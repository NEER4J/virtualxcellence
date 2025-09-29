import { ReactElement } from "react";

interface Impact {
  text: string;
}

interface ImpactWeDeliverProps {
  title: string;
  impacts: Impact[];
}

const ImpactWeDeliver = ({ title, impacts }: ImpactWeDeliverProps): ReactElement => {
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

              <div className="impacts-list">
                <ul className="list-unstyled">
                  {impacts.map((impact, index) => (
                    <li key={index} className="impact-item d-flex align-items-start mb-3">
                      <span className="impact-icon me-3">✔</span>
                      <span className="impact-text">{impact.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactWeDeliver;
