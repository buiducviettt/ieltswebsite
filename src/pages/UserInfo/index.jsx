import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../components/AccountContext';

import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from '../account.module.scss';
import Button from '../../components/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
const UserInfo = () => {
  const [currentTab, setCurrentTab] = useState('mainInfo');
  const { user, logout } = useContext(AuthContext);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  useEffect(() => {
    const storedCourses = localStorage.getItem('purchasedCourses');
    if (storedCourses) {
      setPurchasedCourses(JSON.parse(storedCourses));
    }
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
                        <strong>Tên:</strong> : {user?.name?.firstname}{' '}
                        {user?.name?.lastname}
                      </p>
                      <p>
                        <strong>Số điện thoại:</strong>: : {user?.phone}
                      </p>
                    </div>
                  )}
                  {currentTab === 'purchaseOrders' && (
                    <div>
                      <h1>Khoá học đã mua</h1>
                      {purchasedCourses.map((course, index) => (
                        <div key={index}>
                          <h2>{course.name}</h2>
                          <p>Giá: {course.price} VNĐ</p>
                          <Button
                            title="Học ngay"
                            onClick={() => navigate(`/product/${course.id}`)}
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
