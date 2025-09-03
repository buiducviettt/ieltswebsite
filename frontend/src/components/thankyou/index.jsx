import DefaultLayout from '../Layout/Default Layout';
import Images from '../../assets/image/Images';
import styles from '../../pages/Checkout/checkout.module.scss';
import Button from '../Button';
const ThankYouPage = () => {
  return (
    <DefaultLayout>
      <div className={`container ${styles.thankYou}`}>
        <div className={styles.inner}>
          <div className={styles.img}>
            <img src={Images.thankyou} alt="" />
          </div>
          <div className={styles.content}>
            <h1>CẢM ƠN BẠN ĐÃ MUA HÀNG</h1>
            <p>
              Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Hãy cùng học ngay bây
              giờ nhé!
            </p>
            <Button title="Học ngay" className={styles.ctaBtn} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default ThankYouPage;
