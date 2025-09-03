import styles from '../../Contact/contact.module.scss';
const ContactBox = ({ image, title, desc1, desc2 }) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.inner}>
        <div className={styles.icon}>
          <img src={image} alt="" style={{ width: '20%' }} />
        </div>
        <div className={styles.content}>
          <span className={styles.title} style={{ fontWeight: '700' }}>
            {title}
          </span>
          <p>{desc1}</p>
          <p style={{ color: '#2563EB' }}>{desc2}</p>
        </div>
      </div>
    </div>
  );
};
export default ContactBox;
