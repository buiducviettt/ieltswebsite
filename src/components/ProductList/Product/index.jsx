/* eslint-disable react/prop-types */
import Button from '../../Button';
import styles from '../../ProductList/product.module.scss';

const ProductItem = ({ image, name, desc, enrollEnd }) => {
  return (
    <div className={styles.courseItem}>
      <div className={styles.courseImg}>
        <img src={image} alt="" />
      </div>
      <div className={`${styles.content} mt-5`}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.shortdesc}>{enrollEnd}</p>
        <p>{desc}</p>
        <Button title="Đăng ký học" className={styles.btn} />
      </div>
    </div>
  );
};
export default ProductItem;
