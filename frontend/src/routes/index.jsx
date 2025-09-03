import Homepage from '../pages/Home';
import Lesson from '../pages/Lesson';
import Introduction from '../pages/Introduction';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';
import ThankYouPage from '../components/thankyou';
import LogIn from '../pages/Login';
import New from '../pages/news';
import newDetails from '../pages/news/detail';
import UserInfo from '../pages/UserInfo';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import Schedule from '../pages/Schedule';
import TeacherDetails from '../pages/TeacherDetails';
import ViewLearn from '../pages/ViewLearn';
import ProductItem from '../components/ProductList/Product';
import Excercise from '../pages/Excercise';
import Register from '../pages/Register/register';
export const publicRoutes = [
  { path: '/register', component: Register },
  {
    path: '/product/:productId/excercise',
    component: Excercise,
  },
  {},
  { path: '/contact', component: Contact },
  { path: '/schedule', component: Schedule },
  {
    path: '/teacher/:teacherId',
    component: TeacherDetails,
  },
  {
    path: '/product/:productId/view',
    component: ViewLearn,
  },
  {
    path: '/faq',
    component: FAQ,
  },
  {
    path: '/userinfo',
    component: UserInfo,
  },
  {
    path: '/news',
    component: New,
  },
  {
    path: '/news/:newsId',
    component: newDetails,
  },
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
