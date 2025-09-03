import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu mỗi khi location thay đổi
  }, [location]);

  return null;
};

export default ScrollToTop;
