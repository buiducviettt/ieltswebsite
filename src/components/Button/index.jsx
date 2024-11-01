import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({ className, title }) => {
  return (
    <div className={`${styles.button} ${className}`}>
      <Link to="/">{title}</Link>
      <img src={Image} alt="" />
    </div>
  );
};

export default Button;
