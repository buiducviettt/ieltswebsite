import Homepage from '../pages/Home';
import Lesson from '../pages/Lesson';
import Introduction from '../pages/Introduction';
import ProductDetail from '../pages/ProductDetail';
export const publicRoutes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/product/:productId',
    component: ProductDetail,
  },
  {
    path: '/lesson',
    component: Lesson,
  },
  {
    path: '/aboutus',
    component: Introduction,
  },
];
export const privateRoutes = [];
