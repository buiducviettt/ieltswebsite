import DefaultLayout from '../../components/Layout/Default Layout';
import BannerText from '../../components/BannerText';
import Faq from 'react-faq-component';
const data = {
  title: 'Frequently Asked Questions',
  rows: [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'How do you use React?',
      content: 'React is used by creating components that manage their state.',
    },
    {
      title: 'How do you use React?',
      content: 'React is used by creating components that manage their state.',
    },
    {
      title: 'How do you use React?',
      content: 'React is used by creating components that manage their state.',
    },
    {
      title: 'How do you use React?',
      content: 'React is used by creating components that manage their state.',
    },
  ],
};
const FAQ = () => {
  return (
    <DefaultLayout>
      <BannerText
        title="TẤT CẢ THÔNG TIN BẠN CẦN BIẾT"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="container">
        <Faq data={data} />
      </div>
    </DefaultLayout>
  );
};
export default FAQ;
