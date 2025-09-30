/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Button from '../../Button';
import styles from '../../ProductList/product.module.scss';
import axios from 'axios';

const ProductItem = ({ productId, image, name, enrollEnd, onClick }) => {
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    const checkPurchased = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) return;
      try {
        const res = await axios.get(
          'http://localhost:3000/checkout/purchased',
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        // ✅ So sánh productId từ backend (string) với item.productId (string)
        const found = res.data.find((item) => item.productId === productId);
        setIsPurchased(!!found);
      } catch (error) {
        console.error('Lỗi khi check purchased:', error);
      }
    };
    checkPurchased();
  }, [productId]);

  return (
    <div className={styles.courseItem} onClick={onClick}>
      <div className={styles.courseImg}>
        <img src={image} alt={name} />
      </div>
      <div className={`${styles.content} mt-5`}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.shortdesc}>{enrollEnd}</p>
        {isPurchased ? (
          <Button onClick={onClick} title="Học ngay" className={styles.btn} />
        ) : (
          <Button
            onClick={onClick}
            title="Đăng ký học"
            className={styles.btn}
          />
        )}
      </div>
    </div>
  );
};

export default ProductItem;
