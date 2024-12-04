import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos'; // Import thư viện
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Thời gian hiệu ứng (ms)
      once: true, // Chỉ chạy một lần
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
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
