import styles from './styles.module.scss';
import Images from '../../assets/image/Images';
const Testimonials = ({ image, score, desc, name, course }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <p id={styles.name}>{name}</p>
          <p className={styles.course}>{course}</p>
        </div>
        <div className={styles.scoreWrapper}>
          <div className={styles.cloud}>
            <img src={Images.cloud} alt="" />
          </div>
          <p style={{ color: '#ffca4c', fontSize: '36px' }}>{score}</p>
        </div>
        <div className={styles.imgWrapper}>
          <img src={image} alt="" />
        </div>
        <div className={`${styles.desc} description`}>
          {' '}
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
