import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-screen w-full">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bgimage.jpg')" }}
          ></div>
          {/* Overlay with text and animations */}
          <div className="animated-train-text absolute inset-0 flex flex-col  justify-center bg-black bg-opacity-30 text-left pl-12 pr-12 text-wrap">
            <h4 className="text-2xl md:text-4xl font-bold text-white animate-fadeInDown">
             Services Backed Up By Credibility and Trustworthiness.
            </h4>
            <p className="mt-4 text-xl text-white animate-fadeInUp">
                Speed, Accuracy, and Reliability. That’s what you get when you work with us.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-screen w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/b1_ov_2.jpg')" }}
          ></div>
          <div className="animated-train-text absolute inset-0 flex flex-col  justify-center bg-black bg-opacity-30 text-left pl-12 pr-12 text-wrap">
          <h4 className="text-2xl md:text-4xl font-bold text-white animate-fadeInDown text-wrap">
            Services Backed Up By Credibility and Trustworthiness
            </h4>
            <p className="mt-4 text-xl text-white animate-fadeInUp">
            Speed, Accuracy, and Reliability. That’s what you get when you work with us.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-screen w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/b1_ov_1.jpg')" }}
          ></div>
          <div className="animated-train-text absolute inset-0 flex flex-col  justify-center bg-black bg-opacity-30 text-left pl-12 pr-12 text-wrap">
            <h4 className="text-2xl md:text-4xl font-bold text-white animate-fadeInDown">
            Services Backed Up By Credibility and Trustworthiness
            </h4>
            <p className="mt-4 text-xl text-white animate-fadeInUp">
            Speed, Accuracy, and Reliability. That’s what you get when you work with us.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
