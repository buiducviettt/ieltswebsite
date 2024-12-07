import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Lưu thông tin người dùng
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API endpoint của bạn
  const API_URL = 'https://fakestoreapi.com';

  const login = async (username, password) => {
    setLoading(true);  // Đánh dấu là đang tải
    setError(null);    // Xóa lỗi trước khi gửi yêu cầu

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Kiểm tra xem server có phản hồi thành công không
      if (!response.ok) {
        throw new Error('Đăng nhập thất bại');
      }

      const data = await response.json();
      console.log('Kết quả trả về từ API:', data);

      if (data.token) {
        // Lưu token vào localStorage
        localStorage.setItem('authToken', data.token);
        setUser(data.user);  // Lưu thông tin người dùng
        setLoading(false);
        return true;  // Đăng nhập thành công
      } else {
        setLoading(false);
        setError('Thông tin đăng nhập không đúng');
        return false;  // Đăng nhập không thành công
      }
    } catch (err) {
      setLoading(false);
      setError('Đã xảy ra lỗi khi đăng nhập');
      console.error('Lỗi đăng nhập:', err);
      return false;  // Đăng nhập thất bại
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
