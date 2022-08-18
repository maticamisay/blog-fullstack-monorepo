import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Image from "react-bootstrap/Image";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper bg-light"
      >
        <SwiperSlide>
          <Image
            src="https://www.alura.com.br/artigos/assets/html-css-js/imagem-1.png"
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png"
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.png"
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png"
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
            height={100}
          />
        </SwiperSlide><SwiperSlide>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
            height={100}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
