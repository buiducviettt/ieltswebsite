import ProductItem from './Product';
import Images from '../../assets/image/Images';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../ProductList/product.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
function ProductList() {
  return (
    <div className={`${styles.productListWrapper} mt-5`}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <ProductItem
            shortdesc="102 video - 40 giờ học"
            name="IELTS Super Intensive"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Images.teacher}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            shortdesc="102 video - 40 giờ học"
            name="Listening"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Images.teacher}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            shortdesc="102 video - 40 giờ học"
            name="IELTS Super Intensive"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Images.teacher}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            shortdesc="102 video - 40 giờ học"
            name="IELTS Super Intensive"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Images.teacher}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            shortdesc="102 video - 40 giờ học"
            name="Listening"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            image={Images.teacher}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductList;
