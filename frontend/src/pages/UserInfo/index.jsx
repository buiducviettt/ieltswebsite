import { useContext, useState } from 'react';
import { AuthContext } from '../../components/AccountContext';

import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from '../account.module.scss';
import Button from '../../components/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import axios from 'axios';
const UserInfo = () => {
  const [currentTab, setCurrentTab] = useState('mainInfo');
  const { user, logout } = useContext(AuthContext);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  useEffect(() => {
    const fetchPurchased = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) return;
      try {
        const res = await axios.get(
          'http://localhost:3000/checkout/purchased',
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        const list = res.data || [];
        console.log('list', list);
        setPurchasedCourses(list);
      } catch (err) {
        console.error('Lỗi khi load giỏ hàng:', err);
      }
    };
    fetchPurchased();
  }, []);
  const navigate = useNavigate();
  if (!user) {
    navigate('/login'); // Chuyển hướng tới trang đăng nhập
    return null; // Dừng render trang
  }
  return (
    <DefaultLayout>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className={styles.userTab}>
          <Box>
            <Tabs
              value={currentTab}
              onChange={(event, newValue) => setCurrentTab(newValue)}
              TabIndicatorProps={{
                style: { backgroundColor: '#EA7C69' }, // Đổi màu dòng kẻ ở đây
              }}
              sx={{
                '& .MuiTab-root': { color: '#000', fontSize: '1.4rem' }, // Màu chữ mặc định
                '& .Mui-selected': { color: '#EA7C69 !important' },
              }}
            >
              <Tab value="mainInfo" label="Thông tin cá nhân" />
              <Tab value="purchaseOrders" label="Khoá học đã mua" />
            </Tabs>
            <div>
              <Box sx={{ marginTop: '2.4rem', color: '#000' }}>
                <div className="contentTab">
                  {currentTab === 'mainInfo' && (
                    <div>
                      <h1>Thông tin người dùng</h1>
                      <p>
                        <strong>Email:</strong> : {user?.email}
                      </p>
                      <p>
                        <strong>Tên:</strong> : {user?.name}{' '}
                      </p>
                      <p>
                        <strong>Username</strong>: {user?.username}
                      </p>
                    </div>
                  )}
                  {currentTab === 'purchaseOrders' && (
                    <div>
                      <h1>Khoá học đã mua</h1>
                      {purchasedCourses.map((course, index) => (
                        <div key={index} className={styles.orderItem}>
                          <div className={styles.orderItemTitle}>
                            <img src={course.product.image} alt="" />
                            <p>{course.product.name}</p>
                            <p>Giá: {course.product.price * 24000}VNĐ </p>
                          </div>

                          <Button
                            title="Học ngay"
                            onClick={() =>
                              navigate(`/product/${course.productId}`)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Box>
            </div>
          </Box>
        </div>

        <Button title="Đăng xuất" onClick={logout} />
      </div>
    </DefaultLayout>
  );
};

export default UserInfo;
