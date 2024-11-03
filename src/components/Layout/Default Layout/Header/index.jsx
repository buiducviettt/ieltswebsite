import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../Button';
import Images from '../../../../assets/image/Images';
import { useEffect, useState } from 'react';
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header  className={`${styles.header} ${isScroll ? styles.scroll : ''}`}>
      <div className={styles.topHeader}>
        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <div className={styles.topHeaderLeft}>
                <Link to="/">
                  <div className={styles.topHeaderIcon}>
                    <img src={Images.phone} alt="" />
                    034 889 5441
                  </div>
                </Link>
                <Link to="/">
                  <div className={styles.topHeaderIcon}>
                    <img src={Images.mail} alt="" />
                    center.ieltstactics@gmail.com
                  </div>
                </Link>
                <Link to="/">
                  <div className={styles.topHeaderIcon}>
                    <img src={Images.faq} alt="" />
                    FAQs
                  </div>
                </Link>
              </div>
            </div>
            <div className="col col-md-6">
              <div className={styles.topHeaderRight}>
                <Link to="/">Tin tức</Link>
                <Link to="/">Chính sách</Link>
                <Link to="/"> Về chúng tôi</Link>
                <Link to="/"> Liên hệ</Link>
                <Link to="/">
                  <div className={styles.topHeaderIcon}>
                    <img src={Images.account} alt="" />
                    Đăng nhập
                  </div>{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container  ${styles.navBar}`}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={Images.logo} alt="" />
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
            <Button className={styles.buttonCTA} title="Tư vấn" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
