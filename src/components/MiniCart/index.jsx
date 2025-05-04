import styles from './minicart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import Button from '../Button';

// eslint-disable-next-line react/prop-types
const MiniCart = ({ isOpen, isClose }) => {
  const { cartItems, removeCart, formatPrice } = useContext(CartContext);

  if (!isOpen) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.cartOverlay} onClick={isClose}></div>
      <div className={styles.miniCart}>
        <div className={styles.inner}>
          <div className={`${styles.header} d-flex align-items-center`}>
            <h2>GIỎ HÀNG</h2>
            <FontAwesomeIcon icon={faX} onClick={isClose} />
          </div>
          <ul>
            {cartItems.length === 0 ? (
              <span style={{ fontSize: '2rem' }}>
                CHƯA CÓ SẢN PHẨM TRONG GIỎ
              </span>
            ) : (
              <>
                <div className={styles.listOrders}>
                  {cartItems.map((item) => (
                    <li key={item.id} className={styles.cartItem}>
                      <div className={styles.img} style={{ width: '30%' }}>
                        <img src={item.image} alt="" />
                      </div>
                      <div className={styles.info}>
                        {item.title} - {item.quantity} x{' '}
                        {`${(item.price * 24000).toLocaleString('vi-VN')}.`} VND
                      </div>
                      <FontAwesomeIcon
                        icon={faX}
                        onClick={() => {
                          removeCart(item.id);
                        }}
                      />
                    </li>
                  ))}
                </div>
                <div className={styles.totalPrice}>
                  <span style={{ fontSize: '2rem' }}>
                    Tổng tiền: {formatPrice}VND
                  </span>
                  <Button
                    title="Thanh toán"
                    className={styles.cta}
                    to="/checkout"
                  />
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
