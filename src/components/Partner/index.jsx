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
          slidesPerView={5}
          spaceBetween={20}
          modules={[Autoplay]}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          loop={true}
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
