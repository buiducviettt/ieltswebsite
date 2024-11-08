import ProductItem from './Product';
// import Images from '../../assets/image/Images';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../ProductList/product.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

function ProductList({ isHome }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          'https://cors-anywhere.herokuapp.com/https://courses.edx.org/api/courses/v1/courses/',
        );
        const data = await response.json();
        const allProduct = data.results || data;
        setProducts(isHome ? allProduct.slice(0, 5) : allProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [isHome]);
  return (
    <div className={`${styles.productListWrapper} mt-5`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.course_id}>
            <ProductItem
              image={`https://courses.edx.org${product.media.course_image.uri}`}
              name={product.name}
              enrollEnd={
                product.enrollment_end === null
                  ? ''
                  : ` Hết hạn vào : ${product.enrollment_end} `
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductList;
