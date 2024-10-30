/* eslint-disable no-irregular-whitespace */
import Button from '../../../components/Button';
import styles from '../../Home/home.module.scss';
import Image from '../../../assets/image/Images';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import { useEffect } from 'react';
import Cloud from '../../../components/Cloud';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HomeBanner = () => {
  useEffect(() => {
    AOS.init();
    // Kích hoạt Splitting cho tất cả các phần tử có data-splitting
    Splitting();
  }, []);
  return (
    <div className={styles.BannerWrapper}>
      <div className={styles.imgCloud}>
        <img src={Image.cloud} alt="" />
      </div>
      <div className={styles.cloudWrapper}>
        <Cloud className={styles.cloud} />
      </div>

      <div className="container">
        <div className={styles.inner}>
          <div className="row">
            <div
              className="col-12 col-md-6"
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className={styles.BannerText}>
                <h1 data-splitting="chars">HỌC IELTS CŨNG CẦN​ CHIẾN THUẬT</h1>
                <p>
                  IELTS Tactics – Mang đến những trải nghiệm mới lạ và hiệu quả
                  chân thực qua Chương trình luyện thi ứng dụng phương pháp ESA
                  chuyên nghiệp hàng đầu dành riêng cho Học sinh, Sinh viên Việt
                  Nam!
                </p>
                <Button title="Thi thử" className={styles.bannerButton} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.rightInner}>
                <img src={Image.Bag} alt="" className={styles.bagShake} />
                <div className={styles.ecclipse}>
                  <img src={Image.ecclipse} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
