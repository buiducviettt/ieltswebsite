import { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Lưu thông tin người dùng
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = 'https://fakestoreapi.com';

  // Hàm xử lý đăng nhập
  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Đăng nhập thất bại');
      }

      const data = await response.json();
      console.log('Kết quả trả về từ API:', data);

      if (data.token) {
        localStorage.setItem('authToken', data.token);

        // Lấy thông tin người dùng chi tiết
        const userResponse = await fetch(`${API_URL}/users/2`);
        const userData = await userResponse.json();
        setUser(userData);

        localStorage.setItem('user', JSON.stringify(userData)); // Lưu user vào localStorage
        setLoading(false);
        return true;
      } else {
        setLoading(false);
        setError('Thông tin đăng nhập không đúng');
        return false;
      }
    } catch (err) {
      setLoading(false);
      setError('Đã xảy ra lỗi khi đăng nhập');
      console.error(err);
      return false;
    }
  };

  // Hàm xử lý đăng xuất
  const logout = () => {
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
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
