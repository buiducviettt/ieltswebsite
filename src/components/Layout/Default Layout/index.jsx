import Footer from './Footer';
import Header from './Header';
import styles from '../Default Layout/DefaultLayout.module.scss';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  );
};
export default DefaultLayout;
