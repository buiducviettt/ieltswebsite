import DefaultLayout from '../../components/Layout/Default Layout';
import Button from '../../components/Button';
import styles from '../../pages/account.module.scss';
import { useState, useContext } from 'react';
import { AuthContext } from '../../components/AccountContext';
import { useNavigate } from 'react-router-dom';
const LogIn = () => {
  // Quản lý trạng thái email và password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error, successMessage } = useContext(AuthContext); // Lấy hàm login và các thông tin từ context
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Gọi hàm login từ context để thực hiện đăng nhập
    const success = await login(email, password);
    if (success) {
      setTimeout(() => {
        navigate('/userinfo');
      }, 3000);
    }
  };

  return (
    <DefaultLayout>
      <section className={`container ${styles.logInWrapper}`}>
        <div className={styles.logInform}>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>Đăng nhập</p>
            <p>Chào mừng bạn quay lại</p>
          </div>
          <div className={styles.fieldForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Tên đăng nhập</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Cập nhật giá trị khi người dùng nhập
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị khi người dùng nhập
              />
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
          {/* chưa có tài khoản thì đăng kí */}
          <div
            className={`${styles.signupLink} d-flex align-items-center`}
            style={{ gap: '1rem' }}
          >
            <p>Chưa có tài khoản?</p>
            <a href="/register" style={{ color: '#6941C6' }}>
              Đăng ký
            </a>
          </div>
          {/* Khi người dùng nhấn Đăng nhập, gọi handleLogin */}
          <Button
            title="Đăng nhập"
            className={styles.ctaBtn}
            onClick={handleLogin}
          />

          {/* Hiển thị trạng thái loading nếu đang đăng nhập */}
          {loading && <p>Đang đăng nhập...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LogIn;
