import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay'; // Import CSS cho autoplay nếu cần
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import Images from '../../../assets/image/Images';
import styles from '../../Introduction/aboutus.module.scss';
import 'swiper/css';
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
