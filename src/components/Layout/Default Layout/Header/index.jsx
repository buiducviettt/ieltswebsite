import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../Button';
import Images from '../../../../assets/image/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import MiniCart from '../../../MiniCart';
const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const handleOpenCart = () => setCartOpen(true);
  const handleCloseCart = () => setCartOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`${styles.header} ${isScroll ? styles.scroll : ''}`}>
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
                <Link to="/new">Tin tức</Link>
                <Link to="/">Chính sách</Link>
                <Link to="/"> Về chúng tôi</Link>
                <Link to="/"> Liên hệ</Link>
                <Link to="/login">
                  <div className={styles.topHeaderIcon}>
                    <img src={Images.account} alt="" />
                    Đăng nhập
                  </div>{' '}
                </Link>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  onClick={handleOpenCart}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container  ${styles.navBar}`}>
        <div className={styles.inner}>
          <Link to="/">
            <div className={styles.logo}>
              <img src={Images.logo} alt="" />
            </div>
          </Link>
          <div className={styles.navLinks}>
            <Link to="/aboutus" className={styles.navLink}>
              Giới thiệu
            </Link>
            <Link to="" className={styles.navLink}>
              Lịch khai giảng
            </Link>
            <Link to="/lesson" className={styles.navLink}>
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
      {cartOpen && <MiniCart isOpen={cartOpen} isClose={handleCloseCart} />}
    </header>
  );
};
export default Header;
