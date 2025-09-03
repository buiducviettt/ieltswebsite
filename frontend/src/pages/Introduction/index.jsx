import DefaultLayout from '../../components/Layout/Default Layout';
import VideoBanner from './VideoBanner';
import Images from '../../assets/image/Images';
import styles from '../Introduction/aboutus.module.scss';
import Button from '../../components/Button';
import Partner from '../../components/Partner';
import ReasonList from '../../components/Reasons';
import Facilities from './Slider';
import FeedbackItem from '../../components/Feedback Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
const Introduction = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <DefaultLayout>
      <VideoBanner />
      <section className={styles.introWrapper}>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div
              className={`col-md-6 ${styles.contentWrapper}`}
              data-aos="fade-right"
            >
              <div className={styles.inner}>
                <div className={styles.content}>
                  <h1>IELTS TACTICS</h1>
                  <h2>
                    NƠI <span style={{ color: '#FECD0E' }}>CHẤT LƯỢNG</span>{' '}
                    KHẲNG ĐỊNH TẤT CẢ
                  </h2>
                  <p>
                    IELTS Tactics tự hào là đối tác luyện thi uy tín của IDP
                    Việt Nam (đơn vị tổ chức khảo thí IELTS chính thức tại VN).
                    Thương hiệu trực thuộc Công ty Cổ phần Giáo dục và Đào tạo
                    E-Tactics Việt Nam, được thành lập từ tháng 9/2021. IELTS
                    Tactics là Đơn vị tiên phong đào tạo IELTS tập trung chiến
                    thuật ứng dụng, hiện đã có mặt tại nhiều khu vực tại Hà Nội
                    như Hà Đông, Đống Đa, Long Biên…
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className={styles.teacherImg} data-aos="flip-right">
                <img src={Images.teacher1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.history}>
        <div className={styles.historyCtn}>
          <div className={styles.inner}>
            <div className="row">
              <div className="col-12 col-md-6 order-2 order-md-1 ">
                <div className={styles.imgWrapper} data-aos="flip-left">
                  <img src={Images.history} alt="" />
                </div>
              </div>
              <div
                className={`col-12 col-md-6 ${styles.contentWrapper} order-1 order-md-2 `}
                data-aos="fade-right"
              >
                <div className={styles.content}>
                  <h1>LỊCH SỬ HÌNH THÀNH</h1>
                  <span className={styles.line}></span>
                  <p>
                    IELTS Tactics ra đời trong bối cảnh thị trường IELTS bắt đầu
                    trở nên đặc biệt sôi nổi với số người đăng ký tham gia bài
                    thi IELTS trên thế giới gia tăng nhanh, khi tầm quan trọng
                    và tính ứng dụng của tấm bằng IELTS đã được nhận thức rõ
                    ràng và cấp thiết hơn rất nhiều. Bài thi IELTS được công
                    nhận là một trong những yêu cầu đầu vào của nhiều trường đại
                    học không chỉ ở Việt Nam mà còn ở nhiều nước trên thế giới.
                    IELTS cũng được sử dụng phổ biến cho mục đích xin visa và
                    quyền cư trú, định cư tại nhiều quốc gia lớn như Úc, Canada,
                    New Zealand hay Vương Quốc Anh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.teacherSection}>
        <div className={styles.teacherWrapper}>
          <div className="container">
            <div className="row">
              {isMobile ? (
                <Swiper
                  modules={[Autoplay]}
                  freeMode={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={4000}
                  loop={true}
                  className="order-2 mt-5"
                  slidesPerView={1}
                  spaceBetween={40}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div className={styles.Images1}>
                      <img src={Images.teacher2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.Images2}>
                      <img src={Images.teacher3} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                <div className={`col-3 col-md-6 ${styles.imgCol} `}>
                  <div className={styles.imgWrapper} data-aos="flip-right">
                    <div className={styles.Images1}>
                      <img src={Images.teacher2} alt="" />
                    </div>
                    <div className={styles.Images2}>
                      <img src={Images.teacher3} alt="" />
                    </div>
                  </div>
                </div>
              )}

              <div
                className={`col-3 col-md-6 ${styles.contentWrapper}`}
                data-aos="fade-left"
              >
                <div className={styles.content}>
                  <h1 className={styles.contentTitle}>ĐỘI NGŨ GIÁO VIÊN</h1>
                  <p>
                    Tất cả giáo viên của IELTS Tactics đều tốt nghiệp chuyên
                    ngành ngoại ngữ, từ các trường Đại học danh tiếng (Như Đại
                    học Ngoại thương, Đại học Kinh tế quốc dân…), hoặc từng là
                    du học sinh Mỹ, Đức… yêu cầu có chứng chỉ IELTS 8.0 trở lên
                    và có chứng chỉ giảng dạy chuyên nghiệp, có nhiều kinh
                    nghiệm trong việc giảng dạy IELTS cho học viên người Việt
                    Nam. Nhiều thầy cô của IELTS Tactics là khách mời quen thuộc
                    trên các chương trình phóng sự uy tín của VTV về các chủ đề
                    học thuật, giáo dục
                  </p>
                  <Button
                    className={styles.btn}
                    title="Xem profile giáo viên"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.facilitiesWrapper}>
        <Partner />
      </section>
      <section>
        <div className="container">
          <h1 className="text-center">NHỮNG CON SỐ ẤN TƯỢNG</h1>
          <div className={styles.numberWrapper}>
            <ReasonList className={styles.numberList} />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center">CƠ SỞ VẬT CHẤT</h1>
        </div>
        <Facilities className="mt-5" />
      </section>
      <section className={styles.method}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-2">
              <div className={styles.imgWrapper} data-aos="flip-left">
                <img src={Images.method} alt="" />
              </div>
            </div>
            <div
              className={`col-md-6 ${styles.contentWrapper1} order-1`}
              data-aos="fade-left"
            >
              <div className={`${styles.content} `}>
                <h1>
                  PHƯƠNG PHÁP{' '}
                  <span style={{ color: ' #FECD0E' }}> ĐÀO TẠO ESA </span>
                  ĐỘT PHÁ
                </h1>
                <p>
                  Với tinh thần không ngừng sáng tạo và liên tục cải tiến,
                  E-Tactics tự hào là đơn vị tiên phong áp dụng và phát triển
                  thành công PHƯƠNG PHÁP ĐÀO TẠO ESA đột phá Phương pháp ESA
                  giúp kích thích tư duy học viên dựa trên các giai đoạn tiếp
                  thu ngôn ngữ: Dẫn nhập – Học tập – Vận dụng thực tế 100% Giáo
                  viên được chuẩn hoá để tập trung đề cao chiến thuật ứng dụng
                  xuyên suốt quá trình giảng dạy, xây dựng vững chắc thói quen,
                  phương pháp và cách tiếp cận tiếng Anh chủ động ngay từ những
                  ngày đầu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.feedbackSec}>
        <div className="container">
          <h1>FEEDBACK HỌC VIÊN VÀ PHỤ HUYNH</h1>

          <div className="row">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={40}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  navigation: false,
                  slidesPerView: 1, // Hiển thị 2 slide trên màn hình nhỏ
                  spaceBetween: 20,
                  // Khoảng cách giữa các slide trên mobile
                },
                768: {
                  slidesPerView: 1, // Hiển thị 4 slide trên màn hình lớn hơn
                  spaceBetween: 40,
                  navigation: false, // Khoảng cách giữa các slide trên desktop
                },
                992: {
                  slidesPerView: 4, // Hiển thị 4 slide trên màn hình lớn hơn
                  spaceBetween: 40,
                  navigation: true,
                },
              }}
            >
              <div className="col-md-4">
                <SwiperSlide>
                  <FeedbackItem
                    avt={Images.student}
                    name="Đức Việt"
                    comment="Trung tâm quá tuyệt vời!!!!"
                  />
                </SwiperSlide>
              </div>

              <div className="col-md-4">
                <SwiperSlide>
                  <FeedbackItem
                    avt={Images.student}
                    name="Việt Bùi"
                    comment="Đáng để bỏ tiền ra học!!!!"
                  />
                </SwiperSlide>
              </div>
              <div className="col-md-4">
                <SwiperSlide>
                  <FeedbackItem
                    avt={Images.student}
                    name="Việt Bùi"
                    comment="Đáng để bỏ tiền ra học!!!!"
                  />
                </SwiperSlide>
              </div>

              <div className="col-md-4">
                <SwiperSlide>
                  <FeedbackItem
                    avt={Images.student}
                    name="Việt"
                    comment="Không có gì để chê!!!!"
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      <section className={styles.vision} data-aos="fade-in">
        <div className="container">
          <h1>TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.<br></br>{' '}
            Donec odio mollis nulla morbi dui cras convallis. Ligula luctus
            consectetur dapibus dapibus in diam hac nostra conubia. Nostra
            facilisi primis vehicula conubia torquent diam. Condimentum varius
            morbi sollicitudin urna libero lobortis. Porta lacus bibendum
            vulputate habitant velit eget. Cursus penatibus quam sociosqu
            ultricies pellentesque, purus libero tellus? Cursus hac senectus
            potenti vel eleifend dictum. Nibh ac parturient potenti dictumst
            tristique quam dignissim massa.
          </p>
          <div className={styles.imgWrapper}>
            <img src={Images.vision} alt="" />
          </div>
          <Button title="Xem thêm" className={styles.showMoreBtn} />
        </div>
      </section>
    </DefaultLayout>
  );
};
export default Introduction;
