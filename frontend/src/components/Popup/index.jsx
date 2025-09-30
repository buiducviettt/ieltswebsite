import styles from './popup.module.scss';
import classname from 'classnames/bind';
const cx = classname.bind(styles);
const Popup = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={cx('popup-wrapper')} onClick={onClose}>
      <div className={cx('popup-overlay')}>
        <div className={cx('popup-container')}>
          <div className={cx('popup-header')}>
            <h2>{title}</h2>
            <button className={cx('popup-close')} onClick={onClose}>
              &times;
            </button>
          </div>
          <div className={cx('popup-content')}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
