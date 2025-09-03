import BreadCrumb from '../BreadCrumb';

import './bannertext.scss';
const BannerText = ({ title, desc }) => {
  return (
    <div className="bntxt__wrapper">
      <div className="bntxt__content">
        <BreadCrumb />
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default BannerText;
