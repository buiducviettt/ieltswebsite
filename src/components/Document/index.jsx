import styles from '../Document/document.module.scss';
import Images from '../../assets/image/Images';
import OrderDocument from './otherDoc/index';
const Document = () => {
  return (
    <div className={`container mt-5`}>
      <div className={styles.inner}>
        <div className={styles.firstDoc}>
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className={styles.documentImg}>
                <img src={Images.document} alt="" />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className={styles.content}>
                <h1>
                  Lộ trình tự học IELTS cho người mới bắt đầu đạt 7.0+ IELTS
                </h1>
                <p>
                  Hãy khám phá các chức năng chính và giao diện phần mềm khi thi
                  thử IELTS trên máy tính với Ielts Tatics qua các câu hỏi mẫu
                  của phần thi Nghe, Đọc, Viết.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.docWrapper}>
          <OrderDocument title="Listening" />
          <OrderDocument title="Speaking" />
          <OrderDocument title="Grammar" />
          <OrderDocument title="Vocabulary" />
          <OrderDocument title="Reading" />
          <OrderDocument title="Writing" />
        </div>
      </div>
    </div>
  );
};
export default Document;
