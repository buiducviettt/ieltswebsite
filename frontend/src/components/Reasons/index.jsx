import ReasonItem from './ReasonItem';
import styles from '../Reasons/reason.module.scss';

const ReasonList = ({ className }) => {
  return (
    <div className={`${styles.listWrapper} ${className} mt-5`}>
      <div className={`row`}>
        <div className="col-6 col-md-3">
          <ReasonItem
            title="Lộ trình tinh gọn"
            desc="Đề cao tính thực tiễn thực tế trong học tập và giảng dạy"
          />
        </div>
        <div className="col-6 col-md-3">
          <ReasonItem
            title="Lộ trình tinh gọn"
            desc="Đề cao tính thực tiễn thực tế trong học tập và giảng dạy"
          />
        </div>
        <div className="col-6 col-md-3">
          <ReasonItem
            title="Lộ trình tinh gọn"
            desc="Đề cao tính thực tiễn thực tế trong học tập và giảng dạy"
          />
        </div>
        <div className="col-6 col-md-3">
          <ReasonItem
            title="Lộ trình tinh gọn"
            desc="Đề cao tính thực tiễn thực tế trong học tập và giảng dạy"
          />
        </div>
      </div>
    </div>
  );
};
export default ReasonList;
