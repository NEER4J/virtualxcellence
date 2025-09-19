import React from 'react';

interface IFeature {
  id: number;
  img: string;
  title: string;
  text: string;
}

const CoreValuesSection: React.FC = () => {
  const features: IFeature[] = [
    {
      id: 1,
      img: "/assets/imgs/gallery/image-42.webp",
      title: "Innovation First",
      text: "We embrace emerging technologies to stay ahead."
    },
    {
      id: 2,
      img: "/assets/imgs/gallery/image-42.webp",
      title: "Client-Centricity",
      text: "Every solution is designed with your business goals in mind."
    },
    {
      id: 3,
      img: "/assets/imgs/gallery/image-42.webp",
      title: "Integrity & Trust",
      text: "Transparent, ethical, and reliable partnerships."
    },
    {
      id: 4,
      img: "/assets/imgs/gallery/image-42.webp",
      title: "Scalability",
      text: "Building future-ready solutions that evolve with your growth."
    },
    {
      id: 5,
      img: "/assets/imgs/gallery/image-42.webp",
      title: "Excellence",
      text: "Consistently delivering beyond expectations."
    }
  ];

  return (
    <section className="choose-area">
      <div className="container">
        <div className="choose-area-inner section-spacing">
          <div className="core-values-content-wrapper">
            <div className="section-content fade-anim" data-direction="right">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">Our Core Values</h2>
                </div>
              </div>
              <div className="features-wrapper-box">
                <div className="features-wrapper core-values-wrapper">
                  {features.map((feature: IFeature) => (
                    <div className="core-values-box" key={feature?.id}>
                      <div className="thumb">
                        <img src={feature?.img} alt="feature" />
                      </div>
                      <div className="content">
                        <h3 className="title">{feature?.title}</h3>
                        <p className="text">{feature?.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
