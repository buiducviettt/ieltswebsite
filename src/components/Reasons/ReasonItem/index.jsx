import styles from '../../Reasons/reason.module.scss';
import Images from '../../../assets/image/Images';
const ReasonItem = ({ title, desc }) => {
  return (
    <div className={styles.itemWrapper}>
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
