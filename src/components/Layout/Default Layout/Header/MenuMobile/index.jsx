import './menumb.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './menumb.module.scss';
import Images from '../../../../../assets/image/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import MiniCart from '../../../../MiniCart';

const cx = classNames.bind(styles);

// eslint-disable-next-line no-unused-vars, react/prop-types
const MenuMobile = ({ className }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleOpenCart = () => setCartOpen(true);
  const handleCloseCart = () => setCartOpen(false);
  let lastScrollY = window.scrollY;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={cx('menu-mobile-container', 'menuMobile', {
        hidden: !isVisible,
      })}
    >
      <div className={cx('menu-mobile-inner d-flex align-items-center gap-5 ')}>
        {/* Hamburger Button */}
        <button className={cx('hamburger')} onClick={toggleMenu}>
          <span className={cx('bar')}></span>
          <span className={cx('bar')}></span>
          <span className={cx('bar')}></span>
        </button>

        {/* LOGO */}
        <Link to="/">
          {' '}
          <img src={Images.logo} alt="" />
        </Link>

        <div
          className={cx(
            'mobile-icon', // lớp CSS chính của bạn
            'd-flex', // lớp tiện ích từ Bootstrap
            'align-items-center', // căn giữa theo chiều dọc
            'gap-4', // căn đều các phần tử giữa,
          )}
        >
          <div className={cx('hd-icon', 'cart-icon')}>
            <FontAwesomeIcon icon={faCartShopping} onClick={handleOpenCart} />
            {cartOpen && (
              <MiniCart isOpen={cartOpen} isClose={handleCloseCart} />
            )}
          </div>
          <div className={cx('hd-icon', 'search-icon')}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div
            className={cx('hd-icon', 'acount-icon')}
            style={{ background: 'black' }}
          >
            <Link to="/login">
              <img src={Images.account} alt="" />
            </Link>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && <div className={cx('overlay')} onClick={closeMenu}></div>}

      {/* Nav Bar */}
      <nav className={cx('nav-bar', { open: isOpen })}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/lesson" onClick={closeMenu}>
              Khóa học
            </Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={closeMenu}>
              Về chúng tôi
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
