import styles from '../StudentSec/student.module.scss';
import Images from '../../../assets/image/Images';
import CircleDecor from '../../../components/CircleDecor';

const StudentSec = () => {
  return (
    <div className={styles.studentSec}>
      <div className="container">
        <div className="row">
          {/* Gallery */}
          <div className="col-6 col-md-6">
            <div className={styles.galleryWrapper}>
              <div className={`${styles.item} ${styles.item1}`}>
                <img src={Images.teacher} alt="Teacher" />
              </div>
              <div className={`${styles.item} ${styles.item2}`}>
                <img src={Images.teacher} alt="Group" />
              </div>
              <div className={`${styles.item} ${styles.item3}`}>
                <img src={Images.teacher} alt="Woman" />
              </div>
              <div className={`${styles.item} ${styles.item4}`}>
                <img src={Images.teacher} alt="Box" />
              </div>
              <div className={`${styles.item} ${styles.item5}`}>
                <img src={Images.teacher} alt="Team" />
              </div>
              <div className={`${styles.item} ${styles.item6}`}>
                <img src={Images.teacher} alt="Laptop" />
              </div>
              <div className={`${styles.item} ${styles.item7}`}>
                <img src={Images.teacher} alt="Smile" />
              </div>
              <div className={`${styles.item} ${styles.item8}`}>
                <img src={Images.teacher} alt="Smile" />
              </div>
              <div className={`${styles.item} ${styles.item9}`}>
                <img src={Images.teacher} alt="Smile" />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="col-6 col-md-6">
            <div className={styles.inner}>
              <div className={styles.content} data-aos="fade-left">
                <h1>
                  <span className={styles.number}>120.000+</span> HỌC VIÊN ĐỒNG
                  HÀNH
                </h1>
                <p>
                  Hàng loạt học viên cán đích thành công chỉ sau 1 lộ trình tại
                  Tactics!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.circleDecor}>
          <CircleDecor size="26px" color="#DC2626" />
          <CircleDecor size="18px" color="#F59E0B" />
          <CircleDecor size="8px" color="#3B82F6" />
          <CircleDecor size="8px" color="#3B82F6" />
          <CircleDecor size="8px" color="#3B82F6" />
          <CircleDecor size="8px" color="#3B82F6" />
        </div>
      </div>
    </div>
  );
};

export default StudentSec;
