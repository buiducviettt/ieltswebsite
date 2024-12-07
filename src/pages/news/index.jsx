import DefaultLayout from '../../components/Layout/Default Layout';
import Item from './NewsItem';
import styles from '../news/new.module.scss';
import Images from '../../assets/image/Images';
import { useState } from 'react';
const news = [
  {
    id: 1,
    title: "News Title 1",
    description: "Description for news item 1",
    image: Images.new1,
    link: "/news/1"
  },
  {
    id: 2,
    title: "News Title 2",
    description: "Description for news item 2",
    image: Images.new1,
    link: "/news/2"
  },
  {
    id: 3,
    title: "News Title 2",
    description: "Description for news item 2",
    image: Images.new1,
    link: "/news/2"
  },  {
    id: 4,
    title: "News Title 2",
    description: "Description for news item 2",
    image: Images.new1,
    link: "/news/2"
  },
  {
    id: 5,
    title: "News Title 2",
    description: "Description for news item 2",
    image: Images.new1,
    link: "/news/2"
  },
  // Thêm các phần tử news khác nếu cần
];
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
        {news.map((item) => (
  <div className="col-md-3" key={item.id}>
    <div className="news-item">
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>
))}
        </div>
      </div>
    </DefaultLayout>
  );
};
export default New;
