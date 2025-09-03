/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Lưu thông tin người dùng
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const API_URL = 'http://localhost:3000';

  // Hàm xử lý đăng nhập
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error(data.message || 'Đăng nhập thất bại');
      }
      const data = await response.json();
      console.log('Kết quả trả về từ API:', data);
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        setUser(data.user); // <-- lấy luôn từ login response
        localStorage.setItem('user', JSON.stringify(data.user));
        return true;
      }
    } catch (err) {
      setLoading(false);
      setError('Email hoặc mật khẩu không đúng');
      console.error('Login error FE:', err.message);
      return false;
    }
  };

  // Hàm xử lý đăng xuất
  const logout = () => {
    setLoading(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
  };

  // Lấy lại thông tin người dùng khi khởi động
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, error, successMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};
