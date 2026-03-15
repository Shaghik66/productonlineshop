import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ViewProductButton } from "../../atoms/ViewProductButton/ViewProductButton";
import { Products } from "../../../pages";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import style from "./Slider.module.css";

export function Slider({ products }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {products.map((product) => (
        <SwiperSlide className={style.sliderContainer}>
          <img className={style.image} src={product.image} alt="" />
        </SwiperSlide>
      ))}
      <ViewProductButton />
    </Swiper>
  );
}
