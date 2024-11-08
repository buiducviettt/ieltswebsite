import DefaultLayout from '../../components/Layout/Default Layout';
import HomeBanner from './HomeBanner';
import TeacherList from '../../components/TeacherList';
import styles from '../Home/home.module.scss';
import ProductList from '../../components/ProductList';
import Images from '../../assets/image/Images';
import CountUp from 'react-countup';
import Button from '../../components/Button';
import Document from '../../components/Document';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReasonList from '../../components/Reasons';
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Thời gian chạy hiệu ứng (tính bằng ms)
      once: true, // Hiệu ứng chỉ chạy một lần khi scroll
    });
    AOS.refresh();
  }, []);
  return (
    <DefaultLayout>
      <HomeBanner />
      <section>
        <div className={`${styles.aboutTeacher} container `} data-aos="fade-up">
          <div className={styles.inner}>
            <div className={styles.title}>
              <span>
                <CountUp
                  end={100}
                  duration={4}
                  suffix="%"
                  className={styles.yellow}
                />
              </span>
              <h1>
                GIÁO VIÊN ĐẠT{' '}
                <span style={{ color: '#2563EB' }}> 8.0 - 8.5 IELTS</span>
              </h1>
            </div>
            <TeacherList />
          </div>
        </div>
      </section>
      <section>
        <div className={`${styles.roadMap} container`} data-aos="fade-right">
          <div className={styles.inner}>
            <div className={styles.title}>
              <h1>
                LỘ TRÌNH CỦA
                <span style={{ color: '#FDD42A' }}> IELTS TATICS</span>
              </h1>
            </div>
            <div className={styles.roadMapImageWrapper}>
              <div className={`${styles.humanImg}`}>
                <img src={Images.human} alt="" />
                <div className={styles.arm}>
                  <img src={Images.arm} alt="" />
                </div>
              </div>
              <div className={styles.certify}>
                <img src={Images.certify} alt="" />
              </div>
              <div className={styles.roadMapImg}>
                <img src={Images.roadmap} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`${styles.contact} `}>
          <div className={`${styles.inner} container`}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className={styles.colImg}>
                  <img src={Images.phoneImg} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className={styles.contentWrapper}>
                  <div className={styles.inner}>
                    <div className={styles.title}>
                      <h1>
                        TƯ VẤN LỘ TRÌNH NGAY TẠI <br></br>
                        <span style={{ color: '#2563EB' }}> IELTS TATICS</span>
                      </h1>
                    </div>
                    <p>
                      Các khoá học của Ielts Tatics được biên soạn và trình bày
                      một cách khoa học nhất
                    </p>
                    <Button
                      title="Liên hệ tư vấn ngay!"
                      className={styles.ctaBtn}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className={`${styles.courseWrapper} container`}
          data-aos="fade-left"
        >
          <div className={styles.inner}>
            <div className={styles.title}>
              <h1>
                KHOÁ HỌC ONLINE
                <span style={{ color: '#2563EB' }}> NỔI BẬT</span>
              </h1>
              <Link to="/">
                <Button title="Xem tất cả" className={styles.showAllBtn} />
              </Link>
              <div className={styles.uniqueImg}>
                <img src={Images.unique} alt="" />
              </div>
            </div>
            <ProductList isHome={true} />
          </div>
        </div>
      </section>
      <section>
        <div
          className={`${styles.documentsWrapper} container`}
          data-aos="fade-right"
        >
          <div className={styles.inner}>
            <div className={styles.title}>
              <h1>
                KHO TÀI LIỆU
                <span style={{ color: '#2563EB' }}> TỰ HỌC IELTS</span>
              </h1>
              <div className={styles.uniqueImg}>
                <img src={Images.unique} alt="" />
              </div>
            </div>
            <Document />
          </div>
        </div>
      </section>
      <section>
        <div className={` ${styles.reasonWrapper}`}>
          <div className={`${styles.inner} container`}>
            <div className={styles.title}>
              <h1 style={{ color: 'white' }}>
                ĐẶC QUYỀN CHỈ CÓ TẠI
                <span style={{ color: '#FECD0E' }}> IELTS TATICS</span>
              </h1>
            </div>
            <ReasonList />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};
export default Home;
