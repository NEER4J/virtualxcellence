import React from "react";

interface IBusinessImpactData {
  title: string;
  description: string;
  description2?: string;
}

interface BusinessImpactSectionProps {
  impactData?: IBusinessImpactData;
  imageSrc?: string;
}

const BusinessImpactSection: React.FC<BusinessImpactSectionProps> = ({ 
  impactData,
  imageSrc = "/assets/imgs/gallery/image-52.webp"
}) => {
  if (!impactData) {
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
                {impactData?.title && (
                  <div className="title-wrapper">
                    <h2 className="section-title">{impactData?.title}</h2>
                  </div>
                )}
              </div>

               {impactData?.description && (
                 <div className="text-wrapper">
                   <p className="text mb-4">{impactData?.description}</p>
                   {impactData?.description2 && (
                     <p className="text">{impactData?.description2}</p>
                   )}
                 </div>
               )}
            </div>
             <div className="section-content fade-anim" data-direction="left">
               
                <div className="image-wrapper">
                  <img 
                    src={imageSrc} 
                    alt={impactData?.title || "Business Impact"} 
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

export default BusinessImpactSection;
