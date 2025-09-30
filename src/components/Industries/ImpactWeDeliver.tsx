import { ReactElement } from "react";

interface Impact {
  text: string;
}

interface ImpactWeDeliverProps {
  title: string;
  impacts: Impact[];
  imageSrc: string;
  imageAlt: string;
}

const ImpactWeDeliver = ({ title, impacts, imageSrc, imageAlt }: ImpactWeDeliverProps): ReactElement => {
  return (
    <section className="service-area-6">
      <div className="container">
        <div className="service-area-6-inner section-spacing">
          <div className="section-content-wrapper">
            
            <div className="section-content fade-anim" data-direction="right">
              <div className="image-wrapper">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="fade-anim"
                />
              </div>
            </div>
            
            <div
              className="services-wrapper-box fade-anim"
              data-direction="left"
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
