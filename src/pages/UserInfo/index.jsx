import { useContext } from 'react';
import { AuthContext } from '../../components/AccountContext';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../components/Layout/Default Layout';
import Button from '../../components/Button';

const UserInfo = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login'); // Chuyển hướng tới trang đăng nhập
    return null; // Dừng render trang
  }
  return (
    <DefaultLayout>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1>Thông tin người dùng</h1>
        <p>
          <strong>Email:</strong> : {user.email}
        </p>
        <p>
          <strong>Tên:</strong> : {user.name.firstname} {user.name.lastname}
        </p>
        <p>
          <strong>Số điện thoại:</strong>: : {user.phone}
        </p>
        <p></p>
        <Button title="Đăng xuất" onClick={logout} />
      </div>
    </DefaultLayout>
  );
};

export default UserInfo;
