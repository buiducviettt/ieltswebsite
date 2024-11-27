import styles from './minicart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const MiniCart = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setisOpen] = useState(true);
  const handleClose = () => {
    setisOpen(false);
  };
  if (!isOpen) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartOverlay} onClick={handleClose}></div>
      <div className={styles.miniCart}>
        <div className={styles.inner}>
          <div className={`${styles.header} d-flex align-items-center`}>
            <h2>GIỎ HÀNG</h2>
            <FontAwesomeIcon icon={faX} onClick={handleClose} />
          </div>
          <ul>
            {cartItems.length === 0 ? (
              <span> chưa có sản phẩm trong giỏ</span>
            ) : (
              cartItems.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.quantity} x {item.price} VND
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MiniCart;
