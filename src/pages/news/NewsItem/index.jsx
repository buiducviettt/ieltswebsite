import styles from '../../news/new.module.scss';
import Images from '../../../assets/image/Images';
import Button from '../../../components/Button';
const Item = () => {
  return (
    <div className={styles.newsItem}>
      <div className={styles.img}>
        <img src={Images.new1} alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Demo</p>
        <p>
          Linear helps streamline software projects, sprints, tasks, and bug
          tracking. Here’s how to get started.
        </p>
        <Button title="Xem chi tiết" className={styles.btn} />
      </div>
    </div>
  );
};
export default Item;
