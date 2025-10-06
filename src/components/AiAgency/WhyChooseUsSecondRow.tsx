import React from "react";

interface WhyChooseUsItem {
  title: string;
  description: string;
  image: string;
}

const WhyChooseUsSecondRow: React.FC = () => {
  const whyChooseUsItems: WhyChooseUsItem[] = [
    {
      title: "Leadership-as-a-Service",
      description: "CTO/CFO for flexible, high-value advisory",
      image: "/assets/imgs/home-pages/why-us/Leadership-as-a-Service.jpg"
    },
    {
      title: "Future-Focused",
      description: "AI, cloud, cybersecurity, and transformation",
      image: "/assets/imgs/home-pages/why-us/Future-Focused.jpg"
    },
    {
      title: "Measurable ROI",
      description: "With every engagement",
      image: "/assets/imgs/home-pages/why-us/Measurable-ROI.jpg"
    }
  ];

  return (
    <section className="team-area-4 why-choose-us-second-row">
      <div className="container">
        <div className="team-area-4-inner">
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
                      src={item?.image}
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

export default WhyChooseUsSecondRow;
