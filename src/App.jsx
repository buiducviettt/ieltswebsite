import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import Lenis from '@studio-freight/lenis';
function App() {
  const lenis = new Lenis({
    lerp: 0.1, // Tốc độ mượt mà của cuộn
    smoothWheel: true, // Cho phép cuộn chuột mượt mà
    smoothTouch: false, // Cho phép cuộn mượt mà trên cảm ứng
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
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
