import { ReactElement } from "react";

interface IndustryOverviewProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const IndustryOverview = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt 
}: IndustryOverviewProps): ReactElement => {
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

              <div className="text-wrapper">
                <p className="text">
                  {description}
                </p>
              </div>
            </div>
            
            <div className="section-content fade-anim" data-direction="left">
              <div className="image-wrapper">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="fade-anim"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryOverview;
