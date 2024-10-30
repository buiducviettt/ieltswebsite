import DefaultLayout from '../../components/Layout/Default Layout';
import HomeBanner from './HomeBanner';
import styles from './home.module.scss';
import Image from '../../assets/image/Images';
import Button from '../../components/Button';
import RocketAnimation from '../../components/Rocket';
import ProductList from '../../components/ProductList';
const Homepage = () => {
  return (
    <DefaultLayout>
      <HomeBanner />
      <RocketAnimation />
      <div className={`${styles.introduceWrapper} container`}>
        <div className={styles.inner}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className={`${styles.imgWrapper} `}>
                <div className={`${styles.imgInner} mt-5`}>
                  <img
                    src={Image.girl}
                    alt=""
                    className={`${styles.introImage}`}
                  />
                  <div className={styles.ideaRed}>
                    <img src={Image.red1} alt="" className={styles.red1} />
                    <img src={Image.red2} alt="" className={styles.red2} />
                    <img src={Image.red3} alt="" className={styles.red3} />
                  </div>
                  <div className={styles.head}>
                    <img src={Image.head} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md-6 mt-5">
              <div
                className={styles.textIntro}
                data-aos="flip-left"
                data-aos-once="true"
              >
                <h1 style={{ textTransform: 'uppercase' }}>
                  bạn chưa biết bắt đầu từ đâu?
                </h1>
                <p>
                  IELTS Tactics – Mang đến những trải nghiệm mới lạ và hiệu quả
                  chân thực qua Chương trình luyện thi ứng dụng phương pháp ESA
                  chuyên nghiệp hàng đầu dành riêng cho Học sinh, Sinh viên Việt
                  Nam!
                </p>
                <Button title="Thi thử" className={styles.bannerButton} />
              </div>
              <div className={styles.alienWrap}>
                <div className={styles.alienInner}>
                  <div className={styles.alien}>
                    <img src={Image.alien} alt="" />
                  </div>
                  <div className={styles.light}>
                    <img src={Image.light} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.skillWrapper}
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className={styles.uniqueImg}>
          <img src={Image.docquyen} alt="" />
        </div>
        <div className={`${styles.inner} container`}>
          <div className={`${styles.skillContent}`}>
            <h1>Bù khuyết kỹ năng qua bộ TÀI LIỆU</h1>
          </div>
          <div className={styles.imgStar1}>
            <img src={Image.star1} alt="" />
          </div>
          <div className={styles.imgStar2}>
            <img src={Image.star1} alt="" />
          </div>
          <div className={styles.imgStar3}>
            <img src={Image.star1} alt="" />
          </div>

          <div className={styles.ProductWrapper}>
            <ProductList />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Homepage;
