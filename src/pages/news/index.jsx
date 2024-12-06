import DefaultLayout from '../../components/Layout/Default Layout';
import Item from './NewsItem';
import styles from '../news/new.module.scss';
const New = () => {
  return (
    <DefaultLayout>
      <div className={`${styles.lessonBanner}`}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1>Tin tức mới nhất</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 ">
            <Item />
          </div>
          <div className="col-12 col-md-4 ">
            <Item />
          </div>
          <div className="col-12 col-md-4 ">
            <Item />
          </div>
          <div className="col-12 col-md-4 ">
            <Item />
          </div>
          <div className="col-12 col-md-4 ">
            <Item />
          </div>
          <div className="col-12 col-md-4 ">
            <Item />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default New;
