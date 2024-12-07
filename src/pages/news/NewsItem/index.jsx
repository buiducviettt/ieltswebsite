import styles from '../../news/new.module.scss';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';

const Item = ({ title, description, image, link }) => {
  return (
    <div className={`${styles.newsItem}`}>
      <Link to={link}>
        <div className={styles.img}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p>{description}</p>
          <Button title="Xem chi tiết" className={styles.btn} />
        </div>
      </Link>
    </div>
  );
};

export default Item;
