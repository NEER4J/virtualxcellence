import React from "react";

interface IIndustryApplicationsData {
  title: string;
  description: string;
  description2?: string;
}

interface IndustryApplicationsSectionProps {
  applicationsData?: IIndustryApplicationsData;
  imageSrc?: string;
}

const IndustryApplicationsSection: React.FC<IndustryApplicationsSectionProps> = ({ 
  applicationsData,
  imageSrc = "/assets/imgs/gallery/image-52.webp"
}) => {
  if (!applicationsData) {
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
                {applicationsData?.title && (
                  <div className="title-wrapper">
                    <h2 className="section-title">{applicationsData?.title}</h2>
                  </div>
                )}
              </div>

               {applicationsData?.description && (
                 <div className="text-wrapper">
                   <p className="text mb-4">{applicationsData?.description}</p>
                   {applicationsData?.description2 && (
                     <p className="text">{applicationsData?.description2}</p>
                   )}
                 </div>
               )}
            </div>
             <div className="section-content fade-anim" data-direction="left">
               
                <div className="image-wrapper">
                  <img 
                    src={imageSrc} 
                    alt={applicationsData?.title || "Industry Applications"} 
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

export default IndustryApplicationsSection;
