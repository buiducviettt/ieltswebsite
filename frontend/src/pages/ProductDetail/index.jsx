import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from './detail.module.scss';
import DefaultLayout from '../../components/Layout/Default Layout';
import ReactStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import ReasonList from '../../components/Reasons';
import Testimonials from '../../components/Testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Images from '../../assets/image/Images';
import FeedbackItem from '../../components/Feedback Item';
import { useInView } from 'react-intersection-observer';
import 'swiper/css/navigation';
import ContactForm from '../../components/contactform';
import { useContext } from 'react';
import { CartContext } from '../../components/MiniCart/CartContext';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const view = params.get('view');
  const [isPurchased, setIsPurchased] = useState(false);
  const [product, setProducts] = useState({});
  const [noti, setNoti] = useState('');
  const handleLearn = () => {
    console.log('Chuyển hướng sang trang Khoá học');
    // Chuyển hướng sang trang khoá học
    navigate(`/product/${productId}/view?view=learn`);
    // Thực hiện hành động khi đã mua khoá học
  };
  // kiểm tra khóa học đã mua hay chưa thông qua get request
  useEffect(() => {
    const fetchPurchased = async () => {
      const token = localStorage.getItem('authToken');
      if (!token || !product.id) return;
      try {
        const res = await axios.get(
          'http://localhost:3000/checkout/purchased',
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        console.log('res.data', res.data);
        const list = res.data || [];
        const found = list.find((item) => item.productId === product.id);
        console.log('found', found);
        setIsPurchased(!!found);
      } catch (error) {
        console.error('Lỗi trong quá trình lấy sp đã mua', error);
      }
    };

    fetchPurchased();
  }, [product.id]);
  const { addToCart } = useContext(CartContext);
  const { ref, inView } = useInView({
    threshold: 0.5, // Kích hoạt khi 50% section xuất hiện` 1
    triggerOnce: true, // Chỉ kích hoạt một lần
  });

  useEffect(() => {
    const fetchURL = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products/${productId}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        console.log('data chi tiết product', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchURL();
  }, [productId]);
  const handleClick = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setNoti(
        'bạn chưa đăng nhập , Hệ thống tự chuyển trong 3s về trang đăng nhập ',
      );
      setTimeout(() => {
        setNoti('');
        navigate('/login');
      }, 3000);

      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/cart/add/${product.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // ✅ gửi token cho BE
        },
      });
      const data = await res.json();
      console.log('Cart updated:', data);
      if (!res.ok) {
        throw new Error('Không thể thêm vào giỏ hàng');
      }
      addToCart(product.id);
      setNoti('Sản phẩm đã được thêm vào giỏ hàng!');
      // Ẩn thông báo sau 3 giây
      setTimeout(() => {
        setNoti('');
      }, 3000);
    } catch (err) {
      console.error('Lỗi:', err);
      setNoti('Thêm vào giỏ hàng thất bại!');
    }
  };

  const price = product.price * 24000; // Giá nhân với 24000
  const formattedPrice = price.toLocaleString('vi-VN');
  return (
    <DefaultLayout>
      {view === 'learn' && <h1>Hello</h1>}
      {!view && (
        <div className={styles.productDetail}>
          <div className="container">
            <div className="row">
              <div className={`col col-md-8 ${styles.productWrapper}`}>
                <div className={styles.productInner}>
                  <div className={styles.productImg}>
                    {product.image && (
                      <img src={product.image} alt={product.title} />
                    )}
                  </div>
                  <h1>{product.name}</h1>
                </div>
                <div
                  className={`${styles.ratingAndInfo} d-flex justify-content-between align-items-center`}
                >
                  <div className={styles.ratingWrapper}>
                    {product.rating && (
                      <ReactStars
                        count={5} // Hiển thị 5 ngôi sao
                        value={product.rating.rate} // Giá trị rating ban đầu
                        size={30} // Kích thước mỗi ngôi sao
                        activeColor="#ffd700" // Màu sắc của ngôi sao được chọn
                        isHalf={true} // Cho phép hiển thị nửa sao
                        edit={false}
                      />
                    )}
                    <p>{product.rating?.rate || 0}</p>
                    <p>{product.rating?.count || 0} reviews</p>
                  </div>
                  <div className={`${styles.info} `}>
                    <ul className="d-flex flex-direction-row align-items-center">
                      <li>200 câu hỏi</li>
                      <li>340 đã trải nghiệm</li>
                      <li>240 phút giờ học</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`col col-md-4  ${styles.productInfoWrapper}  `}>
                <div className={styles.wrapper}>
                  <div className={styles.inner}>
                    <h1 style={{ color: '#DC2626' }}>{formattedPrice}đ</h1>
                    <div className={styles.productInfo}>
                      <h2
                        style={{ fontWeight: '700' }}
                        className={styles.title}
                      >
                        Thông tin khoá học
                      </h2>
                      <ul className={styles.listInfo}>
                        <li className={styles.listDetail}>
                          <div className={styles.icon}>
                            <FontAwesomeIcon
                              icon={faPersonChalkboard}
                              style={{ color: '#eeb404' }}
                            />
                          </div>
                          <div className={styles.detail}>
                            <span>Cấp độ khoá học:</span>
                            <p>IELTS 5.5+</p>
                          </div>
                        </li>
                        <li className={styles.listDetail}>
                          <div className={styles.icon}>
                            <FontAwesomeIcon
                              icon={faPersonChalkboard}
                              style={{ color: '#eeb404' }}
                            />
                          </div>
                          <div className={styles.detail}>
                            <span>Giảng viên:</span>
                            <p>IELTS 5.5+</p>
                          </div>
                        </li>
                        <li className={styles.listDetail}>
                          <div className={styles.icon}>
                            <FontAwesomeIcon
                              icon={faPersonChalkboard}
                              style={{ color: '#eeb404' }}
                            />
                          </div>
                          <div className={styles.detail}>
                            <span>Bài học:</span>
                            <p>240 bài</p>
                          </div>
                        </li>
                        <li className={styles.listDetail}>
                          <div className={styles.icon}>
                            <FontAwesomeIcon
                              icon={faPersonChalkboard}
                              style={{ color: '#eeb404' }}
                            />
                          </div>
                          <div className={styles.detail}>
                            <span>Thời gian:</span>
                            <p>15h30 phút</p>
                          </div>
                        </li>
                        <li className={styles.listDetail}>
                          <div className={styles.icon}>
                            <FontAwesomeIcon
                              icon={faPersonChalkboard}
                              style={{ color: '#eeb404' }}
                            />
                          </div>
                          <div className={styles.detail}>
                            <span>Cập nhật:</span>
                            <p>4 ngày trước</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {isPurchased ? (
                      <Button
                        title="Học ngay"
                        className={styles.btn}
                        onClick={handleLearn}
                      />
                    ) : (
                      <Button
                        title="Mua Ngay"
                        className={styles.btn}
                        onClick={handleClick}
                      />
                    )}

                    {noti && <div className="notification">{noti}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className={styles.reasonWrapper}>
            <div className="container">
              <div className={styles.inner}>
                <h1 className={styles.heading}>ƯU ĐIỂM KHÓA HỌC </h1>
                <h1 className={styles.heading} style={{ color: '#fecd0e' }}>
                  5.5+ IELTS
                </h1>
                <ReasonList />
                <ReasonList />
              </div>
            </div>
          </section>
          <section ref={ref} className={styles.achieve}>
            <div className="container">
              <div className={styles.inner}>
                <h1 className={styles.heading}>
                  BẠN ĐƯỢC GÌ{' '}
                  <span style={{ color: '#fecd0e' }}>
                    {inView && (
                      <Typewriter
                        words={[' SAU KHÓA HỌC']}
                        loop={1}
                        typeSpeed={100}
                        deleteSpeed={50}
                        cursor
                        cursorStyle="|"
                      />
                    )}
                  </span>
                </h1>
                <ul className={`mt-5 ${styles.achieveTable}`}>
                  <li className={styles.achieveList}>
                    <div className={styles.achieveDetails}>
                      <h2>
                        <span style={{ color: '#fecd0e' }}>01. </span>
                        Nâng cao
                      </h2>
                      <div className={styles.content}>
                        <p>
                          Bằng cấp IELTS giúp bạn nổi bật hơn khi xin việc, đặc
                          biệt tại các công ty đa quốc gia và tổ chức quốc tế,
                          tạo điều kiện phát triển sự nghiệp và tăng cơ hội
                          thăng tiến.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.achieveList}>
                    <div className={styles.achieveDetails}>
                      <h2>
                        <span style={{ color: '#fecd0e' }}>02. </span>
                        Tự tin
                      </h2>
                      <div className={styles.content}>
                        <p>
                          hóa học giúp bạn làm quen với các ngữ cảnh và cách sử
                          dụng tiếng Anh trong giao tiếp hàng ngày, giúp bạn tự
                          tin khi nói chuyện với người nước ngoài, đi du lịch
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.achieveList}>
                    <div className={styles.achieveDetails}>
                      <h2>
                        <span style={{ color: '#fecd0e' }}>03. </span>
                        Phát triển
                      </h2>
                      <div className={styles.content}>
                        <p>
                          Bằng cấp IELTS giúp bạn nổi bật hơn khi xin việc, đặc
                          biệt tại các công ty đa quốc gia và tổ chức quốc tế,
                          tạo điều kiện phát triển sự nghiệp và tăng cơ hội
                          thăng tiến.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className={`${styles.tesimonials} product_page_swiper`}>
            <h1 className={styles.heading}>BẢNG VÀNG THÀNH TÍCH</h1>
            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={40} // Khoảng cách giữa các slide
              centeredSlides={true}
              breakpoints={{
                0: {
                  navigation: false,
                  slidesPerView: 1, // Hiển thị 2 slide trên màn hình nhỏ
                  spaceBetween: 20, // Khoảng cách giữa các slide trên mobile
                },
                768: {
                  slidesPerView: 2, // Hiển thị 4 slide trên màn hình lớn hơn
                  spaceBetween: 40,
                  navigation: false, // Khoảng cách giữa các slide trên desktop
                },
                992: {
                  slidesPerView: 5, // Hiển thị 4 slide trên màn hình lớn hơn
                  spaceBetween: 40,
                  navigation: true,
                },
              }}
            >
              <SwiperSlide>
                <Testimonials
                  name="Bùi Đức Việt"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  course="Khoá Ielts K14"
                  score="8.5"
                  image={Images.testimonial}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Testimonials
                  name="Bùi Đức Việt"
                  score="9.5"
                  image={Images.testimonial}
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  course="Khoá Ielts K14"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  name="Bùi Đức Việt"
                  score="9.5"
                  image={Images.testimonial}
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  course="Khoá Ielts K14"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  score="7.5"
                  image={Images.testimonial}
                  name="Bùi Đức Việt"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  course="Khoá Ielts K14"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  name="Bùi Đức Việt"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  course="Khoá Ielts K14"
                  image={Images.testimonial}
                  score="8.5"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  image={Images.testimonial}
                  name="Bùi Đức Việt"
                  score="8.5"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  course="Khoá Ielts K14"
                />
              </SwiperSlide>
            </Swiper>
          </section>
          <section className={styles.feedbackSec}>
            <div className="container">
              <h1>FEEDBACK HỌC VIÊN VÀ PHỤ HUYNH</h1>
              <div className="row">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={40}
                  navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    0: {
                      navigation: false,
                      slidesPerView: 1, // Hiển thị 2 slide trên màn hình nhỏ
                      spaceBetween: 20, // Khoảng cách giữa các slide trên mobile
                    },
                    768: {
                      slidesPerView: 2, // Hiển thị 4 slide trên màn hình lớn hơn
                      spaceBetween: 40,
                      navigation: false, // Khoảng cách giữa các slide trên desktop
                    },
                    992: {
                      slidesPerView: 3, // Hiển thị 4 slide trên màn hình lớn hơn
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
          <section>
            <ContactForm />
          </section>
        </div>
      )}
    </DefaultLayout>
  );
};

export default ProductDetail;
