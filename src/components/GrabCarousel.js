import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

  
const slidesData = [
    { id: 1, title: "Healthcare", image: "/images/s1.jpg" },
    { id: 2, title: "NGO", image: "/images/8.jpg" },
    { id: 3, title: "Education", image: "/images/3.jpg" },
    { id: 4, title: "IT", image: "/images/6.jpg" },
    { id: 5, title: "Construction", image: "/images/7.jpg" },
    { id: 6, title: "Agriculture", image: "/images/1.jpg" },
    { id: 7, title: "Real Estate", image: "/images/10.jpg" },
    { id: 8, title: "FMCG", image: "/images/4.jpg" },
    // ... Add as many slides as you like
];

const GrabCarousel = () => {
    return (
        <div className="w-full py-8">
          <Swiper
            // Swiper modules
            modules={[Autoplay]}
            // Carousel settings
            spaceBetween={20}
            slidesPerView={3}           
            loop={true}                  
            autoplay={{ 
              delay: 2000,              
              disableOnInteraction: false,
            }}
            speed={1000}     
            breakpoints={{
                640: { slidesPerView: 1 }, // 1 slide on small screens
                768: { slidesPerView: 2 }, // 2 slides on medium screens
                1024: { slidesPerView: 4 } // 4 slides on large screens
              }}     
              className="custom-swiper"          
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-white shadow p-4 rounded">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto mb-2 rounded"
                  />
                  <h3 className="text-center font-bold">{slide.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
};

export default GrabCarousel;
