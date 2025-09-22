"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface ITextSlide {
  id: number;
  text: string;
  suffix: string;
}

interface TextSliderData {
  items: ITextSlide[];
}

interface ServiceTextSliderSectionProps {
  textSliderData?: TextSliderData;
}

const ServiceTextSliderSection: React.FC<ServiceTextSliderSectionProps> = ({ 
  textSliderData
}) => {
  if (!textSliderData) {
    return null; // Safety check
  }

  return (
    <div className="text-slider-area-2">
      <div className="text-slider-box">
        <div className="text-slider fade-anim" suppressHydrationWarning={true}>
          <Swiper
            modules={[Autoplay]}
            className="text-slider-active-2"
            slidesPerView="auto"
            spaceBetween={0}
            speed={15000}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
          >
            {textSliderData?.items?.map((item: ITextSlide) => (
              <SwiperSlide key={item?.id}>
                <div className="text-slider-item">
                  <h2 className="title">
                    <span className="icon">&#47;&#47;</span>
                    {item?.text}
                    <span className="icon">&#47;&#47;</span>
                    {item?.suffix}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServiceTextSliderSection;
