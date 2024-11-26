import './feedback.scss';
import Images from '../../assets/image/Images';
const FeedbackItem = ({ name, avt, comment }) => {
  return (
    <div className="fb_item__wrapper mt-5">
      <div className="fb_item__quotes">
        <img src={Images.quote} alt="" />
      </div>
      <div className="fb_item__content d-flex flex-column">
        <p>{comment}</p>
        <div className="fb_item__user d-flex align-items-center">
          <img src={avt} alt="" />
          <div className="fb_item__user__content">
            <h3>{name}</h3>
            <p>Học viên Ielts</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedbackItem;
