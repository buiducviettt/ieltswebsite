import DefaultLayout from '../../components/Layout/Default Layout';
import HomeBanner from './HomeBanner';
import TeacherList from '../../components/TeacherList';
import styles from '../Home/home.module.scss';
import Images from '../../assets/image/Images';
import CountUp from 'react-countup';
const Home = () => {
  return (
    <DefaultLayout>
      <HomeBanner />
      <div className={`${styles.aboutTeacher} container mt-5`}>
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
      <div className={`${styles.roadMap} container mt-5`}>
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
      <div className={`${styles.contact} mt-5`}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
