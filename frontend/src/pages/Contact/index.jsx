import DefaultLayout from '../../components/Layout/Default Layout';
import ContactBox from './box';
import styles from './contact.module.scss';
import Images from '../../assets/image/Images';
const Contact = () => {
  return (
    <DefaultLayout>
      <div className={styles.banner}>
        <div className={styles.imgWrapper}>
          <img src={Images.contactBanner} alt="" />
        </div>
        <div className={`container ${styles.bannerText}`}>
          <h1 style={{ color: 'white' }}>THÔNG TIN LIÊN HỆ</h1>
        </div>
      </div>
      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.contactBoxWrapper}>
          <div className="row">
            <div className="col-12 col-md-3">
              <ContactBox
                title="Liên hệ"
                image={Images.icon1}
                desc1="Speak to our friendly team."
                desc2="center.ieltstactics@gmail.com"
              />
            </div>
            <div className="col-12 col-md-3">
              <ContactBox
                title="Hỗ trợ"
                image={Images.icon2}
                desc1="We’re here to help."
                desc2="center.ieltstactics@gmail.com"
              />
            </div>
            <div className="col-12 col-md-3">
              <ContactBox
                title="Cơ sở "
                image={Images.icon3}
                desc1="Visit our office HQ."
                desc2="435 Quang Trung, Q. Hà Đông, TP. Hà Nội"
              />
            </div>
            <div className="col-12 col-md-3">
              <ContactBox
                title="Gọi ngay"
                image={Images.icon4}
                desc1="Mon-Fri from 8am to 5pm."
                desc2="+84 034 889 5441"
              />
            </div>
          </div>
        </div>
        <div className={`mt-5 ${styles.mapWrapper}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5428451883013!2d106.66768987570316!3d10.76967245931693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eddf4a11913%3A0x60d837f2a0019056!2sIelts%20Fighter!5e0!3m2!1svi!2s!4v1733909800215!5m2!1svi!2s"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Contact;
