/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Button from '../../Button';
import styles from '../../ProductList/product.module.scss';

const ProductItem = ({ productId, image, name, desc, enrollEnd, onClick }) => {
  const [isPurchased, setIsPurchased] = useState(false);
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('purchasedCourses'));
    const foundPurchased = storedCourses.find(
      (course) => course.id === productId,
    );
    if (foundPurchased) {
      setIsPurchased(true); // Đã mua khoá học
    } else {
      setIsPurchased(false); // Chưa mua khoá học
    }
  }, [productId]);
  return (
    <div className={styles.courseItem} onClick={onClick}>
      <div className={styles.courseImg}>
        <img src={image} alt="" />
      </div>
      <div className={`${styles.content} mt-5`}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.shortdesc}>{enrollEnd}</p>
        <p>{desc}</p>
        {isPurchased ? (
          <Button title="Học ngay" className={styles.btn} />
        ) : (
          <Button title="Đăng ký học" className={styles.btn} />
        )}
      </div>
    </div>
  );
};
export default ProductItem;
