import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import Lenis from '@studio-freight/lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const lenis = new Lenis({
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    AOS.refresh(); // Đồng bộ AOS sau mỗi frame của Lenis
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on('scroll', AOS.refresh); // Refresh AOS khi Lenis xử lý scroll

  // Khởi tạo AOS
  AOS.init({
    duration: 1000, // Thời gian hiệu ứng
    once: true, // Hiệu ứng chỉ chạy 1 lần
  });
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
