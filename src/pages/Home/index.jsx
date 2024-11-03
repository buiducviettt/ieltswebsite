import DefaultLayout from '../../components/Layout/Default Layout';
import HomeBanner from './HomeBanner';
import TeacherList from '../../components/TeacherList';
import styles from '../Home/home.module.scss';
// import Images from '../../assets/image/Images';
const Home = () => {
  return (
    <DefaultLayout>
      <HomeBanner />
      <div className={`${styles.aboutTeacher} container mt-5`}>
        <div className={styles.inner}>
          <div className={styles.title}>
            <span className={styles.yellow}>100%</span>
            <h1>
              GIÁO VIÊN ĐẠT{' '}
              <span style={{ color: '#2563EB' }}> 8.0 - 8.5 IELTS</span>
            </h1>
          </div>
          <TeacherList/>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
