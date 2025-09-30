import { ReactElement } from "react";

interface Challenge {
  text: string;
}

interface KeyChallengesProps {
  title: string;
  challenges: Challenge[];
  imageSrc: string;
  imageAlt: string;
}

const KeyChallenges = ({ title, challenges, imageSrc, imageAlt }: KeyChallengesProps): ReactElement => {
  return (
    <section className="service-area-6 bg-light">
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

              <div className="challenges-list">
                <ul className="list-unstyled">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="challenge-item d-flex align-items-start mb-3">
                      <span className="challenge-icon me-3">•</span>
                      <span className="challenge-text">{challenge.text}</span>
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

export default KeyChallenges;
