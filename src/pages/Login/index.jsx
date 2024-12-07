import DefaultLayout from '../../components/Layout/Default Layout';
import Button from '../../components/Button';
import styles from '../../pages/account.module.scss';
import { useState, useContext } from 'react';
import { AuthContext } from '../../components/AccountContext'

const LogIn = () => {
  // Quản lý trạng thái email và password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useContext(AuthContext);  // Lấy hàm login và các thông tin từ context

  const handleLogin = async (e) => {
    e.preventDefault();

    // Gọi hàm login từ context để thực hiện đăng nhập
    const success = await login(username, password);
    if (success) {
      // Nếu đăng nhập thành công, có thể điều hướng người dùng hoặc thông báo
      alert('Đăng nhập thành công!');
      // Có thể điều hướng người dùng tới trang khác
      window.location.href = '/';  // Hoặc dùng react-router-dom để điều hướng
    } else {
      // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
      alert('Đăng nhập thất bại! ' + error);
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
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}  // Cập nhật giá trị khi người dùng nhập
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  // Cập nhật giá trị khi người dùng nhập
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
          {/* Khi người dùng nhấn Đăng nhập, gọi handleLogin */}
          <Button title="Đăng nhập" className={styles.ctaBtn} onClick={handleLogin} />
          
          {/* Hiển thị trạng thái loading nếu đang đăng nhập */}
          {loading && <p>Đang đăng nhập...</p>}
          {error && <p style={{ color: 'red' }}>Lỗi: {error}</p>}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LogIn;
