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
// Hàm ngăn cuộn trang
const preventScroll = (e) => {
  e.preventDefault();
};

// Hàm khóa/unlock scroll
const disableScrollEvents = () => {
  window.addEventListener('scroll', preventScroll, { passive: false });
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
};

const enableScrollEvents = () => {
  window.removeEventListener('scroll', preventScroll);
  window.removeEventListener('wheel', preventScroll);
  window.removeEventListener('touchmove', preventScroll);
};

const MenuMobile = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  let lastScrollY = window.scrollY;
  // Khi isOpen thay đổi, thêm/xóa sự kiện scroll
  useEffect(() => {
    if (isOpen || cartOpen) {
      disableScrollEvents();
    } else {
      enableScrollEvents();
    }
  }, [isOpen, cartOpen]);
  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu and enable scroll
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
      <div className={cx('menu-mobile-inner')}>
        {/* Hamburger Button */}
        <button className={cx('hamburger')} onClick={toggleMenu}>
          <span className={cx('bar')}></span>
          <span className={cx('bar')}></span>
          <span className={cx('bar')}></span>
        </button>

        {/* LOGO */}
        <Link to="/">
          <img src={Images.logo} alt="" />
        </Link>

        <div
          className={cx('mobile-icon', 'd-flex', 'align-items-center', 'gap-4')}
        >
          <div className={cx('hd-icon', 'cart-icon')}>
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={() => setCartOpen(true)}
            />
            {cartOpen && (
              <MiniCart isOpen={cartOpen} isClose={() => setCartOpen(false)} />
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
