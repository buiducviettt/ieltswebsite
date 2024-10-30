import Button from '../../Button';
import styles from '../../ProductList/product.module.scss';

const ProductItem = ({ title, desc, image }) => {
  return (
    <div
      className={styles.itemWrapper}
      data-aos="flip-left"
      data-aos-once="true"
      data-aos-offset="300"
    >
      <div className={styles.inner}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <Button title="Xem thêm" className={styles.showMoreBtn} />
        <div className="mt-3">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
