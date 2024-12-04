import DefaultLayout from '../../components/Layout/Default Layout';
import Button from '../../components/Button';
import styles from '../../pages/account.module.scss';
import { useState, useContext } from 'react';
import { AuthContext } from '../../components/AccountContext';

const LogIn = () => {
  const { login } = useContext(AuthContext);
  const [user, setuser] = useState([]);
  const userAccount = {
    username: 'buiducviet',
    password: 'buiducviet',
  };
  return (
    <DefaultLayout>
      <section className={`container ${styles.logInWrapper}`}>
        <div className={styles.logInform}>
          <div className={`${styles.titleWrapper}`}>
            <p className={styles.title}>Đăng nhập</p>
            <p>Chào mừng bạn quay lại</p>
          </div>
          <div className={styles.fieldForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="">Email</label>
              <input type="text" className={`form-control`} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="">Mật khẩu</label>
              <input type="password" className={`form-control`} />
            </div>
          </div>
          <div className={styles.loginCtr}>
            <div className={styles.savePass}>
              <input type="checkbox" />
              <label htmlFor="">Lưu mật khẩu</label>
            </div>
            <div className={styles.forgotPass}>
              <p style={{ color: '#6941C6' }}>Quên mật khẩu</p>
            </div>
          </div>
          <Button title="Đăng nhập" className={styles.ctaBtn} />
        </div>
      </section>
    </DefaultLayout>
  );
};
export default LogIn;
