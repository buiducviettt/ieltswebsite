import ProductItem from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../ProductList/product.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList({ isHome }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    // Điều hướng tới trang chi tiết sản phẩm với productId
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
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
          navigation
          pagination={{ clickable: true }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.course_id}>
              <ProductItem
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
              <div className="col col-md-3" key={product.id}>
                <ProductItem
                  key={product.course_id}
                  onClick={() => handleProductClick(product.id)}
                  image={product.image}
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
