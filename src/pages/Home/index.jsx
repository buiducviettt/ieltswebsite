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
            <CountUp end={100} duration={4} suffix="%">
              {({ countUpRef }) => (
                <span ref={countUpRef} className={styles.yellow}>
                  0
                </span>
              )}
            </CountUp>
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
              <div>
                <iframe
                  src="https://giphy.com/embed/n9Lxl5GiZM9GhwGnGE"
                  width="100%"
                  height="100%"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className={styles.roadMapImg}>
              <img src={Images.roadmap} alt="" />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
