import BannerText from '../../components/BannerText';
import DefaultLayout from '../../components/Layout/Default Layout';
import ProductList from '../../components/ProductList';
const Lesson = () => {
  return (
    <DefaultLayout>
      <BannerText
        title="KHOÁ HỌC CỦA CHÚNG TÔI"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="lessons__wrapper">
        <ProductList />
      </div>
    </DefaultLayout>
  );
};
export default Lesson;
