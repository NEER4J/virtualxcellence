
import React from "react";

interface IChallengeData {
  subtitle: string;
  title: string;
  description: string;
  challenges: string[];
}

interface ServiceChallengeSectionProps {
  challengeData?: IChallengeData;
  imageSrc?: string;
}

const ServiceChallengeSection: React.FC<ServiceChallengeSectionProps> = ({ 
  challengeData,
  imageSrc = "/assets/imgs/gallery/image-52.webp"
}) => {
  if (!challengeData) {
    return null; // Safety check
  }

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
                {challengeData?.subtitle && (
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">
                      {challengeData?.subtitle}
                    </span>
                  </div>
                )}
                {challengeData?.title && (
                  <div className="title-wrapper">
                    <h2 className="section-title">{challengeData?.title}</h2>
                  </div>
                )}
              </div>

              {challengeData?.description && (
                <div className="text-wrapper">
                  <p className="text">{challengeData?.description}</p>
                </div>
              )}
              {challengeData?.challenges?.length > 0 && (
                <div className="services-wrapper">
                  <ul>
                    {challengeData?.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
             <div className="section-content fade-anim" data-direction="left">
               
                <div className="image-wrapper">
                  <img 
                    src={imageSrc} 
                    alt={challengeData?.title || "Service Challenge"} 
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

export default ServiceChallengeSection;

// New service section component
interface IService {
  id: number;
  title: string;
  description: string;
  items: string[];
  detailsLink: string;
  itemLink: string;
  number: string;
  image: string;
}

interface ServiceData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllLink: string;
  viewAllText: string;
  services: IService[];
}

interface ServiceSectionProps {
  serviceData?: ServiceData;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ serviceData }) => {
  if (!serviceData) {
    return null; // or return a loading state or error message
  }

  return (
    <section className="service-area">
      <div className="service-area-inner section-spacing-top">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="title-wrapper">
                <h2 className="section-title">{serviceData?.sectionTitle}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="services-wrapper-box">
          <div className="services-wrapper header-stacking-items">
            {serviceData?.services?.map((srv: IService) => (
              <div className="service-box-1 item section-spacing" key={srv?.id}>
                <div className="container">
                  
                  <div className="service-box-inner body">
                     <div className="btn-wrapper">
                       <img src={srv?.image} alt={srv?.title || "Service"} />
                     </div>
                    <div className="content">
                    <h3 className="title">
                      {srv?.title}
                      
                    </h3>
                      <p className="text">{srv?.description}</p>
                       <ul className="service-list">
                         {srv?.items?.map((item: string, index: number) => (
                           <li key={index}>
                             <i className="fa-solid fa-check me-2"></i>
                             {item}
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="final"></div>
      </div>
    </section>
  );
};

export { ServiceSection };
export { default as BusinessImpactSection } from './BusinessImpactSection';
export { default as IndustryApplicationsSection } from './IndustryApplicationsSection';
export { default as WhyWorkWithUsSection } from './WhyWorkWithUsSection';
