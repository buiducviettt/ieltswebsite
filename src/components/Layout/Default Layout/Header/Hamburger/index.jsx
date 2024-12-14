import './hamburger.scss';
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import Images from '../../../../../assets/image/Images';

// eslint-disable-next-line react/prop-types
const Hamburger = ({ className }) => {
  return (
    <Menu className={className}>
      <Link to="/">
        <div>
          <img src={Images.logo} alt="" />
        </div>
      </Link>
      <Link to="/aboutus">Giới thiệu</Link>
      <Link to="">Lịch khai giảng</Link>
      <Link to="/lesson">Khoá học</Link>
      <Link to="">Tài liệu IELTS</Link>
      <Link to="">Tự học IELTS</Link>
    </Menu>
  );
};

export default Hamburger;
