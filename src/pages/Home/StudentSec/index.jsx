import styles from '../StudentSec/student.module.scss';
import Images from '../../../assets/image/Images';

const imgWrappers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const StudentSec = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className={styles.imgList}>
            <div className={styles.mansory}>
              {imgWrappers.map((index) => (
                <img
                  key={index}
                  src={Images.teacher}
                  alt=""
                  className={styles.img}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
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
    </div>
  );
};

export default StudentSec;
