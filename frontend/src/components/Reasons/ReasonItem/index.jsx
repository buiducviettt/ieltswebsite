import styles from '../../Reasons/reason.module.scss';
import Images from '../../../assets/image/Images';
import 'animate.css';
const ReasonItem = ({ title, desc }) => {
  return (
    <div className={`${styles.itemWrapper} ${styles.shineEffect}`}>
      <div className={styles.inner}>
        <div className={styles.icon}>
          <img src={Images.iconDoc} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default ReasonItem;
