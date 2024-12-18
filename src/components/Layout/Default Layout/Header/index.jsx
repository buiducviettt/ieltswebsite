import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../Button';
import Images from '../../../../assets/image/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useContext } from 'react';
import MiniCart from '../../../MiniCart';
import { AuthContext } from '../../../AccountContext';
import MenuMobile from './MenuMobile';

const Header = () => {
  const { user } = useContext(AuthContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleOpenCart = () => setCartOpen(true);
  const handleCloseCart = () => setCartOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <div>
        <header className={`${styles.header} ${isScroll ? styles.scroll : ''}`}>
          {/* Top Header */}
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
                    <Link to="/faq">
                      <div className={styles.topHeaderIcon}>
                        <img src={Images.faq} alt="" />
                        FAQs
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className={styles.topHeaderRight}>
                    <Link to="/news">Tin tức</Link>
                    <Link to="/">Chính sách</Link>
                    <Link to="/aboutus"> Về chúng tôi</Link>
                    <Link to="/contact"> Liên hệ</Link>
                    {user ? (
                      <Link to="/userinfo">
                        <div className={styles.topHeaderIcon}>
                          <img src={Images.account} alt="" />
                          Thông tin
                        </div>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <div className={styles.topHeaderIcon}>
                          <img src={Images.account} alt="" />
                          Đăng nhập
                        </div>
                      </Link>
                    )}
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      onClick={handleOpenCart}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navbar */}
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
              </div>
              <div className={styles.buttonWrapper}>
                <Button className={styles.buttonCTA} title="Thi thử" />
              </div>
            </div>
          </div>

          {cartOpen && <MiniCart isOpen={cartOpen} isClose={handleCloseCart} />}
        </header>
      </div>

      {/* Mobile Header */}
      <MenuMobile />
    </>
  );
};

export default Header;
