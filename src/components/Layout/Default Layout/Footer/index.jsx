import styles from '../../Default Layout/DefaultLayout.module.scss';
import Images from '../../../../assets/image/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="container mt-5">
      <div className={styles.logoWrapper}>
        <img src={Images.logo} alt="" />
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <div className={`${styles.content} mt-5`}>
            <h2 style={{ color: '#F59E0B', fontSize: '2.4rem' }}>
              Smarter . Faster . Better
            </h2>
            <p>
              IELTS Tactics – Trung tâm luyện thi IELTS đặt vấn đề chất lượng và
              trải nghiệm của học viên là trọng tâm mọi hoạt động. Chúng tôi tin
              rằng, bằng kinh nghiệm và tâm huyết, IELTS Tactics là môi trường
              tuyệt vời để bạn phát huy tối đa năng lực IELTS, tự tin thực hiện
              những khát vọng lớn lao hơn trong tương lai.
            </p>
          </div>
        </div>
        <div className="col col-md-3">
          <div className={`${styles.content} mt-5`}>
            <div className={styles.headings}>
              <h3>Thông tin</h3>
            </div>
            <ul>
              <li className={styles.footerLink}>
                <div className={styles.phoneImg}>
                  <img src={Images.phone} alt="" />
                </div>
                <p>034 889 5441</p>
              </li>
              <li className={styles.footerLink}>
                <div className={styles.mailImg}>
                  <img src={Images.mail} alt="" />
                </div>
                <p>center.ieltstactics@gmail.com</p>
              </li>
              <li>
                <h3>Theo dõi chúng tôi</h3>
                <div className={styles.socialIcons}>
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faYoutube} />
                  <FontAwesomeIcon icon={faTiktok} />
                </div>
              </li>
              <li className={styles.footerLink}></li>
              <li className={styles.footerLink}></li>
            </ul>
          </div>
        </div>
        <div className="col col-md-3">
          <div className={`${styles.content} mt-5`}>
            <div className={styles.headings}>
              <h3>Ielts Tatics</h3>
            </div>
            <ul>
              <li>
                <p>Về chúng tôi</p>
              </li>
              <li>
                <p>Chính sách</p>
              </li>
              <li>
                <p>Blog</p>
              </li>
              <li>
                <p>Liên hệ</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-md-3">
          <div className={`${styles.content} mt-5`}>
            <div className={styles.headings}>
              <h3>Services</h3>
            </div>
            <ul>
              <li>
                <p>Khóa học IELTS Tactics</p>
              </li>
              <li>
                <p>Thi thử IELTS Online</p>
              </li>
              <li>
                <p>Tư vấn lộ trình IELTS</p>
              </li>
              <li>
                <p>Tự học Ielts</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
