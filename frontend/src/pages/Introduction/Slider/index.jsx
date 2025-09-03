import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay'; // Import CSS cho autoplay nếu cần
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import Images from '../../../assets/image/Images';
import styles from '../../Introduction/aboutus.module.scss';

import 'react-image-gallery/styles/css/image-gallery.css';
import 'swiper/css';
import { useState } from 'react';
const Facilities = ({ className }) => {
  return (
    <div className={`${styles.facilitiesWrapper} ${className}`}>
      <div className={styles.topContent}>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          modules={[Autoplay]}
          loop={true} // Quay vòng liên tục
          autoplay={{
            delay: 0, // Không delay giữa các slide
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            0: {
              navigation: false,
              slidesPerView: 2, // Hiển thị 2 slide trên màn hình nhỏ
              spaceBetween: 20, // Khoảng cách giữa các slide trên mobile
            },
            768: {
              slidesPerView: 2, // Hiển thị 4 slide trên màn hình lớn hơn
              spaceBetween: 40,
              navigation: false, // Khoảng cách giữa các slide trên desktop
            },
            992: {
              slidesPerView: 5, // Hiển thị 4 slide trên màn hình lớn hơn
              spaceBetween: 40,
              navigation: true,
            },
          }}
        >
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.bottomContent}>
        <Swiper
          breakpoints={{
            0: {
              navigation: false,
              slidesPerView: 2, // Hiển thị 2 slide trên màn hình nhỏ
              spaceBetween: 20, // Khoảng cách giữa các slide trên mobile
            },
            768: {
              slidesPerView: 2, // Hiển thị 4 slide trên màn hình lớn hơn
              spaceBetween: 40,
              navigation: false, // Khoảng cách giữa các slide trên desktop
            },
            992: {
              slidesPerView: 5, // Hiển thị 4 slide trên màn hình lớn hơn
              spaceBetween: 40,
              navigation: true,
            },
          }}
          direction="horizontal"
          slidesPerView={5}
          spaceBetween={20}
          modules={[Autoplay]}
          freeMode={true}
          loop={true} // Quay vòng liên tục
          autoplay={{
            delay: 0, // Không delay giữa các slide
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3000} // Tốc độ mượt mà

          // Di chuyển từ phải sang trái
        >
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrapper}>
              <img src={Images.feature} alt="image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Facilities;
