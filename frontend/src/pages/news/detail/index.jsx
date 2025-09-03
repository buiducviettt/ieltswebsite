import { useParams } from 'react-router-dom';
import DefaultLayout from '../../../components/Layout/Default Layout';
import { useState, useEffect } from 'react';
import Images from '../../../assets/image/Images';

const NewDetails = () => {
  const [news, setNews] = useState([]);
  const { newsId } = useParams();
  const newList = [
    {
      id: 1,
      title: 'News Title 1',
      description:
        'Giấy dán tường hay giấy dán tường ảnh cho phòng tắm? Điều đó có thể không? Chắc chắn, tất nhiên! Nó chỉ phụ thuộc vào hình nền phù hợp và tay nghề phù hợp. ',
      image: Images.new1,
    },
    {
      id: 2,
      title: 'News Title 2',
      description: 'Description for news item 2',
      image: Images.new1,
    },
    {
      id: 3,
      title: 'News Title 3',
      description: 'Description for news item 3',
      image: Images.new1,
    },
    {
      id: 4,
      title: 'News Title 4',
      description: 'Description for news item 4',
      image: Images.new1,
    },
    {
      id: 5,
      title: 'News Title 5',
      description: 'Description for news item 5',
      image: Images.new1,
    },
  ];

  useEffect(() => {
    // Tìm bài viết dựa trên newsId
    const selectedNews = newList.find((item) => item.id === parseInt(newsId));
    setNews(selectedNews);
  }, [newsId]);

  if (!news) {
    return (
      <DefaultLayout>
        <h1>Loading...</h1>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="container mt-5">
        <h1>{news.title}</h1>
        <p>{news.description}</p>
        <img src={news.image} alt={news.title} style={{ width: '50%' }} />
      </div>
    </DefaultLayout>
  );
};

export default NewDetails;
