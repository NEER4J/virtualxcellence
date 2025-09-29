import React from "react";

interface IWhyWorkWithUsData {
  title: string;
  description: string;
  description2?: string;
}

interface WhyWorkWithUsSectionProps {
  whyWorkWithUsData?: IWhyWorkWithUsData;
  imageSrc?: string;
}

const WhyWorkWithUsSection: React.FC<WhyWorkWithUsSectionProps> = ({ 
  whyWorkWithUsData,
  imageSrc = "/assets/imgs/gallery/image-52.webp"
}) => {
  if (!whyWorkWithUsData) {
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
                {whyWorkWithUsData?.title && (
                  <div className="title-wrapper">
                    <h2 className="section-title">{whyWorkWithUsData?.title}</h2>
                  </div>
                )}
              </div>

               {whyWorkWithUsData?.description && (
                 <div className="text-wrapper">
                   <p className="text mb-4">{whyWorkWithUsData?.description}</p>
                   {whyWorkWithUsData?.description2 && (
                     <p className="text">{whyWorkWithUsData?.description2}</p>
                   )}
                 </div>
               )}
            </div>
             <div className="section-content fade-anim" data-direction="left">
               
                <div className="image-wrapper">
                  <img 
                    src={imageSrc} 
                    alt={whyWorkWithUsData?.title || "Why Work With Us"} 
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

export default WhyWorkWithUsSection;
