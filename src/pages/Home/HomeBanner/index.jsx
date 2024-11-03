import Button from '../../../components/Button';
import styles from '../../Home/home.module.scss';
import Images from '../../../assets/image/Images';
const HomeBanner = () => {
  return (
    <div className={`${styles.homeBanner}`}>
      <div className="container" style={{ padding: '50px  0' }}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.colLeftWrapper}>
              <div className={styles.content}>
                <div className={styles.textTitle}>
                  <h1 style={{ textTransform: 'uppercase' }}>
                    Chiến thuật <br />
                    <span className={styles.isHighlight}>
                      Luyện thi ielts{' '}
                    </span>{' '}
                    <br />
                    <p>Thông minh tại nhà</p>
                  </h1>
                  <p>
                    IELTS Tactics – Mang đến những trải nghiệm mới lạ và hiệu
                    quả chân thực qua Chương trình luyện thi ứng dụng phương
                    pháp ESA chuyên nghiệp hàng đầu dành riêng cho Học sinh,
                    Sinh viên Việt Nam!
                  </p>
                  <div className={styles.ctaBtns}>
                    <Button
                      title="Tư vấn lộ trình"
                      className={`${styles.ctaBtn1} btn btn-light`}
                    />
                    <Button
                      title="Thi thử Ielts"
                      className={`${styles.ctaBtn2} `}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.shape}>
                <img src={Images.shape} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.colRightWrapper}>
              <div className={`row ${styles.row}`}>
                <div className="col col-md-6">
                  <div className={styles.mainImg}>
                    <img src={Images.mainimg} alt="" />
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className={styles.thumbImgs}>
                    <div className={styles.thumbImg1}>
                      <img src={Images.thumbimg1} alt="" />
                    </div>
                    <div className={styles.thumbImg2}>
                      <img src={Images.thumbimg2} alt="" />
                    </div>
                    <div className={styles.shape}>
                      <img src={Images.shape} alt="" />
                    </div>
                  </div>
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
