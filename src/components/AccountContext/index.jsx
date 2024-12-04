import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  //user
  const [user, setUser] = useState(null);
  // lưu vào database
  useEffect(() => {
    const storeAccount = localStorage.getItem('user');
    if (storeAccount) {
      setUser(JSON.parse(storeAccount));
    }
  }, []);

  //login
  const login = (data) => {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  //logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  //check user log in chưa
  const isLogin = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
