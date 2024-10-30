import styles from './Header.module.scss';
import Image from '../../../../assets/image/Images';
import { Link } from 'react-router-dom';
import Button from '../../../Button';
const Header = () => {
  return (
    <header>
      <div className={`container ${styles.navBar}`}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={Image.logo} alt="" />
          </div>
          <div className={styles.navLinks}>
            <Link to="" className={styles.navLink}>
              Lịch khai giảng
            </Link>
            <Link to="/" className={styles.navLink}>
              Khoá học
            </Link>
            <Link to="" className={styles.navLink}>
              Tài liệu IELTS
            </Link>
            <Link to="" className={styles.navLink}>
              Tự học IELTS
            </Link>
            <Link to="" className={styles.navLink}>
              Bộ tài khoản
            </Link>
          </div>
          <div className={styles.buttonWrapper}>
            <Button className={styles.buttonCTA} title="Thi thử" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
