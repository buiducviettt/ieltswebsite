import DefaultLayout from '../../components/Layout/Default Layout';
import styles from '../../pages/account.module.scss';
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords không khớp vui lòng nhập lại');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      console.log('Registration successful:', response.data);
      setSuccess('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
      setError(null);
      setFormData({
        username: '',
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
      });
    } catch (error) {
      setError(
        error.response.data.message || 'Đã xảy ra lỗi trong quá trình đăng ký',
      );
    }
  };
  return (
    <DefaultLayout>
      <section className={styles.registerPage}>
        <div className="container">
          <p className={styles.title}>Register Page</p>
          <form
            action=""
            className={styles.formRegister}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                value={formData.name}
                className="form-control"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={formData.username}
                className="form-control"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                value={formData.email}
                className="form-control"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                required
                value={formData.password}
                type="password"
                className="form-control"
                id="password"
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                required
                value={formData.confirmPassword}
                type="password"
                className="form-control"
                id="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.registerButton}>
              Register
            </button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
      </section>
    </DefaultLayout>
  );
};
export default Register;
