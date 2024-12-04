import Homepage from '../pages/Home';
import Lesson from '../pages/Lesson';
import Introduction from '../pages/Introduction';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';
import ThankYouPage from '../components/thankyou';
import LogIn from '../pages/Login';

export const publicRoutes = [
  {
    path: '/login',
    component: LogIn,
  },
  {
    path: '/thank-you',
    component: ThankYouPage,
  },
  {
    path: '/checkout',
    component: Checkout,
  },
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
