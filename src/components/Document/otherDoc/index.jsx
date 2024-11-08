import styles from '../../Document/document.module.scss';
import Images from '../../../assets/image/Images';
const OrderDocument = ({ title }) => {
  return (
    <>
      <button className={styles.labelDoc}>
        <div className={styles.labelImg}>
          <img src={Images.iconDoc} alt="" />
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </button>
    </>
  );
};
export default OrderDocument;
