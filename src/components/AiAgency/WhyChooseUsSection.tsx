import React from "react";

interface WhyChooseUsItem {
  title: string;
  description: string;
}

const WhyChooseUsSection: React.FC = () => {
  const sectionContent = {
    subtitle: "Why Choose Us",
    title: "Why Choose Virtual Xcellence",
    exploreLink: "#contact"
  };

  const whyChooseUsItems: WhyChooseUsItem[] = [
    {
      title: "Canada-Headquartered",
      description: "10+ years of proven success"
    },
    {
      title: "Cross-Industry Expertise",
      description: "Across healthcare, finance, retail, and more"
    }
  ];

  return (
    <section className="team-area-4">
      <div className="container">
        <div className="team-area-4-inner section-spacing">
          <div className="section-content move-anim" suppressHydrationWarning={true}>
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {sectionContent?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{sectionContent?.title}</h2>
              </div>
            </div>
            <div className="team-members">
              <span className="number">
                10+
              </span>
              <p className="text">Years of Excellence</p>
            </div>
           
          </div>

          <div className="team-wrapper-box w-full" style={{width: '100%'}}>
            <div className="team-wrapper">
              {whyChooseUsItems?.map((item: WhyChooseUsItem, index: number) => (
                <div
                  className="team-box-4 fade-anim"
                  key={index}
                  data-direction="right"
                  data-delay={index % 2 === 0 ? "0.30" : "0.45"}
                  suppressHydrationWarning={true}
                >
                  <div className="thumb">
                    <img
                      src="/assets/imgs/team/team-12.webp"
                      alt={item?.title || "Why Choose Us"}
                    />
                  </div>
                  <div className="content">
                    <h3 className="name">{item?.title}</h3>
                    <span className="post">{item?.description}</span>
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

export default WhyChooseUsSection;
