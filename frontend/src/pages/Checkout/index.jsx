import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './checkout.module.scss';
import { CartContext } from '../../components/MiniCart/CartContext';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '../../assets/image/Images';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import axios from 'axios';
const Checkout = () => {
  const {
    cartItems,
    removeCart,
    setCartItems,
    totalItems,
    totalPrice,
    formatPrice,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log('File uploaded:', file);
  };
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    voucher: '',
  });
  const isFormValid = userData.name && userData.phone && userData.email;

  const handleClick = async () => {
    if (!userData.name || !userData.phone || !userData.email) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    try {
      const token = localStorage.getItem('authToken');
      const res = await axios.post(
        'http://localhost:3000/checkout/confirm',
        {
          customer: userData,
          items: cartItems.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
          })),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log('Checkout thành công:', res.data);
      setCartItems([]);
      navigate('/thank-you');
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value || null,
    }));
  };

  const discount = {
    discount: 10,
    discountType: 'percentage',
  };

  // Tính toán giảm giá
  let discountAmount = 0;
  if (discount.discountType === 'percentage') {
    discountAmount = Math.round((totalPrice * discount.discount) / 100); // Tính chính xác giảm giá
  } else if (discount.discountType === 'fixed') {
    discountAmount = Number(discount.discount);
  }
  const finalPrice = totalPrice - discountAmount;
  return (
    <DefaultLayout>
      <section className={styles.checkOut}>
        <div className="container">
          <div className={styles.innerWrapper}>
            <div className={styles.heading1}>
              <h1>Thông tin và thanh toán</h1>
            </div>
            <div className={styles.listOrders}>
              {cartItems.map((item) => (
                <li key={item.productId} className={styles.cartItem}>
                  <div className={styles.img} style={{ width: '100px' }}>
                    <img src={item.product?.image} alt="" />
                  </div>
                  <div className={styles.info}>{item.product?.name}</div>
                  <div className={styles.price}>
                    {`${(item.product?.price * 24000).toLocaleString(
                      'vi-VN',
                    )}.`}{' '}
                    VND
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
            <div className={styles.customerInfo}>
              <div className={styles.inner}>
                <div className={styles.heading2}>
                  <p>Thông tin khách hàng</p>
                </div>
                <div className={styles.detailsInfo}>
                  <div className={styles.grid}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="">Họ tên *</label>
                      <input
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        value={userData.name}
                        className="form-control"
                        placeholder="Điền họ tên"
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="">Số điện thoại *</label>
                      <input
                        className="form-control"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        placeholder="Điền số điện thoại"
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="">Email *</label>
                    <input
                      className="form-control"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      placeholder="Điền email"
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="">Voucher khuyến mãi </label>
                    <div className={styles.voucherInputs}>
                      <input
                        type="text"
                        className={`form-control ${styles.voucherInput}`}
                        placeholder="Điền voucher"
                        onChange={handleInputChange}
                        value={userData.voucher}
                        name="voucher"
                      />
                      <button>Áp dụng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.orderFigures}>
              <div className={styles.inner}>
                <ul className={styles.table}>
                  <li className={styles.tableRow}>
                    <p>Số lượng sản phẩm</p>
                    <span>{totalItems}</span>
                  </li>
                  <li className={styles.tableRow}>
                    <p>Tổng tiền ( Tạm tính)</p>
                    <span>{formatPrice} VND</span>
                  </li>
                  <li className={styles.tableRow}>
                    <p>Giảm giá</p>
                    <span>{discountAmount} VND</span>
                  </li>

                  <li className={styles.tableRow}>
                    <p>Phương thức thanh toán </p>
                    <span>Chuyển khoản</span>
                  </li>
                </ul>
                <ul>
                  <li className={styles.total}>
                    <p>TỔNG TIỀN</p>
                    <span style={{ color: '#FF0000', fontWeight: '700' }}>
                      {finalPrice.toLocaleString('vi-VN')}VND
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.qrWrapper}>
              <div className={styles.inner}>
                <ul>
                  <li>
                    <p className={styles.heading}> Thanh toán</p>
                  </li>
                </ul>
                <div className={styles.qrCode}>
                  <p className="text-center mt-5">Quét mã để thanh toán</p>
                  <div className={`${styles.bank} d-flex`}>
                    <img src={Images.bidv} alt="" />
                    <img src={Images.vnpay} alt="" />
                    <img src={Images.momo} alt="" />
                  </div>
                  <div className={styles.qrDetails}>
                    <img src={Images.qr} alt="" />
                  </div>
                  <div className={styles.qrInfo}>
                    <p>Bùi Đức Việt</p>
                    <p>1021230058</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.uploadWrapper}>
              <div className={styles.inner}>
                <p>Ảnh xác nhận</p>
                <input
                  name="file"
                  type="file"
                  onChange={handleFileUpload}
                  value={userData.file}
                />
              </div>
            </div>

            <Button
              title="Xác nhận đã thanh toán"
              className={styles.ctaBtnConfirm}
              onClick={handleClick}
              disabled={!isFormValid}
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};
export default Checkout;
