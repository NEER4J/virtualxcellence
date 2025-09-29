"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface Project {
  id: number;
  title: string;
  tags: string[];
  image: string;
}

interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  projects: Project[];
}

interface WorkSliderProps {
  work?: WorkData;
}

const defaultWork: WorkData = {
  sectionSubtitle: "Our Portfolio",
  sectionTitle: "Selected works",
  viewAllText: "See All Works",
  projects: [
    {
      id: 1,
      title: "Brand identity overhaul for Luxe Co.",
      tags: ["BRANDING", "PRODUCT"],
      image: "/assets/imgs/project/project-1.webp",
    },
    {
      id: 2,
      title: "E-Commerce platform design for shopy",
      tags: ["BRANDING", "PRODUCT"],
      image: "/assets/imgs/project/project-2.webp",
    },
    {
      id: 3,
      title: "Mobile app design for FitPro agency",
      tags: ["BRANDING", "PRODUCT"],
      image: "/assets/imgs/project/project-3.webp",
    },
    {
      id: 4,
      title: "Digital Ad campaign for FlexWear",
      tags: ["BRANDING", "PRODUCT"],
      image: "/assets/imgs/project/project-4.webp",
    },
    {
      id: 5,
      title: "Canvas of creations app design for Lumina Studio",
      tags: ["BRANDING", "PRODUCT"],
      image: "/assets/imgs/project/project-12.webp",
    },
    {
      id: 6,
      title: "Experiences in motion with Eclipse app",
      tags: ["BRANDING", "PRODUCT"],
      image: "/assets/imgs/project/project-13.webp",
    },
    {
      id: 7,
      title: "Echo Tech Solutions web development",
      tags: ["BRANDING", "PRODUCT"],
      image: "/assets/imgs/project/project-14.webp",
    },
    {
      id: 8,
      title: "Innovative digital trails of Wave Media",
      tags: ["BRANDING", "PRODUCT"],
      image: "/assets/imgs/project/project-15.webp",
    },
  ],
};

const WorkSlider = ({ work = defaultWork }: WorkSliderProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        speed={1800}
        navigation={{
          prevEl: ".work-button-prev",
          nextEl: ".work-button-next",
        }}
        pagination={{
          el: ".work-pagination",
          type: "progressbar",
          clickable: true,
        }}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1201: { slidesPerView: 3 },
          1367: { slidesPerView: 3 },
        }}
      >
        {work?.projects?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="work-box-2">
              <div className="thumb">
                <div className="meta">
                  {item?.tags?.map((tag, idx) => (
                    <span className="tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <img src={item?.image} alt={item?.title || "Project image"} />
                </div>
                <div className="content">
                  <h3 className="title">
                    {item?.title}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="work-pagination fade-anim"></div>
      <div className="slide-nav-wrapper">
        <div className="slide-nav fade-anim">
          <div className="work-button-prev slide-nav-button" role="button">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="work-button-next slide-nav-button" role="button">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="btn-wrapper fade-anim">
          <div className="t-btn-group">
            <button
              className="t-btn t-btn-circle"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button
              className="t-btn t-btn-primary"
            >
              Discover All
            </button>
            <button
              className="t-btn t-btn-circle"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSlider;
