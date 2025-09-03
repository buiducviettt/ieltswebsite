import Images from '../../assets/image/Images';
import styles from '../Partner/partner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay'; // Import CSS cho autoplay nếu cần
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

import 'swiper/css';
const Partner = () => {
  return (
    <div className={styles.partnerWrapper}>
      <div className={styles.inner}>
        <Swiper
          spaceBetween={20}
          modules={[Autoplay]}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          loop={true}
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
          <div className={styles.logoPartnerWrapper}>
            <SwiperSlide>
              <div className={styles.logoPartner}>
                <img src={Images.logo1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.logoPartner}>
                <img src={Images.logo1} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.logoPartner}>
                <img src={Images.logo2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.logoPartner}>
                <img src={Images.logo2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.logoPartner}>
                <img src={Images.logo2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.logoPartner}>
                <img src={Images.logo2} alt="" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Partner;
