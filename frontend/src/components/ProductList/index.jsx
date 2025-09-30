/* eslint-disable react/prop-types */
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
  // eslint-disable-next-line no-unused-vars
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    // Điều hướng tới trang chi tiết sản phẩm với productId (theo MockAPI id)
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        console.log('data', data);
        const allProducts = data.results || data;
        setProducts(isHome ? allProducts.slice(0, 5) : allProducts);
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
              navigation: false,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 40,
              navigation: true,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem
                productId={product.id}
                image={product.image}
                name={product.name}
                enrollEnd={
                  product.enrollment_end
                    ? `Hết hạn vào: ${product.enrollment_end}`
                    : ''
                }
                onClick={() => handleProductClick(product)}
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
                key={product.id} // ✅ dùng product.id thôi
              >
                <ProductItem
                  productId={product.id}
                  image={product.image}
                  name={product.name}
                  enrollEnd={
                    product.enrollmentEnd
                      ? `Hết hạn vào: ${product.enrollmentEnd}`
                      : '  '
                  }
                  onClick={() => handleProductClick(product)}
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
