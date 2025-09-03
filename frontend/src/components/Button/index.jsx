import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({ className, title, onClick, to }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {to ? (
        <Link to={to}>{title}</Link> // Nếu có `to`, render Link
      ) : (
        <span>{title}</span> // Nếu không, chỉ render một span
      )}
    </button>
  );
};

export default Button;
