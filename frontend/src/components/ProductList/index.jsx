import ProductItem from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../ProductList/product.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function ProductList({ isHome }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    // Điều hướng tới trang chi tiết sản phẩm với productId
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          'https://680f31ad67c5abddd19432d4.mockapi.io/elearn/courses',
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
      {isHome ? (
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={4}
          pagination={{ clickable: true }}
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
              slidesPerView: 4, // Hiển thị 4 slide trên màn hình lớn hơn
              spaceBetween: 40,
              navigation: true,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.course_id}>
              <ProductItem
                productId={product.id}
                onClick={() => handleProductClick(product.id)}
                image={product.image}
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
      ) : (
        <div className={`${styles.productList} container`}>
          <div className={`row ${styles.rowCustom}`}>
            {products.map((product) => (
              <div
                className="col-xs-6 col-sm-6 col-md-4 col-lg-3"
                key={product.id}
              >
                <ProductItem
                  key={product.course_id}
                  onClick={() => handleProductClick(product.id)}
                  image={product.image}
                  productId={product.id}
                  name={product.name}
                  enrollEnd={
                    product.enrollment_end === null
                      ? ''
                      : ` Hết hạn vào : ${product.enrollment_end} `
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
